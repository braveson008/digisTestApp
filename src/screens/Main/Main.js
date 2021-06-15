import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { useSelector } from 'react-redux';

import MainStyles from './MainStyles';

import CitySearch from '../../components/CitySearch/CitySearch';
import ChartDisplay from '../../components/ChartDisplay/ChartDisplay';

const Main = () => {
  const apiResult = useSelector((state) => state.forecast.API_RESULT);
  const apiError = useSelector((state) => state.forecast.API_ERROR);
  return (
    <View style={MainStyles.mainContainer}>
      <CitySearch />

      {apiResult && !apiError ? (
        <ScrollView>
          <ChartDisplay />
        </ScrollView>
      ) : (
        <Text style={MainStyles.mainErrorText}>{`${apiError}`}</Text>
      )}
    </View>
  );
};

export default Main;
