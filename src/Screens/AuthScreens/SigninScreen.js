import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, ToastAndroid, Alert} from 'react-native';
import Button from '../../components/MainButton/index';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from '../../Actions';
import Header from '../../components/Header/index';
import Input from '../../components/InputText/index';
import MontserratBold from '../../components/TextWrapper/MontserratBold';
import styles from './styles';
import MontserratMedium from '../../components/TextWrapper/MontserratMedium';
import {vh} from '../../Units';
import Spinner from '../../components/Spinner';
import Toast from 'react-native-toast';

import TOAST from '../../components/Toast';
import {emailValidation, passwordValidation} from '../../Utils/HelperFunctions';

const SigninScreen = props => {
  var t1 = new Date();

  function showError() {
    if (props.error) ToastAndroid.show(props.error, ToastAndroid.SHORT);
  }

  function onEmailChange(text) {
    props.emailChanged(text);
  }

  function onPasswordChange(text) {
    props.passwordChanged(text);
  }

  function ShowAlert() {
    Alert.alert('Fields Empty', ' please Enter Email or Password', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  }

  function onButtonPress() {
    try {
      const {email, password} = props;
      if (!email && !password) {
        Toast.show('Enter email and password');
      } else {
        if (email) {
          if (!emailValidation(email)) {
            Toast.show('Invalid Email');
            return;
          }
        } else if (!email) {
          Toast.show('Enter Email');
        }
        if (password) {
          if (!passwordValidation(password)) {
            Toast.show(
              'password must be eight characters including one uppercase and lowercase alphabetical character,numeric characters',
            );
            return;
          }
        } else if (!password) {
          Toast.show('Enter Password');
        }

        if (email && password) {
          props.loginUser({email, password}).then(res => {
            if (res.user) {
              props.navigation.navigate('mainFlow');
            }
          });
        } else {
          throw e;
        }
      }
    } catch (e) {
      console.log('ERROR', e);
      // ShowAlert();
    }
  }

  function renderButton() {
    if (props.loading) {
      return <Spinner />;
    }
    return <Button text="Sign In" onPress={onButtonPress} />;
  }

  return (
    <View style={styles.container}>
      {/* <Header headerText="Sign In" /> */}
      <View style={styles.textStyle}>
        <MontserratBold style={styles.text}>Login</MontserratBold>
        <MontserratMedium style={styles.textSmall}>
          Please Sign in to Continue
        </MontserratMedium>
      </View>
      <Input
        keyboardType="email-address"
        label="email"
        placeholder="Enter Email.."
        onChangeText={text => onEmailChange(text)}
        value={props.email}
      />
      <Input
        showText={true}
        label="lock"
        placeholder="Enter Password.."
        onChangeText={text => onPasswordChange(text)}
        value={props.password}
      />
      {showError()}
      {renderButton()}
      <View style={styles.textAccountStyle}>
        <MontserratMedium style={styles.textAccount}>
          Don't have an Account?
        </MontserratMedium>

        <TouchableOpacity onPress={() => props.navigation.navigate('signup')}>
          <MontserratMedium style={styles.textAccount}>
            {' '}
            Sign up
          </MontserratMedium>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading,
  };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser,
})(SigninScreen);
