const INITIAL_STATE = {
  name: null,
  email: null,
  dp: null,
};

export const myProfile = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_MY_PROFILE':
      return { ...state, ...payload };
    default:
      return state;
  }
};
