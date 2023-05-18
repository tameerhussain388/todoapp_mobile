import React from 'react';
import Toast from 'react-native-toast-message';

const TOAST = ({message}) => {
  Toast.show({
    type: 'success',
    text1: message,
    text2: 'This is some something 👋',
  });
};

export default TOAST;
