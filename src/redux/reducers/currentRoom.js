import { SET_CURRENT_ROOM, SET_MESSAGES } from '../../utils';

const INITIAL_STATE = {
  roomId: null,
  contactId: null,
  contactData: null,
  from: null,
  messages: null,
};

const setMessages = (state = INITIAL_STATE, payload) => {
  if (state.roomId === payload.roomId)
    return { ...state, messages: payload.messages };
  else return state;
};

export const currentRoom = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CURRENT_ROOM:
      return { ...state, ...payload };
    case SET_MESSAGES:
      return setMessages(state, payload);
    default:
      return state;
  }
};
