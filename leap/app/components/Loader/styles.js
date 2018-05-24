import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const imageWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$primaryBlue'
  },
  logo: {
    width: imageWidth
  }
});
