import {StyleSheet, Dimensions} from 'react-native';
import {MyTheme} from '@utils';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: MyTheme.white,
  },
  heading: {
    position: 'absolute',
    width: 126,
    left: 22,
    top: 70,
  },
  headingText: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    paddingTop: 5,
    fontWeight: 500,
    fontSize: 24,
    lineHeight: 20,
    color: MyTheme.black,
  },
  welcomeText: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 20,
    color: MyTheme.grey100,
    paddingTop: 10,
  },
  loginInputs: {
    position: 'absolute',
    width: width - 40,
    top: 149,
  },
  input: {
    width: '100%',
    backgroundColor: MyTheme.grey,
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  loginBtns: {
    position: 'absolute',
    width: width - 40,
    top: 290,
  },
  recoverText: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: 14,
    lineHeight: 20,
    color: MyTheme.grey100,
  },
  login: {
    width: width - 40,
    height: 56,
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 69,
    backgroundColor: MyTheme.yellow,
  },
  loginText: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: MyTheme.white,
  },
  registerNow: {
    flexDirection: 'row',
    position: 'absolute',
    top: 713,
  },
  notMemberText: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 19,
    color: MyTheme.black,
  },
  registerPress: {
    paddingHorizontal: 5,
  },
  registerText: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 19,
    color: MyTheme.yellow,
  },
});
