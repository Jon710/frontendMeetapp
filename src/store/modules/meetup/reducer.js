import produce from 'immer';

const INITIAL_STATE = {
  meetups: null,
};

export default function meetup(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetup/MEET_LIST_SUCCESS':
        draft.meetups = action.payload.meetups;
        break;
      case '@meetup/CREATE_MEETUP_SUCCESS':
        draft.meetups.push(action.payload.meetup);
        break;
      case '@auth/SIGN_OUT':
        draft.meetups = null;
        break;
      default:
        break;
    }
  });
}
