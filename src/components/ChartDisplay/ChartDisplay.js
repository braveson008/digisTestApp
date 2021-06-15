import React from 'react';

import { View, Dimensions } from 'react-native';

import { useSelector } from 'react-redux';
import { BarChart } from 'react-native-chart-kit';
import chartCNF from './chartConfig';

const ChartDisplay = () => {
  const apiResult = useSelector((state) => state.forecast.API_RESULT);

  const mainInfo = {
    labels: Object.keys(apiResult.main).slice(
      0,
      Object.keys(apiResult.main).length / 2,
    ),
    datasets: [
      {
        data: Object.values(apiResult.main).slice(
          0,
          Object.keys(apiResult.main).length / 2,
        ),
      },
    ],
  };

  const secondaryInfo = {
    labels: Object.keys(apiResult.main).slice(
      Object.keys(apiResult.main).length / 2,
      Object.keys(apiResult.main).length,
    ),
    datasets: [
      {
        data: Object.values(apiResult.main).slice(
          Object.keys(apiResult.main).length / 2,
          Object.keys(apiResult.main).length,
        ),
      },
    ],
  };

  return (
    <View>
      <BarChart
        data={mainInfo}
        width={Dimensions.get('window').width - 16}
        height={350}
        segments={10}
        chartConfig={chartCNF}
        style={{
          marginVertical: 8,
          borderRadius: 10,
        }}
      />
      <BarChart
        data={secondaryInfo}
        width={Dimensions.get('window').width - 16}
        height={350}
        segments={10}
        chartConfig={chartCNF}
        style={{
          marginVertical: 8,
          borderRadius: 10,
        }}
      />
    </View>
  );
};

export default ChartDisplay;
