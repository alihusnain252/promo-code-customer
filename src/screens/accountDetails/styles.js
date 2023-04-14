import {MyTheme} from '@utils';
import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  signupContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: MyTheme.background,
  },
  signupHeader: {
    width: '100%',
    flexDirection: 'row',
    position: 'absolute',
    width: width - 40,
    height: 25,
    top: 70,
  },
  signUpHeaderText: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 24,
    lineHeight: 20,
    color: MyTheme.black,
    paddingTop: 5,
    marginLeft: 5,
  },
  scrollView: {
    position: 'absolute',
    width: '100%',
    height: '78%',
    left: 20,
    top: 154,
  },
  register: {
    height: 56,
    width: width - 40,
    height: 56,
    marginTop: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 69,
    backgroundColor: MyTheme.primary,
  },
  registerText: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: MyTheme.white,
  },

  dateInput:{
    width:"80%",
  },
  datePress:{
    width:"20%",
    height:"100%",
    justifyContent:"center",
    alignItems:"center",
  },
  profileImageView: {
    position: 'absolute',
    width: 80,
    height: 80,
    top: 65,
    borderWidth: 2,
    borderColor: MyTheme.green200,
    borderRadius: 59,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 59,
  },
});
