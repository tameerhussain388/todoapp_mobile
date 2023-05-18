import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#031956',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
    paddingTop: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 8,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
    color: '#fff',
  },
});

export default styles;
