import React from 'react';
import {View, Text} from 'react-native';
import TaskList from '../../components/TaskList';
import styles from './styles';

const Home = () => {
  const Obj = [
    {
      title: 'tameer1',
      category: 'business',
      status: 'panding', // pending, completed, cancelled,
      eventStatus: 'early', // EARLY, Late,
    },
    {
      title: 'tameer2',
      category: 'personal',
      status: 'complete',
      eventStatus: 'late',
    },
    {
      title: 'tameer3',
      category: 'personal',
      status: 'panding',
      eventStatus: 'early',
    },
    {
      title: 'tameer4',
      category: 'business',
      status: 'panding',
      eventStatus: 'early',
    },
    {
      title: 'tameer5',
      category: 'personal',
      status: 'cancelled',
      eventStatus: 'early',
    },
    {
      title: 'tameer6',
      category: 'business',
      status: 'complete',
      eventStatus: 'late',
    },
    {
      title: 'tameer7',
      category: 'personal',
      status: 'panding',
      eventStatus: 'early',
    },
  ];

  return (
    <View style={styles.container}>
      <TaskList tasks={Obj} />
    </View>
  );
};
export default Home;
