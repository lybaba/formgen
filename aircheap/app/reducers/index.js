import { combineReducers } from 'redux';
import airports from './airports';
import route from './route';
import tickets from './tickets';
import form from './form';

const rootReducer = combineReducers({
  airports,
  route,
  tickets,
  form
});

export default rootReducer;
