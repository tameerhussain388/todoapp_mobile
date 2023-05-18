import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TextPropTypes} from 'react-native';
import DateTime from '../../components/DatePicker/DatePicker';
import SelectCategory from '../../components/SelectCategory/Category';
import {taskCreate} from '../../Actions';
import styles from './styles';
import _ from 'lodash';
import Button from '../../components/MainButton/index';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import {categoryFetch, categoryCreate} from '../../Actions';
import {useDispatch} from 'react-redux';
const AddTask = props => {
  useEffect(() => {
    props.categoryFetch();
  }, []);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const [title, setTitle] = useState('');
  // const [Category, SetCategory] = useState(false);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(
    props.categories.map(singleCategory => {
      return {label: singleCategory.title, value: singleCategory};
    }),
  );
  const obj = props.categories.map(item => {
    if (value === item.title) {
      return item;
    }
  });

  const id = obj.uid;

  function onButtonPress() {
    const status = 'pending';
    // console.warn({
    //   title,
    //   date,
    //   status,
    //   CategoryID: value.uid,
    //   color: value.color,
    //   categoryName: value.title,
    // });
    props
      .taskCreate({
        title,
        date,
        status,
        CategoryID: value.uid,
        color: value.color,
        categoryName: value.title,
      })
      .then(() => navigation.goBack());
  }

  return (
    <KeyboardAwareScrollView contentContainerStyle={{flex: 1}}>
      <View style={styles.container}>
        <TextInput
          style={styles.inputContainer}
          placeholder="Create a new template"
          placeholderTextColor={styles.placeHolderColor}
          onChangeText={text => setTitle(text)}
          value={title}
        />

        <View style={styles.categoryContainer}>
          <DateTime date={date} setDate={setDate} />
          {/* <SelectCategory
            Category={Category}
            SetCategory={SetCategory}
            selectCategoryStyle={styles.selectCategoryStyle}
          /> */}
        </View>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          listMode="SCROLLVIEW"
        />
        <View style={styles.buttonStyle}>
          <Button text="Create" onPress={onButtonPress} />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const mapStateToProps = state => {
  const categories = _.map(state.category, (val, uid) => {
    return {...val, uid};
  });

  return {categories};
};

export default connect(mapStateToProps, {taskCreate, categoryFetch})(AddTask);
