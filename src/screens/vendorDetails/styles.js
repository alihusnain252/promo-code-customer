import {MyTheme} from '@utils';
import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  vendorDetailsContainer: {
    flex: 1,
    // justifyContent:"center",
    alignItems: 'center',
    // justifyContent:"center",
    backgroundColor: 'white',
  },
  discount: {
    marginTop: 31,
    width: '100%',
    height: '50%',
    // alignItems: 'center',
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
    fontFamily: MyTheme.poppins,
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: 16,
    // lineHeight: 21,
    color: MyTheme.black,
  },
  vendorText: {
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
    height: 105,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // borderBottomWidth: 1,
    borderColor: MyTheme.grey200,
    borderRadius: 8,
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
});
