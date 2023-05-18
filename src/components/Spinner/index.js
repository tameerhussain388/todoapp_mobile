import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from './styles';

const Spinner = ({size}) => {
  return (
    <View>
      <ActivityIndicator
        style={styles.spinnerStyle}
        color={'#000'}
        size={size || 'large'}
      />
    </View>
  );
};

export default Spinner;
