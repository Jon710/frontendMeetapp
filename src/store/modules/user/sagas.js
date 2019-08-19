import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import {
  updateProfileSuccess,
  updateProfileFailure,
  updateMeetupSuccess,
  updateMeetupFailure,
  updateDetailsSuccess,
  updateDetailsFailure,
} from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;

    const profile = {
      name,
      email,
      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, 'users', profile);

    toast.success('Perfil atualizado com sucesso!');

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    toast.error('Erro ao atualizar perfil, confira seus dados!');
    yield put(updateProfileFailure());
  }
}

export function* updateMeetup({ payload }) {
  try {
    const { title, description, date, location, ...rest } = payload.data;

    const meetup = {
      title,
      description,
      date,
      location,
      rest,
    };

    const response = yield call(api.put, 'meetups', meetup);

    toast.success('Meetup atualizado com sucesso!');

    yield put(updateMeetupSuccess(response.data));
  } catch (err) {
    // toast.error('Erro ao atualizar meetup.');
    yield put(updateMeetupFailure());
  }
}

export function* updateDetails({ payload }) {
  try {
    console.tron.log('cade payload', payload);
    const { title, description, date, location, id, ...rest } = payload.data;

    const meetup = {
      title,
      description,
      date,
      location,
      id,
      rest,
    };

    // const response = await api.get(`meetups/${objMeetup.meetup}`);
    const response = yield call(api.put, `meetups/${id}`, meetup);

    toast.success('Meetup atualizado com sucesso!');

    yield put(updateDetailsSuccess(response.data));
  } catch (err) {
    // toast.error('Erro ao atualizar meetup.');
    yield put(updateDetailsFailure());
  }
}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile),
  takeLatest('@user/UPDATE_MEETUP_REQUEST', updateMeetup),
  takeLatest('@user/UPDATE_DETAILS_REQUEST', updateDetails),
]);
