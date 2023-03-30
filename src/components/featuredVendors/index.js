import {View, Text, ScrollView, Image, Pressable} from 'react-native';
import React from 'react';
import {styles} from './styles';
import image3 from '../../assets/images/image3.png';
import image4 from '../../assets/images/image4.png';
import image5 from '../../assets/images/image5.png';

export const FeaturedVendors = () => {
  return (
    <View style={styles.featuredVendorsContainer}>
      <ScrollView
        style={styles.scrollView}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <Vendors image={image3} title="ShopRite" />
        <Vendors image={image4} title="Barcelos" />
        <Vendors image={image5} title="Palace Shopping" />
        <Vendors image={image3} title="ShopRite" />
        <Vendors image={image4} title="Barcelos" />
      </ScrollView>
    </View>
  );
};

const Vendors = props => {
  return (
    <Pressable>
      <View style={styles.cardContainer}>
        <View style={styles.cardImageContainer}>
          <Image source={props.image} style={styles.cardImage} />
        </View>
        <Text style={styles.imageTitle}>{props.title}</Text>
      </View>
    </Pressable>
  );
};
