import {MyTheme} from '@utils';
import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  heartContainer: {
    position: 'absolute',
    width: 22,
    height: 22,
    right: 10,
    top: 10,
    backgroundColor: MyTheme.grey300,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heartImg: {
    width: 11.64,
    height: 10.32,
  },
});
