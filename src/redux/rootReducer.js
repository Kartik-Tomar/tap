import { combineReducers } from 'redux';

import { myProfile } from './reducers/myProfile';
import { rooms } from './reducers/rooms';

export default combineReducers({
  myProfile,
  rooms,
});
