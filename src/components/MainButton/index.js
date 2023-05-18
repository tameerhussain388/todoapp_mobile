import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import MontserratMedium from '../TextWrapper/MontserratMedium';
import MontserratBold from '../TextWrapper/MontserratBold';
import MontserratRegular from '../TextWrapper/MontserratRegular';
const Button = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
      <MontserratBold style={styles.buttonText}>{text}</MontserratBold>
    </TouchableOpacity>
  );
};

export default Button;
