import {StyleSheet} from 'react-native';
import {vh, vw} from '../../Units';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#344fa1',
    height: 100 * vh,
    flex: 1,
  },
  containerMargin: {
    marginLeft: 2.5 * vw,
  },
  colorView: {
    marginTop: 2.5 * vh,

    width: 30 * vw,
    height: 2 * vh,
  },
  textStyle: {
    justifyContent: 'center',
    marginTop: 7,
    width: 30 * vw,
    height: 5 * vh,
  },
  text: {
    fontSize: 18,
  },
  statusStyle: {position: 'absolute', top: 30 * vh},
  buttonStyle: {
    width: 83 * vw,
  },
});

export default styles;
