import {MyTheme} from '@utils';
import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  featuredVendorsContainer: {
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
  scrollView: {
    marginLeft: 15,
    // marginTop: 1,
  },
  cardContainer: {
    width: 90,
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  cardImageContainer: {
    width: '100%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: MyTheme.primary,
    borderRadius: 8,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  imageTitle: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 20,
    color: MyTheme.black,
  },
  heartContainer: {
    position: 'absolute',
    width: 22,
    height: 22,
    right: 20,
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
