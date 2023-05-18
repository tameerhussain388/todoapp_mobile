import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';

import styles from './styles';

const SelectCategory = props => {
  function CategoryChecked() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            props.SetCategory(!props.Category);
          }}
          style={[styles.view]}>
          {props.Category ? (
            <View style={styles.personal}>
              <View style={styles.personalStyle}></View>
            </View>
          ) : (
            <View style={styles.business}>
              <View style={styles.businessStyle}></View>
            </View>
          )}
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={[styles.container, props.selectCategoryStyle]}>
      {CategoryChecked()}
    </View>
  );
};

export default SelectCategory;
