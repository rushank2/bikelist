import { combineReducers } from 'redux';
import auth from './auth';
import bikesData from './bike';

export default combineReducers({
  auth,
  bikesData
});
