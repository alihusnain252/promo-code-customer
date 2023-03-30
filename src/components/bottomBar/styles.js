import {MyTheme} from '@utils';
import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  bottomBarContainer: {
    width: width - 18,
    height: 61,
    backgroundColor: MyTheme.dark,
    borderRadius: 70,
    position: 'absolute',
    bottom: 12,
    paddingHorizontal: 31.17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconView: {
    width: 61.67,
    height: 40.93,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 21.67,
    height: 20.93,
  },
  iconText: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 11,
    lineHeight: 12,
    color: MyTheme.white,
    marginTop: 7,
  },
});
