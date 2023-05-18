import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import _ from 'lodash';
import {tasksFetch, categoryFetch} from '../../Actions';
import TaskList from '../../components/TaskList';
import styles from './styles';
import {connect, useSelector} from 'react-redux';

import PushNotification, {Importance} from 'react-native-push-notification';
import Toast from 'react-native-toast';

const Home = props => {
  const SeletedStatus = props?.route?.params?.seletedStatus;
  const SeletedCategory = props?.route?.params?.seletedCategory;
  const SeletedDate = props?.route?.params?.seletedDate;
  let Categories;
  const objCategories = useSelector(state => state.category);
  console.log('PROPS IN HOME ', props.tasks, 'CATEGORIES', objCategories);
  // var cid = [];
  // useEffect(() => {
  //   if (objCategories) {

  //   }
  // }, [props.navigation]);
  if (objCategories) {
    const cid = Object.keys(objCategories);
    Categories = cid.map(item => {
      return objCategories[item];
    });
  } else Toast.show('Add Category And then your tasks');

  const Filters = {SeletedCategory, SeletedStatus, SeletedDate};
  console.log('CATEGORY INSIDE HOME', Categories);

  // const Category = tasksCategories.map(task => {
  //   return {title: task.categories.title, color: task.ccategories.color};
  // });
  PushNotification.createChannel(
    {
      channelId: '4', // (required)
      channelName: 'My channel', // (required)
      channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
      playSound: false, // (optional) default: true
      soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
      importance: 4, // (optional) default: Importance.HIGH. Int value of the Android notification importance
      vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
    },
    created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
  );

  function showNotification() {
    const pendingFutureTasks = props.tasks.filter(
      item =>
        item.status === 'pending' &&
        new Date(item.Date).getTime() > new Date().getTime(),
    );

    pendingFutureTasks.sort(function (a, b) {
      return new Date(a.Date) - new Date(b.Date);
    });

    pendingFutureTasks.map(item => {
      PushNotification.localNotificationSchedule({
        message: `${item.title}`,
        channelId: '4',
        date: new Date(item.Date),
        allowWhileIdle: false,
        popInitialNotification: true,
        smallIcon: 'notification_ic',
        repeatTime: 1,
      });
    });
  }

  useEffect(() => {
    props.tasksFetch();
    props.categoryFetch();
  }, [props.navigation]);
  useEffect(() => {
    showNotification();
  }, [props.tasks]);

  return (
    <View style={styles.container}>
      <TaskList
        tasks={props.tasks}
        filtered={Filters}
        categories={Categories}
      />
    </View>
  );
};

const mapStateToProps = state => {
  const tasks = _.map(state.tasks, (val, uid) => {
    return {...val, uid};
  });

  return {tasks};
};

export default connect(mapStateToProps, {tasksFetch, categoryFetch})(Home);
