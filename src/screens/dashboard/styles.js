import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent:"center",
    alignItems: 'center',
  },
});
