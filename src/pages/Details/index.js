import React from 'react';

import { useSelector } from 'react-redux';
import { MdEvent, MdPlace } from 'react-icons/md';
import PropTypes from 'prop-types';

import { Container, Content, Title, Description } from './styles';
import error from '../../assets/error.jpg';
import MeetupCTR from './MeetupCTR';

// const useStyles = makeStyles(theme => ({
//   button: {
//     margin: theme.spacing(1),
//   },
//   input: {
//     display: 'flex',
//   },
// }));

export default function Details({ match }) {
  const { id } = match.params;
  const meetups = useSelector(state => state.meetup.meetups);

  const selectMeetup = meetups[id];
  const canceled = !!selectMeetup.canceled_at;
  // const classes = useStyles();
  // const objMeetup = useSelector(state => state.user);
  // const dispatch = useDispatch();

  // const [meetup, setMeetup] = useState([]);
  // console.tron.log('meetupId', objMeetup.meetup);
  // useEffect(() => {
  //   async function loadMeetup() {
  //     try {
  //       const response = await api.get(`meetups/${objMeetup.meetup}`);

  //       setMeetup({
  //         ...response.data,
  //         url: response.data.imgMeetup.url,
  //         formattedDate: format(
  //           parseISO(response.data.date),
  //           "d 'de' MMMM', às' HH':'mm",
  //           {
  //             locale: pt,
  //           }
  //         ),
  //       });
  //     } catch (err) {
  //       toast.error('Erro ao acessar os detalhes do meetup');
  //       history.push('/dashboard');
  //     }
  //   }

  //   loadMeetup();
  // }, [objMeetup.meetup]);

  // function handleMeetup(event, id) {
  //   dispatch(updateMeetupRequest(id));
  // }

  return (
    <Container>
      <Content canceled={canceled}>
        <Title canceled={canceled}>
          <strong>{selectMeetup.title}</strong>
          <MeetupCTR canceled={canceled} meetupId={selectMeetup.id} />
        </Title>
        <div className="image">
          <img
            src={selectMeetup.File ? selectMeetup.File.url : error}
            alt="MeetUp"
          />
        </div>
        <Description>{selectMeetup.description}</Description>
        <time>
          <MdEvent size={20} color="#fff" style={{ marginRight: 5 }} />
          {selectMeetup.dateFormatted}
        </time>
        <local>
          <MdPlace size={20} color="#fff" style={{ marginRight: 5 }} />
          {selectMeetup.location}
        </local>
      </Content>
    </Container>
  );
}

Details.propTypes = {
  match: PropTypes.number.isRequired,
};
