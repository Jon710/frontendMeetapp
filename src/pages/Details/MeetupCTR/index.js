import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { MdDeleteForever, MdEdit } from 'react-icons/md';

import history from '../../../services/history';

import { Container, Manager, Canceled } from './styles';

import { cancelMeetUpRequest } from '../../../store/modules/meetup/actions';

export default function MeetupCTR({ canceled, meetupId }) {
  const dispatch = useDispatch();

  function handleCancelMeetup(meetup_id) {
    dispatch(cancelMeetUpRequest(meetup_id));
  }

  function handleUpdateMeetup(meetup_id) {
    history.push('/newmeetup', { meetup_id });
  }

  return (
    <Container>
      {canceled ? (
        <Canceled>
          <strong>Evento Cancelado</strong>
        </Canceled>
      ) : (
        <Manager>
          <button
            className="edit"
            type="button"
            onClick={() => handleUpdateMeetup(meetupId)}
          >
            <MdEdit size={20} color="#fff" style={{ marginRight: 5 }} />
            Editar
          </button>
          <button
            type="button"
            className="cancel"
            onClick={() => handleCancelMeetup(meetupId)}
          >
            <MdDeleteForever
              size={20}
              color="#fff"
              style={{ marginRight: 5 }}
            />
            Cancelar
          </button>
        </Manager>
      )}
    </Container>
  );
}

MeetupCTR.propTypes = {
  canceled: PropTypes.bool.isRequired,
  meetupId: PropTypes.number.isRequired,
};
