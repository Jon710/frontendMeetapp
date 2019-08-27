import React from 'react';
import { useSelector } from 'react-redux';
import { MdChevronRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { Container, Meetup } from './styles';

export default function Dashboard() {
  const meetUpList = useSelector(state => state.meetup.meetups);
  // const [meetups, setMeetups] = useState([]);
  // const dispatch = useDispatch();

  // function formatData(dtmeetapp) {
  //   const dateFormatted = format(parseISO(dtmeetapp), "d 'de' MMMM", {
  //     locale: pt,
  //   });

  //   return dateFormatted;
  // }

  // useEffect(() => {
  //   async function loadMeetups() {
  //     const response = await api.get('mymeetups', {});
  //     setMeetups(response.data);
  //   }

  //   loadMeetups();
  // }, []);

  // function handleDetails(event, id) {
  //   dispatch(updateMeetupRequest(id));
  // }

  return (
    <Container>
      <header>
        <strong>Meus meetups</strong>
        <Link to="/newmeetup">
          <button type="button">Novo meetup</button>
        </Link>
      </header>

      <ul>
        {meetUpList
          ? meetUpList.map((meetup, index) => (
              <Meetup key={meetup.id} active={!!meetup.canceled_at}>
                <strong>{meetup.title}</strong>

                <aside>
                  {meetup.canceled_at && (
                    <strong className="eventStatus">Evento cancelado</strong>
                  )}
                  <time>{meetup.dateFormatted}</time>
                  <Link to={`details/${index}`}>
                    <MdChevronRight size={25} color="#fff" />
                  </Link>
                </aside>
              </Meetup>
            ))
          : null}
      </ul>
    </Container>
  );
}
