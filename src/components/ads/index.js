import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import image from '../../assets/images/image8.png';

export const Ads = () => {
  return (
    <View style={styles.adsContainer}>
      <ScrollView style={styles.scroll}>
        <AdCard />
        <AdCard />
        <AdCard />
      </ScrollView>
    </View>
  );
};

const AdCard = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardTopView}>
        <Image source={image} style={styles.cardImage} />
        <View style={styles.adDetails}>
          <Text style={styles.originalPrice}>150$</Text>
          <Text style={styles.discountPrice}>
            70$ <Text style={styles.off}>OFF</Text>
          </Text>
          <Text style={styles.adTitle}>Philips Iron - Promo </Text>
          <Text style={styles.expiry}>
            Active - Promo Expiring in 15 hours{' '}
          </Text>
        </View>
      </View>
      <View style={styles.bottomView}>
        <View style={styles.bottomLeft}>
          <Text style={styles.companyName}>Promo Company Name here</Text>
          <Text style={styles.categoryName}>Category Name</Text>
        </View>
        <View style={styles.bottomRight}>
          <Text style={styles.availableTill}>Available Till: 27,Mar </Text>
          <Text style={styles.ratings}>⭐️ 5.0 </Text>
        </View>
      </View>
    </View>
  );
};
