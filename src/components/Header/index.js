import React from 'react';
import {Text, View} from 'react-native';
import MontserratBold from '../TextWrapper/MontserratBold';
import styles from './styles';
const Header = ({headerText}) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{headerText}</Text>
      <MontserratBold>dsada</MontserratBold>
    </View>
  );
};

export default Header;
