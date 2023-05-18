import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, ToastAndroid} from 'react-native';
import Button from '../../components/MainButton/index';
import Header from '../../components/Header/index';
import {connect} from 'react-redux';
import {
  emailChanged,
  passwordChanged,
  signupUser,
  nameChanged,
} from '../../Actions';
import Input from '../../components/InputText/index';
import styles from './styles';
import TaskList from '../../components/TaskList';
import MontserratBold from '../../components/TextWrapper/MontserratBold';
import MontserratMedium from '../../components/TextWrapper/MontserratMedium';
import Spinner from '../../components/Spinner';
import {emailValidation, passwordValidation} from '../../Utils/HelperFunctions';
import Toast from 'react-native-toast';

const SignupScreen = props => {
  function showError() {
    if (props.error) ToastAndroid.show(props.error, ToastAndroid.SHORT);
  }

  function onEmailChange(text) {
    props.emailChanged(text);
  }

  function onNameChange(text) {
    props.nameChanged(text);
  }

  function onPasswordChange(text) {
    props.passwordChanged(text);
  }

  function onButtonPress() {
    const {email, password, name} = props;

    if (!name) {
      Toast.show('Enter Name');
    }
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

      if (email && password && name) {
        props.signupUser({email, password}).then(res => {
          if (res.user) {
            props.navigation.navigate('signin');
          }
        });
      }
    }
  }

  function renderButton() {
    if (props.loading) {
      return <Spinner />;
    }
    return <Button text="Sign Up" onPress={onButtonPress} />;
  }

  return (
    <View style={styles.container}>
      {/* <Header headerText="Sign Up" /> */}

      <View style={styles.textStyle}>
        <MontserratBold style={styles.text}>Create Account</MontserratBold>
      </View>

      <Input
        label="account"
        placeholder="Enter Name.."
        onChangeText={text => onNameChange(text)}
        value={props.name}
      />
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
      {/* <TaskList tasks={Obj} /> */}
      <View style={styles.textAccountStyle}>
        <MontserratMedium style={styles.textAccount}>
          Already have an Account?
        </MontserratMedium>
        <TouchableOpacity onPress={() => props.navigation.navigate('signin')}>
          <MontserratMedium style={styles.textAccount}>
            {' '}
            Sign in
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
    name: state.auth.name,
  };
};

export default connect(mapStateToProps, {
  nameChanged,
  emailChanged,
  passwordChanged,
  signupUser,
})(SignupScreen);
