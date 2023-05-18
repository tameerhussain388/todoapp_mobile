import {
  LOADING_ON,
  LOADING_OFF,
  TASK_CREATE,
  TASK_SAVE,
  ADD_CATEGORY,
  CATEGORY_FETCH_SUCCESS,
} from '../Actions/types';

const InitialState = {
  categories: {},
};

export default (state = InitialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return {...state, categories: [...state.categories, action.payload]};
    case CATEGORY_FETCH_SUCCESS:
      // return {...state, categories: action.payload};
      // return {categories: action.payload};
      return action.payload;
    default:
      return state;
  }
};
