import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { MdChevronRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container, Meetup } from './styles';
import api from '../../services/api';

import { updateMeetupRequest } from '../../store/modules/user/actions';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);
  const dispatch = useDispatch();

  function formatData(dtmeetapp) {
    const dateFormatted = format(parseISO(dtmeetapp), "d 'de' MMMM", {
      locale: pt,
    });

    return dateFormatted;
  }

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('mymeetups', {});
      setMeetups(response.data);
    }

    loadMeetups();
  }, []);

  function handleDetails(event, id) {
    dispatch(updateMeetupRequest(id));
  }

  return (
    <Container>
      <header>
        <strong>Meus meetups</strong>
        <Link to="/newmeetup">
          <button type="button">Novo meetup</button>
        </Link>
      </header>

      <ul>
        {meetups.map(meetup => (
          <Meetup key={meetups.meetup}>
            <strong>{meetup.title}</strong>
            <aside>
              <span>{formatData(meetup.date)}</span>
              <Link to="/details">
                <button
                  type="button"
                  onClick={event => handleDetails(event, meetup.id)}
                >
                  <MdChevronRight size={25} color="#fff" />
                </button>
              </Link>
            </aside>
          </Meetup>
        ))}
      </ul>
    </Container>
  );
}
