import { takeLatest, put, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '../../../services/api';
import history from '../../../services/history';

import { meetUpListSuccess, createMeetUpSuccess } from './actions';

export function* meetUpList() {
  const response = yield call(api.get, 'mymeetups');
  console.tron.log(response.data);

  const data = response.data.map(meetup => ({
    ...meetup,
    dateFormatted: format(parseISO(meetup.date), "dd 'de' MMMM, 'às' HH'h'", {
      locale: pt,
    }),
  }));
  console.tron.log(data);

  yield put(meetUpListSuccess(data));
}

export function* createMeetUp({ payload }) {
  try {
    const { title, description, location, file_id, date } = payload.data;

    console.tron.log('create', payload.data);
    const response = yield call(api.post, 'meetups', {
      title,
      description,
      location,
      date,
      banner: Number(file_id),
    });

    const data = {
      ...response.data,
      dateFormatted: format(
        parseISO(response.data.date),
        "dd 'de' MMMM, 'às' HH'h'",
        {
          locale: pt,
        }
      ),
    };

    yield put(createMeetUpSuccess(data));

    toast.success('Criado novo meetup!');

    history.push('/dashboard');
  } catch (error) {
    toast.error('Erro ao criar meetup, confira os dados');
    console.tron.log(error);
  }
}

export function* cancelMeetUp({ payload }) {
  const { meetupId } = payload;

  yield call(api.delete, `meetups/${meetupId}`);

  toast.info('Meetup cancelado!');

  yield meetUpList();

  history.push('/');
}

export function* updateMeetUp({ payload }) {
  try {
    console.tron.log('update zika', payload.data);
    const { title, description, location, date, file_id } = payload.data;
    const meetupId = payload.meetup.id;

    yield call(api.put, `meetups/${meetupId}`, {
      title,
      description,
      location,
      date,
      file_id,
    });

    yield meetUpList();

    toast.success('Meetup atualizado!');
  } catch (error) {
    toast.error('Erro ao atualizar meetup. Verifique os dados');
    console.tron.log(error);
  }
}

export default all([
  takeLatest('@meetup/CREATE_MEETUP_REQUEST', createMeetUp),
  takeLatest('@meetup/MEET_LIST_REQUEST', meetUpList),
  takeLatest('@meetup/CANCEL_MEETUP', cancelMeetUp),
  takeLatest('@meetup/UPDATE_MEETUP_REQUEST', updateMeetUp),
]);
