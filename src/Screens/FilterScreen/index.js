import React, {useState, useEffect} from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {categoryFetch, tasksFetch} from '../../Actions';
import AddButton from '../../components/AddButton';
import MontserratBold from '../../components/TextWrapper/MontserratBold';
import MontserratMedium from '../../components/TextWrapper/MontserratMedium';
import styles from './styles';
import Button from '../../components/MainButton/index';

const FilterScreen = props => {
  'PROPs INSIDE FILTER', props;

  const CategoryState = useSelector(state => state.category);
  const TaskState = useSelector(state => state.tasks);
  const [seletedDate, SetSelectedDate] = useState('');
  const [seletedCategory, SetSelectedCategory] = useState('');
  const [seletedStatus, SetSelectedStatus] = useState('');

  'PROPs INSIDE FILTER===>>', seletedCategory;
  const dispatch = useDispatch();

  const cid = Object.keys(CategoryState);
  const Categories = cid.map(item => {
    return CategoryState[item];
  });

  console.log('PROPs INSIDE FILTER===>>', Categories);

  useEffect(() => {
    dispatch(categoryFetch());
    dispatch(tasksFetch());
  }, [props.navigation]);

  function onPressButton() {
    props.navigation.navigate('home', {
      seletedCategory,
      seletedStatus,
      seletedDate,
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerMargin}>
        <MontserratBold>Select Category</MontserratBold>
        <FlatList
          data={Categories}
          keyExtractor={item => item.color}
          renderItem={({item}) => {
            return (
              <View>
                <TouchableOpacity
                  onPress={() => SetSelectedCategory(item.title)}
                  style={{flexDirection: 'row'}}>
                  <View style={styles.textStyle}>
                    <MontserratMedium style={styles.text}>
                      {item.title}
                    </MontserratMedium>
                  </View>
                  <View
                    style={[
                      styles.colorView,
                      {backgroundColor: item.color},
                    ]}></View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
        <View style={styles.statusStyle}>
          <MontserratBold>Select Status</MontserratBold>
          <TouchableOpacity
            onPress={() => SetSelectedStatus('pending')}
            style={styles.textStyle}>
            <MontserratMedium>PENDING</MontserratMedium>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => SetSelectedStatus('complete')}
            style={styles.textStyle}>
            <MontserratMedium>COMPLETE</MontserratMedium>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => SetSelectedStatus('overdue')}
            style={styles.textStyle}>
            <MontserratMedium>OVERDUE</MontserratMedium>
          </TouchableOpacity>
          <View style={styles.buttonStyle}>
            <Button text="apply" onPress={onPressButton} />
          </View>
        </View>
      </View>
      {/* <Button
        style={{top: 10}}
        title="apply"
        onPress={() =>
          props.navigation.navigate('home', {
            seletedCategory,
            seletedStatus,
            seletedDate,
          })
        }
      /> */}
    </View>
  );
};

export default FilterScreen;
