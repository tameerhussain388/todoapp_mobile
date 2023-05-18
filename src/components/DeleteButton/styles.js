import {StyleSheet} from 'react-native';
import {vh, vw} from '../../Units';

const styles = StyleSheet.create({
  taskContainer: {
    marginHorizontal: 15,
    marginVertical: 3,
    width: 83 * vw,
    height: 8 * vh,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#c9443a',
    borderRadius: 22,

    // right: vh * 4,
  },
  ImageStyle: {
    width: vh * 4,
    height: vh * 4,
    // left: vh * 39,
    tintColor: 'white',
    resizeMode: 'contain',
  },
  imageContainer: {
    backgroundColor: '#d44e44',
    height: vh * 6,
    marginLeft: vw * 68,
    width: 6 * vh,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3 * vh,
  },
});

export default styles;
