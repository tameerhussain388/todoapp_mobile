import {StyleSheet} from 'react-native';
import {vh, vw} from '../../Units';

const styles = StyleSheet.create({
  taskContainer: {
    marginHorizontal: 15,
    marginVertical: 3,
    width: 85 * vw,
    height: 8 * vh,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#031956',
    borderRadius: 22,
    elevation: 20,
  },
  bar: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
      height: '100%',
      backgroundColor: '#ad1ed8',
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  container: {
    flex: 1,
    marginVertical: 10,
  },
  textStyle: {
    color: '#ccc',
    fontSize: 18,
  },
  textMain: {
    color: '#ccc',
    fontSize: 15,
    marginLeft: 33,
  },
  textDaily: {
    color: '#ccc',
    fontSize: 15,
    marginLeft: 15,
    marginBottom: 5,
  },
  total: {
    backgroundColor: '#aaa',
    width: '83%',
    height: 0.5 * vh,
    left: 15,
    position: 'absolute',
    bottom: 15,
  },
  HeaderStyle: {
    marginHorizontal: 15,
    marginVertical: 10,
    marginBottom: 60,
    width: 50 * vw,
    height: 16 * vh,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,

    backgroundColor: '#031956',
    borderRadius: 28,
  },
  textHeader: {
    fontSize: 15,
    color: '#999',
    marginTop: 20,
    marginLeft: 20,
  },
  HeaderTextStyle: {
    color: '#ccc',
    fontSize: 23,
    margin: 15,
    alignSelf: 'flex-start',
    position: 'absolute',
    bottom: 21,
  },
  listStyle: {
    marginVertical: 10,
    // marginHorizontal: 14,
    marginLeft: 14,
  },
});

export default styles;
