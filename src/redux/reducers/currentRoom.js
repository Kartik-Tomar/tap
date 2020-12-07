import { SET_CURRENT_ROOM } from '../../utils';

const INITIAL_STATE = {
  roomId: null,
  contactId: null,
  contactData: null,
  from: null,
  messages: null,
};

export const currentRoom = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CURRENT_ROOM:
      return { ...state, ...payload };
    default:
      return state;
  }
};
