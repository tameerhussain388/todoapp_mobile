import React from 'react';
import styles from './styles';
import {Text} from 'react-native';
// import Clipboard from '@react-native-community/clipboard';
const TextHOC = props => {
  return (
    <Text
      // onLongPress={() => copyText(props.children)}
      ellipsizeMode="tail"
      adjustsFontSizeToFit={false}
      allowFontScaling={false}
      {...props}
      style={[styles.font, props.style]}>
      {props.children}
    </Text>
  );
};

export default TextHOC;
