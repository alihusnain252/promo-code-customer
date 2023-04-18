import {MyTheme} from '@utils';
import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  notificationContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: MyTheme.background,
  },
  notificationButton: {
    width: '100%',
    height: 32,
    borderBottomColor: MyTheme.grey700,
    borderBottomWidth: 1,
    marginTop: 11,
  },
  notificationText: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 20,
    color: MyTheme.textPrimary,
    paddingTop: 5,
  },
  notificationPress: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
  },
});
