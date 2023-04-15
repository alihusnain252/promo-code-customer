import { MyTheme } from '@utils';
import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    height: 21,
    // paddingVertical: 38,
    // padding:10,
    alignItems: 'center',
    backgroundColor: MyTheme.primary,
    paddingHorizontal: 20,
    height: 60
  },
  headerText: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 16,
    // lineHeight: 21,
    color: MyTheme.black,
    marginLeft: 11,
  },
});
