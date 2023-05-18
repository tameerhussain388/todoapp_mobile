import {StyleSheet} from 'react-native';
import fonts from '../../Assets/fonts';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // borderBottomColor: '#ddd',
    // borderBottomWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#031956',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 30,
    borderRadius: 15,
  },
  lableText: {
    fontSize: 18,
    paddingLeft: 10,
    color: '#fff',
  },
  inputText: {
    fontSize: 18,
    paddingLeft: 25,
    color: '#fff',
    includeFontPadding: false,
    width: '100%',
    fontFamily: fonts.Montserrat.Regular,
  },
  iconSize: 20,
  iconColor: '#FFF',
  placeHolderColor: '#777',
});
export default styles;
