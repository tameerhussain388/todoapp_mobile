import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
// import styles from '../MainButton/styles';
import {RadioButton} from '../RadioButton';
import MontserratBold from '../TextWrapper/MontserratBold';
import MontserratMedium from '../TextWrapper/MontserratMedium';
import MontserratRegular from '../TextWrapper/MontserratRegular';
import PushNotification, {Importance} from 'react-native-push-notification';

import {useDispatch} from 'react-redux';
import styles from './styles';
import {taskUpdate} from '../../Actions';

export const Task = ({task, onPress}) => {
  // console.log('INSIDE TASK', task);
  const dispatch = useDispatch();
  const {title, status, CategoryID, color, categoryName, uid} = task;
  var temp = new Date(task.Date);
  useEffect(() => {
    if (status !== 'complete') {
      if (new Date(task.Date) < new Date()) {
        var Status = 'overdue';
        dispatch(
          taskUpdate({
            title,
            Date: task.Date,
            status: Status,
            CategoryID,
            color,
            categoryName,
            uid,
          }),
        );
      }
    }
  }, []);

  return (
    <View style={styles.taskContainer}>
      <RadioButton task={task} onPress={onPress} />
      <MontserratMedium style={styles.textStyle}>{task.title}</MontserratMedium>
    </View>
  );
};
