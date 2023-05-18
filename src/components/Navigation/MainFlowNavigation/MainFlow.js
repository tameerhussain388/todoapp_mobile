import React from 'react';
import {
  DrawerActions,
  NavigationContainer,
  useNavigation,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import fonts from '../../../Assets/fonts/index';
import Home from '../../../Screens/MainFlowScreens/Home';
import AddTask from '../../../Screens/AddTaskScreen/AddTask';
import DrawerContent from '../../DrawerContent';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DrawerScreenWrapper from '../../DrawerScreenWrapper';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity, View, Image} from 'react-native';
import {vw} from '../../../Units';
import AddCategory from '../../../Screens/AddCategory';
import FilterScreen from '../../../Screens/FilterScreen';
import ResetPassowrd from '../../../Screens/ResetPassowrd';
import GraphScreen from '../../../Screens/GraphScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const StackMain = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#344fa1'},
        headerTitleStyle: {color: '#fff', fontFamily: fonts.Montserrat.Bold},
        headerTitleAlign: 'center',
        headerBackTitleStyle: {color: '#fff'},
        headerShadowVisible: false,
        // headerLeft: () => <Icon name="menu" size={28} />,
        // headerShown: false,
      }}>
      <Stack.Screen
        options={{
          title: '',
          headerStyle: {backgroundColor: '#344fa1', elevation: 0},
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
              <View
                style={{
                  width: 30,
                  height: 35,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{width: 25, height: 25}}
                  source={require('../../../Assets/Image/apps.png')}
                />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View
              style={{
                flexDirection: 'row',
                width: 20 * vw,
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity onPress={() => {}}>
                {/* <FontAwesome5 name="search" size={25} color="#ccc" /> */}
                <View
                  style={{
                    width: 30,
                    height: 35,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{width: 23, height: 25}}
                    source={require('../../../Assets/Image/search.png')}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('FilterScreen')}>
                {/* <Icon name="bell-outline" size={25} color="#ccc" /> */}
                <View
                  style={{
                    width: 30,
                    height: 35,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{width: 23, height: 26, tintColor: '#aaa'}}
                    source={require('../../../Assets/Image/edit.png')}
                  />
                </View>
              </TouchableOpacity>
            </View>
          ),
        }}
        name="home"
        component={Home}
      />
      <Stack.Screen
        options={{
          title: 'Add Task',
          headerShown: false,
        }}
        name="addTask"
        component={AddTask}
      />
      <Stack.Screen
        options={{
          title: 'Add category',
        }}
        name="addcategory"
        component={AddCategory}
      />
      <Stack.Screen
        options={{
          title: 'FILTER SCREEN',
          headerShown: true,
        }}
        name="FilterScreen"
        component={FilterScreen}
      />
      <Stack.Screen
        options={{
          title: 'User Profile',
          headerShown: true,
        }}
        name="reset"
        component={ResetPassowrd}
      />
      <Stack.Screen
        options={{
          title: 'User graph',
          headerShown: true,
        }}
        name="graph"
        component={GraphScreen}
      />
    </Stack.Navigator>
  );
};

const animated = props => {
  return (
    <DrawerScreenWrapper {...props}>
      <StackMain />
    </DrawerScreenWrapper>
  );
};

const MainFlow = ({navigation}) => {
  return (
    <LinearGradient
      colors={['#041855', '#041855', '#031956']}
      style={{flex: 1}}>
      <Drawer.Navigator
        screenOptions={{
          drawerType: 'slide',
          // headerTitle: null,
          // headerStyle: {backgroundColor: '#344fa1', elevation: 0},
          headerShown: false,

          drawerStyle: {
            backgroundColor: 'transparent',
            width: '70%',
          },
          overlayColor: 'transparent',
          sceneContainerStyle: {
            backgroundColor: 'transparent',
          },
        }}
        drawerContent={props => {
          return <DrawerContent {...props} />;
        }}>
        <Drawer.Screen name="MainFlow" component={animated} />
        {/* drawerAnimationStyle={animatedStyle}
        </Drawer.Screen> */}
      </Drawer.Navigator>
    </LinearGradient>
  );
};
export default MainFlow;
