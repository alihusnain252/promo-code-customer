import {MyTheme} from '@utils';
import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  dashboardContainer: {
    flex: 1,
    // justifyContent:"center",
    alignItems: 'center',
    // justifyContent:"center",
    backgroundColor: 'white',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width - 30,
    marginTop: 28,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: MyTheme.grey200,

    shadowColor: '#000',
    shadowOffset: {
      width: -2,
      height: 1,
    },
    shadowOpacity: 0.52,
    shadowRadius: 2.22,

    elevation: -2,
  },
  searchPress: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchImage: {
    width: 14,
    height: 14,
    marginRight: 15.5,
  },
  searchInput: {
    width: '80%',
    paddingLeft: 16,
  },
  vendors: {
    marginTop: 23,
    width: '100%',
    height: 100,
    // alignItems: 'center',
  },
  ads: {
    marginTop: 25,
    width: '100%',
    height: 140,
    // alignItems: 'center',
  },
  discount: {
    marginTop: 31,
    width: '100%',
    height: '50%',
    // alignItems: 'center',
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
});
