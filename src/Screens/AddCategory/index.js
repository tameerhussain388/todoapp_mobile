import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Button, FlatList} from 'react-native';
import {connect, useDispatch, useSelector} from 'react-redux';
import _ from 'lodash';
import {categoryFetch, categoryCreate} from '../../Actions';
import {ColorPicker} from 'react-native-color-picker';
import {color} from 'react-native-reanimated';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import MontserratMedium from '../../components/TextWrapper/MontserratMedium';
import {vh} from '../../Units';
import Toast from 'react-native-toast';

const AddCategory = props => {
  // console.log('INSIDE ADDCATEGORY', props);

  const [Title, setTitle] = useState('');
  const [id, setId] = useState('');
  const [Color, setColor] = useState('');
  const dispatch = useDispatch();

  function onButtonPress() {
    if (Title && Color) {
      props.categoryCreate({title: Title, color: Color});
      props.navigation.goBack();
    } else if (!Color) Toast.show('Add Color');
    else Toast.show('Enter Category');
  }

  useEffect(() => {
    // dispatch(categoryCreate({title, id, color}));
    props.categoryFetch();
  }, []);

  return (
    <View style={styles.container}>
      <View style={{margin: 2 * vh}}>
        <TextInput
          placeholder="Add Category Name"
          placeholderTextColor="#999"
          value={Title}
          onChangeText={setTitle}
          style={styles.inputTextStyle}
        />
        <View style={styles.pickerContainer}>
          <ColorPicker
            onColorSelected={color => setColor(color)}
            style={styles.picker}
          />
        </View>
        <Button title="add" onPress={onButtonPress} />

        <FlatList
          data={props.categories}
          keyExtractor={item => item.color}
          renderItem={({item}) => {
            return (
              <View style={{flexDirection: 'row'}}>
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
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  const categories = _.map(state.category, (val, uid) => {
    return {...val, uid};
  });

  return {categories};
};

export default connect(mapStateToProps, {categoryFetch, categoryCreate})(
  AddCategory,
);
