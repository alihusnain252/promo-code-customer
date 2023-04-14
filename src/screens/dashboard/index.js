import {
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {
  Ads,
  BottomBar,
  FeaturedAds,
  FeaturedVendors,
  TopHeader,
} from '@components';
import {MyTheme, customerUris} from '@utils';
import {useSelector} from 'react-redux';
import {token} from '@redux/tokenSlice';
import {GetRequest} from '../../api/apiCall';
import {useFocusEffect} from '@react-navigation/native';

export const Dashboard = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [allPromotions, setAllPromotions] = useState([]);
  const [featured_vendors, setFeatured_vendors] = useState([]);
  const [promotions, setPromotions] = useState([]);
  const [searchByName, setSearchByName] = useState('');

  const userToken = useSelector(token);

  const getAds = () => {
    setLoading(true);
    GetRequest(userToken.token, customerUris.allPromotions).then(res => {
      if (res.data.success === true) {
        // console.log('all ads : ', res.data.data.promotions.data);
        setAllPromotions(res.data.data.promotions.data);
        setLoading(false);
      } else {
        Alert.alert(res.data.message);
        setLoading(false);
      }
    });
  };

  const getFeaturedVendors = () => {
    setLoading(true);
    GetRequest(userToken.token, customerUris.featuredVendors).then(res => {
      if (res.data.success === true) {
        setLoading(false);
        setFeatured_vendors(res.data.data.featured_vendors);
      } else {
        setLoading(false);
      }
    });
  };

  const getFeaturedAds = () => {
    setLoading(true);
    GetRequest(userToken.token, customerUris.featuredPromotions).then(res => {
      if (res.data.success === true) {
        setPromotions(res.data.data.featured_promotions);
        setLoading(false);
      } else {
        Alert.alert(res.data.message);
        setLoading(false);
      }
    });
  };

  // useEffect(() => {
  //   getFeaturedAds();
  //   getFeaturedVendors();
  //   getAds();
  // }, []);
  useFocusEffect(
    React.useCallback(() => {
      getFeaturedAds();
      getFeaturedVendors();
      getAds();
    }, []),
  );

  return (
    <View style={styles.dashboardContainer}>
      <TopHeader />
      <View style={styles.searchContainer}>
        <Pressable
          style={styles.searchPress}
          onPress={() =>
            navigation.navigate('SearchVendor', {searchByName: searchByName})
          }>
          <TextInput
            onChangeText={e => setSearchByName(e)}
            value={searchByName}
            style={styles.searchInput}
            placeholder="Search (Vendor, Offers)"
            placeholderTextColor={MyTheme.EerieBlack}
            editable={false}
          />
          <Image
            source={require('../../assets/icons/search.png')}
            style={styles.searchImage}
          />
        </Pressable>
      </View>

      <ScrollView style={{flex: 1, marginTop: '1%'}}>
        <View style={styles.vendors}>
          <View style={styles.vendorTextView}>
            <Text style={styles.heading}>Featured vendors</Text>
            <Pressable
              style={styles.allVendorPress}
              onPress={() => navigation.navigate('AllVendors')}>
              <Text style={styles.vendorText}>All vendors</Text>
            </Pressable>
          </View>
          <FeaturedVendors
            featured_vendors={featured_vendors}
            loading={loading}
          />
        </View>

        <View style={promotions.length === 0 ? {display: 'none'} : styles.ads}>
          <Text style={styles.heading}>Featured Ads⚡️</Text>
          <FeaturedAds promotions={promotions} loading={loading} />
        </View>

        <View style={styles.discount}>
          <Text style={styles.heading}>Discounts for you⚡️</Text>
          <Ads allPromotions={allPromotions} loading={loading} />
        </View>
      </ScrollView>
      <BottomBar />
    </View>
  );
};
