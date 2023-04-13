import {MyTheme} from '@utils';
import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  favoriteContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: MyTheme.background,
  },
  favoriteHeader: {
    flexDirection: 'row',
    position: 'absolute',
    width: width - 40,
    height: 21,
    top: 70,
  },
  favoriteHeaderText: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 24,
    lineHeight: 20,
    color: MyTheme.textPrimary,
    paddingTop: 5,
    marginLeft: 5,
  },
  favoriteVendor: {
    // position: 'absolute',
    left: 16,
    marginTop:'3%',
    // top: 100,
    width:"100%",
    height:"15%",
  },
  favoriteVendorText: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 21,
    color: MyTheme.textPrimary,
  },
  favoriteDiscount: {
    // position: 'absolute',
    // top: 254,
    marginTop:'3%',
    bottom:0,
  },
  favoriteDiscountText: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 21,
    color: MyTheme.textPrimary,
    marginLeft: 16,
  },
});
