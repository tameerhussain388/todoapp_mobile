import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

import {
  TASK_CREATE,
  TASK_FETCH_SUCCESS,
  TASK_SAVE,
  ADD_CATEGORY,
  CATEGORY_FETCH_SUCCESS,
} from './types';

export const taskCreate = ({
  title,
  date,
  status,
  CategoryID,
  color,
  categoryName,
}) => {
  const Date = date.toString();
  console.warn({title, date, status, CategoryID, color, categoryName});
  const {currentUser} = auth();
  return async dispatch => {
    await database()
      .ref(`/task/${currentUser.uid}/tasks`)
      .push({title, Date, status, CategoryID, color, categoryName})
      .then(() => dispatch({type: TASK_CREATE}));
    return true;
  };
};

export const categoryCreate = ({title, color}) => {
  const {currentUser} = auth();
  return async dispatch => {
    await database()
      .ref(`/task/${currentUser.uid}/categories`)
      .push({title, color})
      .then(() => dispatch({type: ADD_CATEGORY, payload: {title, color}}));
    return true;
  };
};

export const categoryFetch = () => {
  const {currentUser} = auth();
  return dispatch => {
    database()
      .ref(`/task/${currentUser.uid}/categories`)
      .on('value', snapshot => {
        dispatch({type: CATEGORY_FETCH_SUCCESS, payload: snapshot.val()});
      });
  };
};

export const tasksFetch = () => {
  const {currentUser} = auth();
  return dispatch => {
    database()
      .ref(`/task/${currentUser.uid}/tasks`)
      .on('value', snapshot => {
        dispatch({type: TASK_FETCH_SUCCESS, payload: snapshot.val()});
      });
  };
};

export const taskUpdate = ({
  title,
  Date,
  status,
  CategoryID,
  color,
  categoryName,
  uid,
}) => {
  const {currentUser} = auth();
  return async dispatch => {
    await database()
      .ref(`/task/${currentUser.uid}/tasks/${uid}`)
      .set({title, Date, status, CategoryID, color, categoryName})
      .then(() => dispatch({type: TASK_SAVE, payload: status}));
    return true;
  };
};

export const taskDelete = ({uid}) => {
  const {currentUser} = auth();
  return async () => {
    await database()
      .ref(`/task/${currentUser.uid}/tasks/${uid}`)
      .remove()
      .then();
    return true;
  };
};
