import {CATEGORY_FETCH_SUCCESS, TASK_FETCH_SUCCESS} from '../Actions/types';

const InitialState = {};

export default (state = InitialState, action) => {
  switch (action.type) {
    case TASK_FETCH_SUCCESS:
      return action.payload;

    default:
      return state;
  }
};
