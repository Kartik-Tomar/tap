import { SET_MY_PROFILE, SET_CONTACT_LIST } from '../../utils';

const INITIAL_STATE = {
  name: null,
  email: null,
  dp: null,
  contactList: null,
};

export const myProfile = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_MY_PROFILE:
      return { ...state, ...payload };
    case SET_CONTACT_LIST:
      return { ...state, ...payload };
    default:
      return state;
  }
};
