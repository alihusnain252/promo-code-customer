import {MyTheme} from '@utils';
import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  vendorsContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: MyTheme.white,
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
    width: width-40,
    alignSelf:"center",
    borderRadius:8,
  },
  cardImage: {
    width: '50%',
    height: '100%',
    borderTopLeftRadius:8,
    borderBottomLeftRadius:8,
  },
  scroll: {
    width: width,
  },
  cardTopView: {
    borderRadius:8,
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
  vendorDetails: {
    borderTopRightRadius:8,
    borderBottomRightRadius:8,
    paddingLeft: 19,
    width: '50%',
    backgroundColor:MyTheme.primary
  },
  vendorName: {
    marginTop: 5,
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 14,
    color: MyTheme.black,
  },
  address: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 14,
    color: MyTheme.black,
  },
  addressText: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 10,
    lineHeight: 14,
    color: MyTheme.grey100,
  },
  description: {
    width: '80%',
    height: '40%',
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 14,
    color: MyTheme.black,
  },
  descriptionText: {
    width: '80%',
    height: '40%',
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 10,
    lineHeight: 14,
    color: MyTheme.grey100,
  },
  categoryName: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 9,
    lineHeight: 14,
    color: MyTheme.grey100,
  },

  heartContainer: {
    position: 'absolute',
    width: 22,
    height: 22,
    right: 30,
    top: 0,
    backgroundColor: MyTheme.grey300,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heartImg: {
    width: 11.64,
    height: 10.32,
  },
});
