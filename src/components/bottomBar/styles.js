import {MyTheme} from '@utils';
import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  bottomBarContainer: {
    width: width-18,
    height: 61,
    backgroundColor:MyTheme.dark,
    borderRadius:70,
    position:"absolute",
    bottom:12,
  },
 
});
