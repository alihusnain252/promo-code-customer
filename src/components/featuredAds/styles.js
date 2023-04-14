import {MyTheme} from '@utils';
import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  featuredAdsContainer: {
    width: '100%',
    height: '100%',
  },
  heading: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 16,
    color: MyTheme.black,
    marginLeft: 16,
  },
  scrollView: {
    marginLeft: 15,
    marginTop: 16,
  },
  cardContainer: {
    width: 130,
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',
    marginRight: 15,

    borderWidth: 1,
    borderColor: MyTheme.grey200,
    borderRadius: 8,
    backgroundColor: MyTheme.primary,
  },
  cardImageContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    borderRadius: 8,
  },
  imageView: {
    width: '100%',
    height: '60%',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: MyTheme.grey200,
    borderRadius: 8,
  },
  cardImage: {
    width: '100%',
    height: 65,
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
  cardDetails: {
    // backgroundColor:"red",
    height: '40%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  discount: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 8,
    lineHeight: 14,
    color: MyTheme.FireOpal,
  },
  heartContainer: {
    position: 'absolute',
    width: 22,
    height: 22,
    right: 10,
    top: 10,
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
