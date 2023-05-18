import {StyleSheet} from 'react-native';
import {vh, vw} from '../../Units';

const styles = StyleSheet.create({
  container: {
    width: 7.5 * vh,
    height: 7.5 * vh,
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor: 'transparent',
    borderRadius: 4 * vh,
    justifyContent: 'center',
    alignItems: 'center',
  },
  business: {
    borderColor: '#ad1ed8',
    width: 4 * vh,
    height: 4 * vh,
    borderWidth: 2,
    backgroundColor: 'transparent',
    borderRadius: 2 * vh,
    justifyContent: 'center',
    alignItems: 'center',
  },
  personal: {
    borderColor: '#08b',
    width: 4 * vh,
    height: 4 * vh,
    borderWidth: 2,
    backgroundColor: 'transparent',
    borderRadius: 2 * vh,
    justifyContent: 'center',
    alignItems: 'center',
  },
  personalStyle: {
    width: 2.5 * vh,
    height: 2.5 * vh,
    borderWidth: 2,
    borderColor: '#031956',
    backgroundColor: '#08b',
    borderRadius: 1.5 * vh,
  },
  businessStyle: {
    width: 2.5 * vh,
    height: 2.5 * vh,
    borderColor: '#031956',
    borderWidth: 2,
    backgroundColor: '#ad1ed8',
    borderRadius: 1.5 * vh,
  },
});

export default styles;
