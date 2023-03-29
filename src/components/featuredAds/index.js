import {View, Text, ScrollView, Image, Pressable} from 'react-native';
import React from 'react';
import {styles} from './styles';
import image3 from '../../assets/images/image3.png';
import image6 from '../../assets/images/image6.png';
import image7 from '../../assets/images/image7.png';
import heart from '../../assets/images/heart.png';

export const FeaturedAds = () => {
  return (
    <View style={styles.featuredAdsContainer}>
      <Text style={styles.heading}>Featured Ads⚡️</Text>
      <ScrollView
        style={styles.scrollView}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <FeaturedAd image={image3} title="ShopRite" />
        <FeaturedAd image={image6} title="Shamrock Food" />
        <FeaturedAd image={image7} title="Gordon Food" />
        <FeaturedAd image={image6} title="Shamrock Food" />
        <FeaturedAd image={image3} title="ShopRite" />
      </ScrollView>
    </View>
  );
};
const FeaturedAd = props => {
  return (
    <View style={styles.cardContainer}>
      <Pressable>
        <View style={styles.cardImageContainer}>
          <View style={styles.imageView}>
            <Image source={props.image} style={styles.cardImage} />
          </View>
          <View style={styles.cardDetails}>
            <Text style={styles.imageTitle}>{props.title}</Text>
            <Text style={styles.discount}>5% Cashback</Text>
          </View>
          <View style={styles.heartContainer}>
            <Image source={heart} style={styles.heartImg} />
          </View>
        </View>
      </Pressable>
    </View>
  );
};
