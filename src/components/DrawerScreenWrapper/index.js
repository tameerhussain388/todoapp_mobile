import {useDrawerProgress} from '@react-navigation/drawer';
import React, {useRef, useState} from 'react';
import Animated from 'react-native-reanimated';
import {vh, vw} from '../../Units';
import styles from './styles';

const DrawerScreenWrapper = props => {
  //   const [screenshot, setScreenshot] = useState(false);
  //   const screen = useRef(null);
  const progress = useDrawerProgress();
  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const translateX = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, -7 * vw],
  });
  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 10 * vw],
  });
  //   const blurRotation = Animated.interpolateNode(progress, {
  //     inputRange: [0, 1],
  //     outputRange: ['0deg', '-12deg'],
  //   });
  //   const blurMoveX = Animated.interpolateNode(progress, {
  //     inputRange: [0, 1],
  //     outputRange: ['0deg', '-12deg'],
  //   });
  //   const blurMoveY = Animated.interpolateNode(progress, {
  //     inputRange: [0, 1],
  //     outputRange: ['0deg', '-12deg'],
  //   });
  const animatedStyles = {
    borderRadius: borderRadius,
    transform: [{scale}, {translateX}],
  };
  const animatedShadow = {
    // transform: [{ rotateZ:rotation }]
  };
  //   const takeScreenshot = async () => {
  //     try {
  //       const capturedImage = await screen.current.capture();
  //       setScreenshot({uri: 'data:image/png;base64,' + capturedImage});
  //     } catch (e) {
  //       taken = false;
  //     }
  //   };
  //   var taken = false;
  //   const sth = animatedValue => {
  //     if (animatedValue === 1) {
  //       if (screenshot === false && taken === false) {
  //         taken = true;
  //         takeScreenshot();
  //       }
  //     } else {
  //       if (screenshot != false) {
  //         setScreenshot(false);
  //       }
  //     }
  //   };
  //   useCode(() => {
  //     return call([progress], r => {
  //       const animatedValue = r[0];
  //       sth(animatedValue);
  //     });
  //   }, [progress]);
  return (
    <Animated.View style={[styles.container, animatedStyles]}>
      {props.children}
    </Animated.View>
    // <>

    //   {true != false && (
    //     <Animated.View style={[styles.shadowContainer, animatedShadow]}>
    //       {/* <Image
    //                 source={screenshot}
    //                 style={styles.screenshot} /> */}
    //       {/* <BlurView
    //                 reducedTransparencyFallbackColor='transparent'
    //                 blurAmount={1}
    //                 blurRadius={1}
    //                 overlayColor='transparent'
    //                 blurType='light'
    //                 style={styles.blur}
    //             /> */}
    //     </Animated.View>
    //   )}

    // </>
  );
};
export default DrawerScreenWrapper;

// import {useDrawerProgress} from '@react-navigation/drawer';
// import React from 'react';
// import {StyleSheet} from 'react-native';
// import Animated from 'react-native-reanimated';
// import {vh, vw} from '../../Units';
// import styles from './styles';

// const DrawerScreenWrapper = props => {
//   const {interpolate, Extrapolate} = Animated;
//   const progress = useDrawerProgress();
//   const scale = Animated.interpolateNode(progress, {
//     inputRange: [0, 1],
//     outputRange: [1, 0.85],
//   });

//   const translateX = Animated.interpolateNode(progress, {
//     inputRange: [0, 1],
//     outputRange: [0, -4 * vw],
//   });

//   const borderRadius = Animated.interpolateNode(progress, {
//     inputRange: [0, 1],
//     outputRange: [0, 5 * vw],
//   });

//   const animatedStyle = {borderRadius, transform: [{scale}]};
//   const animatedOuterStyle = {transform: [{scale}]};

//   return (
//     <Animated.View
//       style={[
//         animatedOuterStyle,
//         styles.outerStyle,
//         {transform: [{translateX}]},
//       ]}>
//       <Animated.View style={StyleSheet.flatten([styles.stack, animatedStyle])}>
//         {props.children}
//       </Animated.View>
//     </Animated.View>
//   );
// };
// export default DrawerScreenWrapper;

// import {useDrawerProgress} from '@react-navigation/drawer';
// import React from 'react';
// import Animated from 'react-native-reanimated';
// import {vw, vh} from '../../Units';
// const DrawerScreenWrapper = props => {
//   const progress = useDrawerProgress();
//   const scale = Animated.interpolateNode(progress, {
//     inputRange: [0, 1],
//     outputRange: [1, 0.85],
//   });
//   const borderRadius = Animated.interpolateNode(progress, {
//     inputRange: [0, 1],
//     outputRange: [1, vw * 26],
//   });
//   const animatedStyle = {borderRadius, transform: [{scale}]};
//   return (
//     // <Animated.View style={{transform: [{scale}]}}>
//     <Animated.View style={[{flex: 1}, animatedStyle]}>
//       {props.children}
//     </Animated.View>
//     // </Animated.View>
//   );
// };
// export default DrawerScreenWrapper;
