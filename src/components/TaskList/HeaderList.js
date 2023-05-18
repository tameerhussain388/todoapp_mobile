import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import MontserratBold from '../TextWrapper/MontserratBold';
import MontserratMedium from '../TextWrapper/MontserratMedium';
import MontserratRegular from '../TextWrapper/MontserratRegular';
import Header from './Hearder';
import styles from './styles';

const HeaderList = ({tasks, categories, currentTask}) => {
  var currentCategory = [];
  const [newtask, setnewtask] = useState({
    tasks: tasks,
    categories: categories,
  });

  let arr = [];

  // console.log('INSIDE HEADER', newtask);

  // useEffect(() => {

  // currentCategory = categories?.filter(
  //   val => val.title === currentTask?.categoryName,
  // );
  // console.log('CATEGORYFILTER', currentCategory);
  // console.log('arr', arr);
  // currentCategory = tasks.filter(item => {
  //   console.log(
  //     'filter',
  //     item,
  //     '==',
  //     categories.filter(item => item.title),
  //   );
  //   return item.categoryName === categories.filter(item => item.title);
  // });
  // }, [filled, arr, statusPanding]);

  // function arrayMatch(tasks, categories) {
  //   var arr = []; // Array to contain match elements
  //   for (var i = 0; i < tasks.length; ++i) {
  //     for (var j = 0; j < categories.length; ++j) {
  //       if (tasks[i].categoryName == categories[j].title) {
  //         // If element is in both the arrays
  //         console.log('insde for loop', tasks[i], categories[j]);
  //         setnewtask(currentCategory.push(tasks[i])); // Push to arr array
  //       }
  //     }
  //   }

  //   return currentCategory; // Return the arr elements
  // }

  // function getingStatus(currentCategory) {
  //   statusPanding = currentCategory.filter(item => item.status === 'complete');
  // }

  // console.log('categoriesFILTERS', currentCategory, newtask);

  return (
    <FlatList
      horizontal
      data={newtask?.categories}
      keyExtractor={item => item.color}
      renderItem={({item}) => {
        // function arrayMatch(tasks, item) {
        //   // console.log('TaSkS', tasks, 'item', item);
        //   var arr = []; // Array to contain match elements
        //   for (var i = 0; i < tasks.length; ++i) {
        //     for (var j = 0; j < item.length; ++j) {
        //       if (tasks[i].categoryName == item[j].title) {
        //         // If element is in both the arrays
        //         // console.log('insde for loop', tasks[i], item[j]);
        //         arr.push(tasks[i]); // Push to arr array
        //       }
        //     }
        //   }

        //   return arr; // Return the arr elements
        // }
        // var arr = arrayMatch(tasks, item); // checking
        arr = tasks.filter(task => task.categoryName === item?.title);
        // statusPanding = getingStatus(arr);
        // setFilled(Math.floor((statusPanding.length / arr.length) * 100));

        // console.log('statsu', statusPanding, 'arr', arr);
        // console.log('FILLED', filled);

        return <Header tasks={arr} categories={item} />;
      }}></FlatList>
  );
};

export default HeaderList;

// item ==== category == id, title, color
// taskes === tasks.categoryName === title
// func (catName)=> return filter(name=== title)
