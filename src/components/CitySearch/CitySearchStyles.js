import { StyleSheet } from 'react-native';

const CitySearchStyles = StyleSheet.create({
  CitySearchContainer: {
    alignItems: 'center',
    width: '100%',
    // height: Dimensions.get('screen').height,
    justifyContent: 'center',
  },
  CitySearchText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 22,
  },
  CitySearchInput: {
    width: '95%',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    borderColor: '#fff',
    height: 45,
    padding: 5,
    color: 'white',
    letterSpacing: 2,
  },
  CitySearchButton: {
    width: '95%',
    height: 50,
    marginTop: 30,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 150 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CitySearchStyles;
