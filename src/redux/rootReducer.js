import { combineReducers } from 'redux';

import { myProfile } from './reducers/myProfile';
import { currentRoom } from './reducers/currentRoom';

export default combineReducers({
  myProfile,
  currentRoom,
});
