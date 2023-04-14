import {MyTheme} from '@utils';
import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  validateContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: MyTheme.background,
  },
  body: {
    width: width - 38,
  },
  validateText: {
    fontFamily: MyTheme.poppins,
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 21,
    color: MyTheme.textPrimary,
    marginTop: 16,
  },
  phoneText: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 20,
    color: MyTheme.labelBlack,
    marginVertical: 11,
  },

  search: {
    height: 56,
    width: width - 40,
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 69,
    backgroundColor: MyTheme.primary,
  },
  searchText: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: MyTheme.white,
  },
  noDisplay: {
    display: 'none',
  },
  notFound: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  notFoundImage: {
    width: 17,
    height: 17,
  },
  notFoundText: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 14,
    color: MyTheme.FireOpal,
    marginLeft: 4,
  },
  input: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    marginTop: 9,
    // fontSize: 12,
    color: MyTheme.labelBlack,
    textTransform: 'capitalize',
    width: '100%',
    backgroundColor: MyTheme.grey,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: MyTheme.FireOpal,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});
