import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import {useDispatch} from 'react-redux';
import {SET_API_RESULT, SET_API_ERROR} from '../../redux/actions';

import CitySearchStyles from './CitySearchStyles';

const CitySearch = () => {
  const dispatch = useDispatch();

  const [searchInfo, setSearchInfo] = useState({
    apiKey: '',
    cityName: '',
  });

  const [loading, setLoading] = useState(false);

  const submitAPISearch = () => {
    const {apiKey, cityName} = searchInfo;

    if (apiKey && cityName) {
      setLoading(true);
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric `,
      )
        .then(res => res.json())
        .then(result => {
          setLoading(false);
          if (result.cod === 200) {
            dispatch(SET_API_ERROR(null));
            dispatch(SET_API_RESULT(result));
          } else {
            dispatch(SET_API_RESULT(null));
            dispatch(SET_API_ERROR(result.message));
          }
        })
        .catch(() => dispatch(SET_API_ERROR('Network Error')));
    }
  };

  return (
    <View style={CitySearchStyles.CitySearchContainer}>
      <Text style={CitySearchStyles.CitySearchText}>
        Both fields are required
      </Text>
      <TextInput
        onChangeText={text => setSearchInfo({...searchInfo, apiKey: text})}
        style={CitySearchStyles.CitySearchInput}
        placeholderTextColor="#fff"
        placeholder="API KEY"
      />
      <TextInput
        onChangeText={text => setSearchInfo({...searchInfo, cityName: text})}
        style={CitySearchStyles.CitySearchInput}
        placeholderTextColor="#fff"
        placeholder="City Name"
      />

      {loading ? (
        <ActivityIndicator style={{marginTop: 30}} color="#fff" size="large" />
      ) : (
        <TouchableOpacity
          style={CitySearchStyles.CitySearchButton}
          onPress={submitAPISearch}>
          <Text style={{color: 'white', letterSpacing: 2}}>Submit Search</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CitySearch;
