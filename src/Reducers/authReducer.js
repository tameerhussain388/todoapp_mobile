import {
  EMAIL_CHANGE,
  PASSWORD_CHANGE,
  USER_LOGIN_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  NAME_CHANGE,
  SIGNUP_USER,
} from '../Actions/types';

const InitialState = {
  name: '',
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false,
};
export default (state = InitialState, action) => {
  switch (action.type) {
    case EMAIL_CHANGE:
      return {...state, email: action.payload};
    case NAME_CHANGE:
      return {...state, name: action.payload};
    case PASSWORD_CHANGE:
      return {...state, password: action.payload};
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: '',
        loading: false,
        password: '',
        email: '',
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        error: 'Authentication Failed',
        loading: false,
        password: '',
      };
    case LOGIN_USER:
      return {...state, loading: true, error: ''};
    case SIGNUP_USER:
      return {...state, loading: true, error: ''};
    default:
      return state;
  }
};
