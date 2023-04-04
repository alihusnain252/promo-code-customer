import {MyTheme} from '@utils';
import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  searchVendorContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:MyTheme.white,
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
  item: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 6,
    marginHorizontal: 2,
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    // fontSize: 12,
    color: MyTheme.labelBlack,
    height: 61,
    width: width - 32,
    backgroundColor: MyTheme.white,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  ordersList:{
    width:"100%",
    marginTop:10,
  }
});
