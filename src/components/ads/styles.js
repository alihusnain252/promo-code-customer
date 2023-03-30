import {MyTheme} from '@utils';
import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  adsContainer: {
    width: '100%',
    height: '100%',
  },
  heading: {
    fontFamily: MyTheme.poppins,
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 21,
    color: MyTheme.black,
    marginLeft: 16,
  },
  cardContainer: {
    width: '100%',
    paddingHorizontal: 17,
    marginTop: 22,
  },
  cardImage: {
    width: '50%',
    height: '100%',
  },
  scroll: {
    width: width,
  },
  cardTopView: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    backgroundColor: MyTheme.grey400,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  adDetails: {
    marginLeft: 19,
  },
  originalPrice: {
    fontFamily: MyTheme.poppins,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 11,
    lineHeight: 18,
    color: MyTheme.black,
  },
  discountPrice: {
    fontFamily: MyTheme.poppins,
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 18,
    lineHeight: 18,
    color: MyTheme.green200,
  },
  adTitle: {
    fontFamily: MyTheme.poppins,
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 12,
    lineHeight: 18,
    color: MyTheme.black,
  },
  expiry: {
    width: 109,
    fontFamily: MyTheme.poppins,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 9,
    lineHeight: 18,
    color: MyTheme.black,
  },
  off: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 9,
    lineHeight: 18,
    color: MyTheme.grey100,
  },
  bottomView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  bottomRight: {
    alignItems: 'flex-end',
  },
  companyName: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 14,
    color: MyTheme.black,
  },
  categoryName: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 9,
    lineHeight: 14,
    color: MyTheme.grey500,
  },
  availableTill: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 10,
    lineHeight: 14,
    color: MyTheme.grey100,
  },
  ratings: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 8,
    lineHeight: 14,
    color: MyTheme.black,
  },
});
