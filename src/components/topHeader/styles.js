import {MyTheme} from '@utils';
import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  topContainer: {
    alignItems: 'center',
    width: '100%',
    backgroundColor: MyTheme.primary,
    shadowColor: MyTheme.black,
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,
  },
  topBody: {
    width: width - 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 91,
  },
  profile: {
    width: 31,
    height: 31,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius:50,
  },
  icon: {
    width: 28,
    height: 28,
  },
  iconImage: {
    width: '100%',
    height: '100%',
  },
  notification: {
    width: 15.61,
    height: 18,
  },
  notificationImage: {
    width: '100%',
    height: '100%',
  },
  dot:{
    width:8,
    height:8,
    backgroundColor:MyTheme.FireOpal,
    borderRadius:50,
    position:"absolute",
    top:2,
    left:8.61,
  },
});
