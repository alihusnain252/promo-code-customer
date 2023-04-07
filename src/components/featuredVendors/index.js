import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {GetRequest} from '../../api/apiCall';
import {useSelector} from 'react-redux';
import {token} from '@redux/tokenSlice';
import {MyTheme} from '@utils';

export const FeaturedVendors = ({loading, featured_vendors}) => {
  return (
    <View style={styles.featuredVendorsContainer}>
      <View
        style={
          loading === false
            ? {display: 'none'}
            : {position: 'absolute', top: 10, left: 150, zIndex: 1}
        }>
        <ActivityIndicator size={36} color={MyTheme.yellow} />
      </View>
      <ScrollView
        style={styles.scrollView}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {featured_vendors?.map(vendor => {
          return <Vendors image={vendor.profile_pic} title={vendor.name} />;
        })}
      </ScrollView>
    </View>
  );
};

const Vendors = props => {
  return (
    <Pressable>
      <View style={styles.cardContainer}>
        <View style={styles.cardImageContainer}>
          <Image source={{uri: props.image}} style={styles.cardImage} />
        </View>
        <Text style={styles.imageTitle}>{props.title}</Text>
      </View>
    </Pressable>
  );
};
