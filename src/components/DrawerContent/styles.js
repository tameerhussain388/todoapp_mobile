import {StyleSheet} from 'react-native';
import {vh, vw} from '../../Units';

const styles = StyleSheet.create({
  linearGradient: {
    paddingTop: vh * 10,
    flex: 1,
    paddingLeft: vw * 10,
  },
  imageStyle: {
    width: 10 * vh,
    height: 10 * vh,
  },
  logoutStyle: {
    marginTop: vh * 40,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 5 * vh,
  },
  label: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: vh * 2,
  },
  labelContainer: {
    width: vh * 15,
    height: vh * 50,
    paddingTop: vh * 3,
  },
});
export default styles;
