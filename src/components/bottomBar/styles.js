import {MyTheme} from '@utils';
import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  bottomBarContainer: {
    width: width - 18,
    height: 61,
    backgroundColor: MyTheme.dark,
    borderRadius: 70,
    position: 'absolute',
    bottom: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconView: {
    width: 61.67,
    height: 40.93,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '2%',
  },
  icon: {
    width: 21.67,
    height: 20.93,
  },
  iconText: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 11,
    lineHeight: 12,
    color: MyTheme.white,
    marginTop: 7,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  modalView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: height / 2.15,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonClose: {
    alignSelf: 'center',
    height: 3,
    width: 53,
    marginTop: 15,
    backgroundColor: MyTheme.grey200,
  },
  flatList: {
    width: width,
    marginTop:"2%"
  },
  modalText: {
    width: '100%',
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 20,
    color: MyTheme.black,
    marginTop: 17,
    marginLeft: 24,
    marginBottom: '1%',
  },
  categoriesView: {
    marginTop: 10,
  },
  category: {
    width: '24%',
    height: 100,
    resizeMode: 'contain',
    marginHorizontal: '2%',
    marginBottom: '2%',
    alignItems: 'center',
    // backgroundColor: MyTheme.primary,
  },
  categoryPress: {
    width: '100%',
    height: "100%",
  },
  categoryIconView: {
    width: 60,
    height: 60,
    justifyContent:"center",
    alignItems:"center",
    resizeMode: 'contain',
    alignSelf: 'center',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,

    // elevation: 5,
  },
  categoryTextView: {
    justifyContent:"center",
    alignItems:"center",
    marginTop:"2%",
  },
  categoryText: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 10,
    color: MyTheme.black,
  },
  categoryIcon: {

    backgroundColor: MyTheme.primary,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius:70,
  },
});
