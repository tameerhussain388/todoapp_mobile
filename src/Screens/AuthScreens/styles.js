import {StyleSheet} from 'react-native';
import {vh, vw} from '../../Units';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#344fa1',
  },
  textStyle: {
    marginTop: vh * 10,
    paddingVertical: 5 * vh,

    paddingLeft: 8 * vw,
  },
  text: {
    fontSize: 30,
    color: '#ccc',
  },
  textSmall: {
    fontSize: 18,
    height: 5 * vh,
    color: '#ccc',
  },
  textAccount: {
    // marginTop: 8 * vh,
    fontSize: 18,
    color: '#ccc',
    // height: 5 * vh,
    // paddingLeft: 10 * vw,
    // // backgroundColor: 'green',
  },
  textAccountStyle: {
    paddingTop: 15 * vh,
    paddingLeft: 13 * vw,
    flexDirection: 'row',
  },
  errorStyle: {
    // marginTop: 2 * vh,
    // justifyContent: 'center',
    // alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: '#888888',
    padding: 8,
  },
  errorTextStyle: {
    color: '#ccc',
    fontSize: 20,
  },
});

export default styles;
