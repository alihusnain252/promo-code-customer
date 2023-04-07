import {View, Text} from 'react-native';
import React from 'react';

export const Loader = () => {
  return (
      <View style={loading === false ? {display: 'none'} : {marginTop: 20}}>
        <ActivityIndicator size={36} color={MyTheme.yellow} />
      </View>
  );
};
