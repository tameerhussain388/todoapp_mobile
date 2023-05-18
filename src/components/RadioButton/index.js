import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {taskUpdate} from '../../Actions';
import styles from './styles';

import {color} from 'react-native-reanimated';
import {useDispatch} from 'react-redux';

export const RadioButton = ({task, onPress}) => {
  const [Checked, setChecked] = useState(task.status === 'complete');

  function buttonPressed() {
    onButton();
    onPress();
  }

  function onButton(st) {
    const tempStatus = Checked;
    setChecked(!tempStatus);
    const {title, Date, status, CategoryID, color, categoryName, uid} = task;
    var Status = tempStatus ? 'pending' : 'complete';
    dispatch(
      taskUpdate({
        title,
        Date,
        status: Status,
        CategoryID,
        color,
        categoryName,
        uid,
      }),
    );
  }
  const dispatch = useDispatch();
  function getingColor() {
    return task.category == 'Business' ? '#ad1ed8' : '#08b';
  }

  function checkedbutton() {
    return (
      <View>
        <TouchableOpacity onPress={buttonPressed} style={[styles.view]}>
          {Checked && (
            <View style={[styles.Checked, {borderColor: task.color}]}>
              <Icon name="check" size={24} color="#fff" />
            </View>
          )}
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={[styles.unChecked, {borderColor: task.color}]}>
      {checkedbutton()}
    </View>
  );
};

// && . || . ?? .  ? :
