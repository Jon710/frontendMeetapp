import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@rocketseat/unform';
import { useSelector, useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { toast } from 'react-toastify';
import history from '../../services/history';
import { Container } from './styles';
import { updateMeetupRequest } from '../../store/modules/user/actions';

import api from '../../services/api';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'flex',
  },
}));

export default function Details() {
  const classes = useStyles();
  const objMeetup = useSelector(state => state.user);
  const dispatch = useDispatch();

  const [meetup, setMeetup] = useState([]);
  console.tron.log('meetupId', objMeetup.meetup);
  useEffect(() => {
    async function loadMeetup() {
      try {
        const response = await api.get(`meetups/${objMeetup.meetup}`);

        setMeetup({
          ...response.data,
          url: response.data.imgMeetup.url,
          formattedDate: format(
            parseISO(response.data.date),
            "d 'de' MMMM', às' HH':'mm",
            {
              locale: pt,
            }
          ),
        });
      } catch (err) {
        toast.error('Erro ao acessar os detalhes do meetup');
        history.push('/dashboard');
      }
    }

    loadMeetup();
  }, [objMeetup.meetup]);

  function handleMeetup(event, id) {
    dispatch(updateMeetupRequest(id));
  }

  return (
    <Container>
      <Form>
        <header>
          <strong>{meetup.title}</strong>
          <aside>
            <Link to="/newmeetup">
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={event => handleMeetup(event, objMeetup.meetup)}
              >
                Editar
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                Cancelar
              </Button>
            </Link>
          </aside>
        </header>
      </Form>
      <>
        <img src={meetup.url} alt="Details" />

        <h1>{meetup.description}</h1>
        <h2>{meetup.location}</h2>
        <h2>{meetup.formattedDate}</h2>
      </>
    </Container>
  );
}
