import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import MontserratMedium from '../TextWrapper/MontserratMedium';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import {vh, vw} from '../../Units';
import {useDrawerProgress} from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import {useDispatch} from 'react-redux';
import {signout} from '../../Actions';
import {useNavigation} from '@react-navigation/native';

const DrawerContent = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  function logout() {
    dispatch(signout()).then(() => navigation.navigate('auth'));
  }

  const initialOpacity = new Animated.Value(1);
  const initialMove = new Animated.Value(0);
  const endOpacity = 0;
  const endMove = 100;
  const duration = 3000;

  // useEffect(() => {
  //   Animated.sequence([
  //     Animated.timing(initialMove, {
  //       toValue: endMove,
  //       duration: duration,
  //       useNativeDriver: true,
  //     }),
  //     Animated.delay(1000),
  //     Animated.timing(initialOpacity, {
  //       toValue: endOpacity,
  //       duration: duration,
  //       useNativeDriver: true,
  //     }),
  //   ]).start();
  // }, [initialMove, endMove, initialOpacity, endOpacity, duration]);

  const progress = useDrawerProgress();
  const opacity = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [-10, 1],
  });

  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const scale2 = Animated.interpolateNode(progress, {
    inputRange: [0.3, 1],
    outputRange: [0, 1],
  });
  const scale3 = Animated.interpolateNode(progress, {
    inputRange: [0.6, 1],
    outputRange: [0, 1],
  });
  const scale4 = Animated.interpolateNode(progress, {
    inputRange: [0.9, 1],
    outputRange: [0, 1],
  });
  const translateX = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [40 * -vh, vh * 1],
  });

  const translateX2 = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [40 * -vh * 3, vh * 1],
  });
  const translateX3 = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [40 * -vh * 5, vh * 1],
  });
  const translateX4 = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [40 * -vh * 7, vh * 1],
  });

  const animatedStylesImage = {
    opacity: opacity,
  };

  const animatedStyles = {
    // opacity: opacity,
    transform: [{translateX}, {scale}],
  };
  const animatedStyles2 = {
    // opacity: opacity,
    transform: [{translateX: translateX2}, {scale: scale2}],
  };
  const animatedStyles3 = {
    // opacity: opacity,
    transform: [{translateX: translateX3}, {scale: scale3}],
  };
  const animatedStyles4 = {
    // opacity: opacity,
    transform: [{translateX: translateX4}, {scale: scale4}],
  };

  return (
    <LinearGradient
      colors={['#041855', '#041855', '#031956']}
      style={styles.linearGradient}>
      <View style={styles.container}>
        <Animated.View style={[styles.imageStyle, animatedStylesImage]}>
          <Image
            style={styles.image}
            source={require('../../Images/man-avatar-profile-vector-21372076.jpg')}
          />
        </Animated.View>
        <View style={styles.labelContainer}>
          <Animated.View style={animatedStyles}>
            <TouchableOpacity
              style={[styles.label]}
              onPress={() => navigation.navigate('reset')}>
              <Icon name="bookmark-outline" size={25} color={'#ccc'} />
              <MontserratMedium>Profile</MontserratMedium>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View style={animatedStyles2}>
            <TouchableOpacity
              style={[styles.label]}
              onPress={() => navigation.navigate('addcategory')}>
              <Icon name="apps" size={25} color={'#ccc'} />
              <MontserratMedium>Categories</MontserratMedium>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View style={animatedStyles3}>
            <TouchableOpacity
              style={[styles.label]}
              onPress={() => navigation.navigate('graph')}>
              <Icon name="chart-donut" size={25} color={'#ccc'} />
              <MontserratMedium>Analytics</MontserratMedium>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View
            style={[styles.label, animatedStyles4, styles.logoutStyle]}>
            <TouchableOpacity onPress={logout}>
              <MontserratMedium>LOGOUT</MontserratMedium>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default DrawerContent;
