import { MyTheme } from '@utils';
import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    backgroundColor: MyTheme.primary,
    // paddingHorizontal: 20,
    height: 60,
    
  },
  headerText: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 18,
    color: MyTheme.black,
  },
});
