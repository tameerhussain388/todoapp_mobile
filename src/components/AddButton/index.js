import React from 'react';
import {View, TouchableOpacity, LogBox} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const AddButton = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('addTask');
        }}
        style={styles.addButton}>
        <Icon name="plus" size={styles.iconSize} color={styles.iconColor} />
      </TouchableOpacity>
    </View>
  );
};

export default AddButton;
