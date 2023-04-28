import {
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {SliderBox} from 'react-native-image-slider-box';
import {
  Ads,
  BottomBar,
  FeaturedAds,
  FeaturedVendors,
  TopHeader,
} from '@components';
import {
  MyTheme,
  customerUris,
  notificationListener,
  requestUserPermission,
} from '@utils';
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
  const [sliderData, setSliderData] = useState([]);
  const [sliderImage, setSliderImage] = useState([]);

  // const images = [
  //   'https://source.unsplash.com/1024x768/?nature',
  //   'https://source.unsplash.com/1024x768/?water',
  //   'https://source.unsplash.com/1024x768/?girl',
  //   'https://source.unsplash.com/1024x768/?tree',
  // ];
  const sliderDataDemo = [
    {imageUri: 'https://source.unsplash.com/1024x768/?nature', promoId: 11},
    {imageUri: 'https://source.unsplash.com/1024x768/?water', promoId: 21},
    {imageUri: 'https://source.unsplash.com/1024x768/?girl', promoId: 31},
    {imageUri: 'https://source.unsplash.com/1024x768/?tree', promoId: 41},
  ];

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

  const pDetails = {
    category_id: 2,
    category_name: 'Electronics',
    city: 'Tamale',
    company_name: 'Yasir resturent',
    description: 'Customers best experiance',
    discounted_price: '800',
    expiry_date: '14-04-2023 06:18:21 PM',
    id: 1,
    image: 'https://backend.buddysaver.net/uploads/promotions/adPhoto.png',
    is_favourite: true,
    is_featured: true,
    original_price: '1200',
    promotion_details: 'best food quality is available',
    promotion_duration: '10',
    status: 'Active',
    vendor: {
      address: 'abc',
      category_id: 1,
      category_name: 'Food & Beverages',
      city: 'Accra',
      email: 'palace@saverbuddy.net',
      first_name: 'Palace',
      id: 2,
      is_favourite: false,
      last_name: 'Mall',
      name: 'Palace Mall',
      phone_number: '03324485601',
      profile_pic:
        'https://backend.buddysaver.net/uploads/user_profiles/1681593395_avatar-14673934594n62i.jpg',
      short_description:
        'Supermarket chain with brand plus a bakery & a deli. name & house',
      status: 'verified',
      subscription_status: 'active',
      user_type: 'vendor',
    },
  };
  
  const getSliderData = () => {
    setLoading(true);
    GetRequest(userToken.token, customerUris.sliderData).then(res => {
      if (res.data.success === true) {
        console.log('all ads : ', res.data.data);
        // setSliderData(res.data.data);
        // setSliderImage(es.data.data.map(data => data.imageUri));
        setLoading(false);
      } else {
        Alert.alert(res.data.message);
        setLoading(false);
      }
    });
  };
  const getPromoDetails = index => {
    const pd = sliderDataDemo[index];
    console.log('promo ID :', pd.promoId);
    navigation.navigate('PromoDetails', {promoDetails: pDetails});
    // setLoading(true);
    // GetRequest(userToken.token, customerUris.allPromotions).then(res => {
    //   if (res.data.success === true) {
    //     // console.log('all ads : ', res.data.data.promotions.data);
    //     navigation.navigate("PromoDetails", {promoDetails:pDetails})
    //     setLoading(false);
    //   } else {
    //     Alert.alert(res.data.message);
    //     setLoading(false);
    //   }
    // });
  };

  useFocusEffect(
    React.useCallback(() => {
      getFeaturedAds();
      getFeaturedVendors();
      getAds();
      // getSliderData()

      requestUserPermission(userToken);
      notificationListener();
      setSliderImage(sliderDataDemo.map(data => data.imageUri));
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
        <View style={styles.sliderContainer}>
          <SliderBox
            dotColor="#FFEE58"
            inactiveDotColor="#90A4AE"
            paginationBoxVerticalPadding={5}
            autoplay
            circleLoop
            images={sliderImage}
            onCurrentImagePressed={index => {
              getPromoDetails(index);
            }}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 8,
              marginHorizontal: 0,
              padding: 0,
              margin: 0,
              backgroundColor: 'rgba(128, 128, 128, 0.92)',
            }}
            ImageComponentStyle={{borderRadius: 8, width: '97%', marginTop: 5}}
            imageLoadingColor={MyTheme.yellow}
          />
        </View>
        <View style={styles.vendors}>
          <View style={styles.vendorTextView}>
            <Text style={styles.heading}>Vendors of the Week</Text>
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
