import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default EStyleSheet.create({
  container: {
    width: '$defaultWidth',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '$defaultWidth',
    height: 20,
    paddingHorizontal: 20,
    backgroundColor: '$lightGray',
  },
  text: {
    color: '#000',
    fontSize: 16,
  },
  separator: {
    flex: 1,
    marginLeft: 20,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '$border',
  },
  imageContainer: {
    width: '$defaultWidth',
    height: 20,
    marginLeft: 'auto',
    backgroundColor: 'red'
  },
  icon: {
    width: 10,
  },
  iconLoader: {
    
  },
  iconFavorite: {

  }
});
