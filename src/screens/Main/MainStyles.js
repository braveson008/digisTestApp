import { StyleSheet, Dimensions } from 'react-native';

const MainStyles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: Dimensions.get('screen').height,
    paddingBottom: 10,
    justifyContent: 'center',
  },
  mainErrorText: {
    color: '#fff',
    marginTop: 20,
    textAlign: 'center',
    fontSize: 15,
    textTransform: 'capitalize',
  },
});

export default MainStyles;
