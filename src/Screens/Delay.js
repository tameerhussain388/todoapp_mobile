import React, {useEffect} from 'react';
import {View, Animated, StyleSheet, Easing} from 'react-native';
import {vh, vw} from '../Units';
import {useDispatch} from 'react-redux';
import {localSignIn} from '../Actions';

const Delay = ({navigation}) => {
  dispatch = useDispatch();

  // console.log({email, password});
  const token = dispatch(localSignIn()).then(token => {
    if (token) {
      navigation.navigate('mainFlow');
    } else {
      navigation.navigate('auth');
    }
  });

  function addScreen() {
    const token = dispatch(
      localSignIn().then(token => {
        if (token) {
          // console.log('====================================');
          // console.log(im in true);
          // console.log('====================================');
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [
                {
                  name: 'LOGIN',
                  state: {
                    routes: [{name: 'MainFlow'}],
                  },
                },
              ],
            }),
          );
          // navigation.navigate('mainFlow');
          // console.log('Token-->', token);
        } else {
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [
                {
                  name: 'LOGIN',
                  state: {
                    routes: [{name: 'Auth'}],
                  },
                },
              ],
            }),
          );
        }
      }),
    );
  }

  // addScreen();

  // console.log('cosnt token', token);

  return <View></View>;

  // const initialOpacity = new Animated.Value(0);
  // const initialMove = new Animated.Value(0);
  // const initialMoveBox2 = new Animated.Value(0);
  // const endOpacity = 1;
  // const endMove = 80 * vw;
  // const duration = 1000;

  // useEffect(() => {
  //   Animated.parallel([
  //     Animated.timing(initialOpacity, {
  //       toValue: endOpacity,
  //       duration: duration,
  //       useNativeDriver: true,
  //     }),

  //     // Animated.delay(1000),
  //     Animated.sequence([
  //       Animated.timing(initialMove, {
  //         toValue: endMove,
  //         duration: duration,

  //         useNativeDriver: true,
  //       }),
  //       Animated.timing(initialMoveBox2, {
  //         toValue: endMove,

  //         duration: duration,
  //         useNativeDriver: true,
  //       }),
  //     ]),
  //   ]).start();
  // }, [
  //   initialMove,
  //   endMove,
  //   initialOpacity,
  //   endOpacity,
  //   duration,
  //   initialMoveBox2,
  // ]);

  // return (
  //   <View style={styles.container}>
  //     <Animated.View
  //       style={[
  //         styles.image,
  //         {
  //           opacity: initialOpacity,
  //           // translateX: initialMove,
  //         },
  //       ]}
  //     />
  //     <Animated.View
  //       style={[
  //         styles.square,
  //         {
  //           // opacity: initialOpacity,
  //           transform: [
  //             {
  //               translateX: initialMove,
  //             },
  //           ],
  //         },
  //       ]}
  //     />
  //     <Animated.View
  //       style={[
  //         styles.square,
  //         {
  //           transform: [
  //             {
  //               translateX: initialMoveBox2,
  //             },
  //           ],
  //         },
  //       ]}
  //     />
  //   </View>
  // );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   square: {
//     height: 150,
//     width: 150,
//     backgroundColor: 'red',
//     margin: 10,
//   },
//   image: {
//     height: 150,
//     width: 150,
//     backgroundColor: 'blue',
//     margin: 10,
//   },
// });

export default Delay;
