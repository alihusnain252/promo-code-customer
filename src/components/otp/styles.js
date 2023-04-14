import {MyTheme} from '@utils';
import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  inputContainer: {
    // backgroundColor:'red',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 170,
  },
  textInput: {
    backgroundColor: MyTheme.primary,
    padding: 7,
    margin: 7,
    borderRadius: 5,
    textAlign: 'center',
    color: MyTheme.accent,
  },
});
