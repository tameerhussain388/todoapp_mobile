import {StyleSheet} from 'react-native';
import {vh, vw} from '../../Units';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#344fa1',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20 * vh,
    paddingVertical: 10 * vh,
  },
  categoryContainer: {
    flex: 1,
    flexDirection: 'row',
    // right: 17 * vw,
    alignSelf: 'flex-start',
    paddingBottom: 10 * vh,
    paddingLeft: vh * 6,
  },
  placeHolderColor: '#fff4',
  inputContainer: {
    width: 80 * vw,
    height: 15 * vh,
    paddingBottom: 10 * vh,
    fontSize: 25,
  },
  selectCategoryStyle: {
    marginLeft: 10,
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20 * vh,
  },
});

export default styles;
