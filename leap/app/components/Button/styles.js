import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

export default EStyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '$defaultWidth',
    height: 50,
    marginTop: 10,
    backgroundColor: '$primaryBlue',
    borderRadius: '$defaultRadius'
  },
  text: {
    marginLeft: 15,
    color: '$white',
    fontSize: 24,
    fontFamily: '$defaultFontHeavy'
  },
  image: {
    height: 25,
    marginRight: 15
  }
});
