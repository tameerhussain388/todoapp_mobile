import {StyleSheet} from 'react-native';
import {vh, vw} from '../../Units';

const styles = StyleSheet.create({
  unChecked: {
    width: 4 * vh,
    height: 4 * vh,

    borderWidth: 2,
    borderRadius: 2 * vh,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  view: {
    width: 7 * vw,
    height: 4 * vh,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Checked: {
    width: '90%',
    height: '90%',
    backgroundColor: 'transparent',
    // borderWidth: 2,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    // marginHorizontal: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 40,
  },
});
export default styles;
