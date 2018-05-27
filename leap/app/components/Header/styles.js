import EStyleSheet from 'react-native-extended-stylesheet';
import { StatusBar } from 'react-native';

export default EStyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '$screenWidth',
    height: 40 + StatusBar.currentHeight,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '$primaryBlue',
    zIndex: 10
  },
  imageContainer: {
    height: 40,
    width: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
    backgroundColor: '$primaryBlue'
  },
  image: {
    width: 20
  },
  backImageContainer: {
    width: 35
  },
  loaderImageContainer: {
    marginLeft: 'auto'
  },
  dotsImageContainer: {
    marginRight: 0,
    marginLeft: 16
  },
  headerTextContainer: {
    flex: 0,
    justifyContent: 'center',
    width: '$screenWidth' - 240,
    height: 40,
    marginRight: 5,
    overflow: 'hidden'
  },
  headerText: {
    color: '$white',
    fontSize: 13,
    fontFamily: '$defaultFontBold',
    zIndex: -1
  },

  homeContainer: {
    justifyContent: 'space-between',
  },
  homeImageContainer: {
    justifyContent: 'flex-end',
    marginRight: 30
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 95,
    height: 30
  },
  logo: {
    width: 95,
    height: 30
  }
});
