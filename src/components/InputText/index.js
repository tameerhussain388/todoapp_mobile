import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Input = ({
  label,
  showText,
  placeholder,
  value,
  onChangeText,
  textStyle,
  textInputStyle,
  keyboardType,
  emailValid,
}) => {
  return (
    <View style={styles.container}>
      <Icon name={`${label}`} size={styles.iconSize} color={styles.iconColor} />
      <TextInput
        pattern={emailValid}
        autoCapitalize="none"
        keyboardType={keyboardType}
        secureTextEntry={showText}
        style={[styles.inputText, textInputStyle]}
        placeholder={placeholder}
        placeholderTextColor={styles.placeHolderColor}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default Input;
