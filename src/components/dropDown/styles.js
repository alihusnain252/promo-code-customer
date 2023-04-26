import {MyTheme} from '@utils';
import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: MyTheme.background,
    // padding: 16,
    width: width,
    color: MyTheme.black,
    // justifyContent:"center",
    alignItems: 'center',
  },
  dropdown: {
    height: 50,
    width: '90%',
    borderColor: MyTheme.black,
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    color: MyTheme.black,
    backgroundColor: MyTheme.white,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    color: MyTheme.black,
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    color: MyTheme.grey100,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: MyTheme.black,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: MyTheme.black,
  },
});
