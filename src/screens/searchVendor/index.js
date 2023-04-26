import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {AdCard, ArrowHeader, Vendors, DropdownComponent} from '@components';
import {MyTheme, customerUris} from '@utils';
import {useSelector} from 'react-redux';
import {token} from '@redux/tokenSlice';
import {GetCitiesRequest, GetRequest} from '../../api/apiCall';

export const SearchVendor = ({route}) => {
  const {searchByName, catId} = route.params;
  const userToken = useSelector(token);

  const [name, setName] = useState(searchByName);
  const [filteredVendors, setFilteredVendors] = useState([]);
  const [filteredPromotions, setFilteredPromotions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState('');
  const [allCities, setAllCities] = useState([]);

  const searchHandler = () => {
    setLoading(true);
    GetRequest(
      userToken.token,
      customerUris.filterVendorsAndPromotions + `${name}`,
    ).then(res => {
      if (res.data.success === true) {
        setFilteredPromotions(res.data.data.featured_promotions);
        setFilteredVendors(res.data.data.featured_vendors);
        setLoading(false);
      } else {
        Alert.alert(res.data.message);
        setLoading(false);
      }
    });
  };
  const searchByCatId = () => {
    setLoading(true);
    GetRequest(
      userToken.token,
      customerUris.filterVendorAndPromotionByCatId + `${catId}`,
    ).then(res => {
      if (res.data.success === true) {
        setFilteredPromotions(res.data.data.featured_promotions);
        setFilteredVendors(res.data.data.featured_vendors);
        setLoading(false);
      } else {
        Alert.alert(res.data.message);
        setLoading(false);
      }
    });
  };
  const getAllCities = () => {
    setLoading(true);
    GetCitiesRequest(customerUris.allCities).then(res => {
      if (res.data.success === true) {
        console.log('all cities', res.data.data);
        setAllCities(res.data.data);
        setLoading(false);
      } else {
        Alert.alert(res.data.message);
        setLoading(false);
      }
    });
  };
  const searchByCityName = () => {
    setLoading(true);
    GetRequest(userToken.token, customerUris.searchByCity + `${city}`).then(
      res => {
        if (res.data.success === true) {
          setFilteredPromotions(res.data.data.featured_promotions);
          setFilteredVendors(res.data.data.featured_vendors);
          setLoading(false);
        } else {
          Alert.alert(res.data.message);
          console.log('search by city response ', res);
          setLoading(false);
        }
      },
    );
  };

  const Item = ({data}) => <AdCard promo={data} />;
  const VendorItem = ({data}) => <Vendors vendor={data} />;

  useEffect(() => {
    catId != '' ? searchByCatId() : null;
    getAllCities();
  }, []);

  return (
    <View style={styles.searchVendorContainer}>
      <ArrowHeader heading="Search Vendor" />
      <View style={styles.searchContainer}>
        <TextInput
          value={name}
          onChangeText={e => setName(e)}
          style={styles.searchInput}
          placeholder="Search (Vendor, Offers)"
          placeholderTextColor={MyTheme.EerieBlack}
        />
        <Pressable style={styles.searchPress} onPress={() => searchHandler()}>
          <Image
            source={require('../../assets/icons/search.png')}
            style={styles.searchImage}
          />
        </Pressable>
      </View>
      <View style={styles.dropDownContainer}>
        <DropdownComponent
          setCity={setCity}
          search={searchByCityName}
          allCities={allCities}
          placeholder={'Search by City'}
        />
      </View>
      <View style={loading === false ? {display: 'none'} : {marginTop: '5%'}}>
        <ActivityIndicator size={36} color={MyTheme.yellow} />
      </View>
      <View
        style={
          filteredVendors.length === 0
            ? {display: 'none'}
            : catId
            ? {display: 'none'}
            : styles.vendorsList
        }>
        <Text style={styles.vendorText}>Vendors</Text>
        <FlatList
          data={filteredVendors}
          renderItem={({item}) => <VendorItem data={item} />}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View
        style={
          filteredPromotions.length === 0
            ? {display: 'none'}
            : filteredVendors.length === 0
            ? styles.promoListNOVendor
            : styles.promoList
        }>
        <Text style={styles.promoText}>Promotions⚡️</Text>
        <FlatList
          data={filteredPromotions}
          renderItem={({item}) => <Item data={item} />}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};
