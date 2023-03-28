import {MyTheme} from '@utils';
import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  otpContainer: {
    flex: 1,
    alignItems: 'center',
  },
  otpHeader: {
    width: '100%',
    flexDirection: 'row',
    position: 'absolute',
    width: width - 40,
    height: 21,
    top: 70,
  },
  otpHeaderText: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 24,
    lineHeight: 20,
    color: MyTheme.black,
    paddingTop: 5,
    marginLeft: 5,
  },
  conform: {
    position: 'absolute',
    height: 56,
    left: 20,
    bottom: 20,
    width: width - 40,
    height: 56,
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 69,
    backgroundColor: MyTheme.yellow,
  },
  conformText: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: MyTheme.white,
  },
});
