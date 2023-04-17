import {StyleSheet, Dimensions} from 'react-native';
import {MyTheme} from '@utils';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const signInInputsStyles = StyleSheet.create({
  inputView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: MyTheme.white,
    borderRadius: 8,
    marginBottom: 20,
    paddingLeft: 10,
  },
  input: {
    width: '90%',
    backgroundColor: MyTheme.white,
    borderRadius: 8,
    paddingHorizontal: 15,
    color: MyTheme.textPrimary,
  },
  imgStyle1: {
    width: 16,
    height: 16,
  },
  imgStyle2: {
    width: 14,
    height: 18,
  },
});
