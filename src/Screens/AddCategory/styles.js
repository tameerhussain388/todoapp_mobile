import {StyleSheet} from 'react-native';
import {vh, vw} from '../../Units';

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#344fa1',
  },
  inputTextStyle: {
    width: 90 * vw,
    color: '#eee',
    fontSize: 18,

    marginTop: 10 * vh,
  },
  pickerContainer: {
    marginTop: vh * 4,
    marginBottom: 2 * vh,

    width: 50 * vw,
    height: 15 * vh,
    borderflex: 1,
  },
  picker: {flex: 1, width: '50%'},
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
});

export default styles;
