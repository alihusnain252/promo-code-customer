import {MyTheme} from '@utils';
import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  vendorDetailsContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: MyTheme.background,
  },
  discount: {
    marginTop: 31,
    width: '100%',
  },
  vendorDetailsView: {
    width: width - 40,
    marginVertical: '15%',
  },
  vendorNameVIew: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  vendorCategory: {
    fontFamily: MyTheme.poppins,
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: 14,
    // lineHeight: 21,
    color: MyTheme.grey100,
    marginTop: '1%',
  },
  vendorTextBold: {
    flex:2,
    fontFamily: MyTheme.poppins,
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: 16,
    // lineHeight: 21,
    color: MyTheme.black,
  },
  vendorText: {
    flex:3,
    fontFamily: MyTheme.poppins,
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 14,
    // lineHeight: 21,
    color: MyTheme.textPrimary,
    marginLeft: '1%',
  },

  imageView: {
    width: '100%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },


  discountHeading:{
    marginVertical:'3%'
  }
});
