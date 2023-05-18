import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  EMAIL_CHANGE,
  PASSWORD_CHANGE,
  USER_LOGIN_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  NAME_CHANGE,
  SIGNUP_USER,
} from './types';

export const emailChanged = text => {
  return {
    type: EMAIL_CHANGE,
    payload: text,
  };
};

export const nameChanged = text => {
  return {
    type: NAME_CHANGE,
    payload: text,
  };
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGE,
    payload: text,
  };
};
export const loginUser = ({email, password}) => {
  return async dispatch => {
    dispatch({type: LOGIN_USER});
    console.log('INSIDE LOGIN ACTION', email, password);
    const res = await auth()
      .signInWithEmailAndPassword(email, password)
      .then(async user => {
        await AsyncStorage.setItem('token', user.user.uid);
        dispatch({type: USER_LOGIN_SUCCESS, payload: user});
        console.log('INSIDE THEN LOGIN ACTION ', email, password);
        return user;
      })
      .catch(err => {
        console.log('INSIDE CATCH LOGIN ACTION ', err);
        dispatch({type: LOGIN_USER_FAIL});
        return err; //throw new Error
      });
    return res;
  };
};

export const localSignIn = () => {
  return async () => {
    const token = await AsyncStorage.getItem('token');

    return Promise.resolve(token);
  };
};

export const signout = dispatch => {
  return async () => {
    await AsyncStorage.removeItem('token');
  };
};

export const signupUser = ({email, password}) => {
  return async dispatch => {
    dispatch({type: SIGNUP_USER});
    const res = await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        dispatch({type: USER_LOGIN_SUCCESS, payload: user});
        return user;
      })
      .catch(err => {
        dispatch({type: LOGIN_USER_FAIL});
        return err; //throw new Error
      });
    return res;
  };
};
