import {MyTheme} from '@utils';
import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  promoContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: MyTheme.white,
  },
});
