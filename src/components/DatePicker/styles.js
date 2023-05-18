import {StyleSheet} from 'react-native';
import {vh, vw} from '../../Units';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 55 * vw,
    height: 8 * vh,
    borderColor: '#fff',
    borderWidth: 2,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4 * vh,
    // paddingVertical: vh * 1.2,
    // paddingHorizontal: vh * 1.8,
  },
  buttontextStyle: {
    color: '#fff',
    fontSize: 15,
    marginLeft: 4,
  },
  iconSize: 25,
  IconColor: '#fff',
});

export default styles;
