import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, ScrollView} from 'react-native';
import {Task} from './Task';
import styles from './styles';
import AddButton from '../AddButton/index';
import HeaderList from './HeaderList';
import {categoryFetch} from '../../Actions';
import MontserratMedium from '../TextWrapper/MontserratMedium';
import MontserratRegular from '../TextWrapper/MontserratRegular';
import {SwipeListView} from 'react-native-swipe-list-view';
import DeleteButton from '../DeleteButton';
import {useDispatch} from 'react-redux';

const TaskList = ({tasks = [], categories, filtered}) => {
  var FilteredTasks;
  const dispatch = useDispatch();
  const [currentTask, setCurrentTask] = useState(null);
  useEffect(() => {
    dispatch(categoryFetch());
  }, []);
  // console.log('TASK', tasks);
  tasks.sort(function (a, b) {
    return new Date(a.Date) - new Date(b.Date);
  });

  var business = [];
  var personal = [];

  function getingCategory(tasks) {
    business = tasks.filter(item => item.category === 'Business');
    personal = tasks.filter(item => item.category === 'Personal');
  }
  getingCategory(tasks);
  var DATE = new Date().getTime();
  var TASK = tasks.filter(item => new Date(item.Date).getTime() < DATE);
  // console.log('Tasks', tasks);
  // console.log('Tasks=======>>>>>>>>');
  // console.log('Task', TASK);

  // console.log('business', business, 'personal', personal.length);
  const Header = () => (
    <View>
      <HeaderList
        tasks={tasks}
        categories={categories}
        currentTask={currentTask}
      />

      <MontserratRegular style={styles.textDaily}>
        DAILY TASK'S
      </MontserratRegular>
    </View>
  );

  // console.log(tasks?.map('completedTasks', val => val.status === 'complete'));
  // console.log(
  //   'holahola',
  //   tasks?.filter(item => item.status === 'complete'),
  // );

  // SeletedCategory, SeletedStatus, SeletedDate

  // console.log(
  //   'SeletedCategory',
  //   filtered.SeletedCategory,
  //   filtered.SeletedStatus,
  // );
  if (filtered.SeletedStatus) {
    FilteredTasks = tasks?.filter(
      item => item.status === filtered.SeletedStatus,
    );
  } else if (filtered.SeletedCategory) {
    FilteredTasks = tasks?.filter(
      item => item.categoryName === filtered.SeletedCategory,
    );
  } else {
    FilteredTasks = tasks;
  }

  const completedTasks = tasks?.filter(
    item => item.status === filtered.SeletedStatus,
  );

  return (
    <View style={styles.container}>
      {/* <View style={styles.container}> */}
      <MontserratRegular style={styles.textMain}>CATEGORIES</MontserratRegular>

      <View style={styles.listStyle}>
        <SwipeListView
          showsVerticalScrollIndicator={false}
          data={FilteredTasks}
          keyExtractor={tasks => tasks.Date}
          renderItem={({item}) => {
            return (
              <Task
                task={item}
                onPress={() => {
                  // console.log('Task press=======>>>>>>>>>>>>>>>>', item);
                  setCurrentTask(item);
                }}
              />
            );
          }}
          ListHeaderComponent={Header}
          renderHiddenItem={data => (
            <View>
              <DeleteButton task={data} />
            </View>
          )}
          leftOpenValue={0}
          rightOpenValue={-80}
          disableRightSwipe={true}
        />
      </View>
      {/* </View> */}
      <AddButton task={tasks} />
    </View>
  );
};

export default TaskList;
