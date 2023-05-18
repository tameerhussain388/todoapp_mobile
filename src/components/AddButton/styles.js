import {StyleSheet} from 'react-native';
import {vw, vh} from '../../Units/index';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 6,
    right: 15,
  },
  addButton: {
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#eb05ff',

    width: 8 * vh,
    height: 8 * vh,
    borderRadius: 4 * vh,
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconSize: 35,
  iconColor: '#ccc',
});
export default styles;
