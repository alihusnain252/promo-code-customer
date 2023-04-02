import {StyleSheet, Dimensions} from 'react-native';
import {MyTheme} from '@utils';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const globalInputsStyles = StyleSheet.create({
  globalInputs: {
    width: width - 40,
    height: 85,
  },
  globalLabel: {
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 20,
    color: MyTheme.labelBlack,
    textTransform: 'capitalize',
    marginBottom: 5,
  },
  input: {
    flexDirection:"row",
    alignItems:"center",
    fontFamily: MyTheme.fontFamily,
    fontStyle: 'normal',
    // fontSize: 12,
    color: MyTheme.labelBlack,
    width: '100%',
    backgroundColor: MyTheme.grey,
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 15,
  },
});
