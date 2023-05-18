import React, {useEffect} from 'react';
import {View, Text, TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {vw, vh} from '../../Units';
import MontserratMedium from '../../components/TextWrapper/MontserratMedium';
import auth from '@react-native-firebase/auth';

const ResetPassowrd = props => {
  const User = auth().currentUser;
  const dispatch = useDispatch();

  console.log('USER DATE', User.providerData);
  return (
    <View>
      <MontserratMedium
        style={{
          color: '#000',
        }}>
        Enter Old Password:
      </MontserratMedium>
      <TextInput
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: vw * 70,
          height: vh * 6,
          borderColor: '#000',
          borderWidth: 2,
        }}
        placeholder="password"
      />
    </View>
  );
};

export default ResetPassowrd;
