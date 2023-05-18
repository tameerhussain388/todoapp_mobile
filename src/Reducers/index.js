import {combineReducers} from 'redux';
import authReducer from './authReducer';
import taskReducer from './taskReducer';
import tasksReducer from './tasksReducer';

export default combineReducers({
  auth: authReducer,
  category: taskReducer,
  tasks: tasksReducer,
});
