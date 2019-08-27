import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import PropTypes from 'prop-types';
import { parseISO } from 'date-fns';

import { Container } from './styles';

import SelectDate from './DatePicker';
import ImageInput from './ImageInput';

import {
  createMeetUpRequest,
  upDateMeetUpRequest,
} from '../../store/modules/meetup/actions';

export default function NewMeetups({ history }) {
  const dispatch = useDispatch();
  const meetups = useSelector(state => state.meetup.meetups);

  const [date, setDate] = useState();

  const { state } = history.location;
  let meetupInfos;

  if (state) {
    const { meetup_id } = history.location.state;
    meetupInfos = meetups.find(meetup => meetup.id === meetup_id);
    meetupInfos.date = parseISO(meetupInfos.date);
  }

  function handleNewMeetup(data) {
    dispatch(createMeetUpRequest(data));
  }

  function handleUpdateMeetup(data) {
    dispatch(upDateMeetUpRequest(data, meetupInfos));
  }

  return (
    <Container>
      <Form
        onSubmit={
          meetupInfos === undefined ? handleNewMeetup : handleUpdateMeetup
        }
        initialData={meetupInfos}
        autoComplete="off"
      >
        <ImageInput name="file_id" />
        <Input placeholder="Titulo" name="title" />
        <Input multiline placeholder="Descrição" name="description" />
        <Input placeholder="Localização" name="location" />
        <SelectDate selected={date} setSelected={setDate} name="date" />
        <button type="submit">
          <MdAddCircleOutline size={20} color="#fff" />
          Salvar Meetup
        </button>
      </Form>
    </Container>
  );
}

NewMeetups.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
};
