import { SET_CURRENT_ROOM } from '../../utils';

const INITIAL_STATE = {
  currentRoom: null,
};

export const rooms = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CURRENT_ROOM:
      return { ...state, ...payload };
    default:
      return state;
  }
};
