import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import history from '../../services/history';
import 'react-datepicker/dist/react-datepicker.css';
import api from '../../services/api';
import { updateDetailsRequest } from '../../store/modules/user/actions';

// import ImageInput from './ImageInput';

import { Container } from './styles';

export default function NewMeetup() {
  const objMeetup = useSelector(state => state.user);
  const dispatch = useDispatch();

  const [meetup, setMeetup] = useState([]);
  useEffect(() => {
    async function loadMeetup() {
      try {
        const response = await api.get(`meetups/${objMeetup.meetup}`);
        console.tron.log(response.data);

        setMeetup({
          ...response.data,
          id: objMeetup.meetup,
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
        toast.error('Erro ao editar');
        history.push('/details');
      }
    }

    loadMeetup();
  }, [objMeetup.meetup]);

  function handleSubmit(data) {
    console.tron.log('oi');
    dispatch(updateDetailsRequest(data));
  }

  return (
    <Container>
      <Form initialData={meetup} onSubmit={handleSubmit}>
        {/* <ImageInput name="file_id" src={meetup.url} /> */}
        <Input name="title" placeholder="Titulo do meetup" />
        <Input name="id" hidden />
        <Input name="description" placeholder="Descrição" />
        <Input name="date" type="date" placeholder="Data" />
        <Input name="location" placeholder="Localização" />

        <button type="submit">Salvar meetup</button>
      </Form>
    </Container>
  );
}
