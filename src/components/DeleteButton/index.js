import React from 'react';
import {View, TouchableOpacity, Image, LayoutAnimation} from 'react-native';
import {taskDelete} from '../../Actions';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {useDispatch} from 'react-redux';

const DeleteButton = task => {
  const dispatch = useDispatch();
  function onButton() {}

  return (
    <TouchableOpacity
      style={styles.taskContainer}
      onPress={() => {
        const uid = task.task.item.uid;
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        dispatch(taskDelete({uid}));
      }}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.ImageStyle}
          source={require('../../Assets/Image/delete.png')}
        />
      </View>
    </TouchableOpacity>
  );
};

export default DeleteButton;
