import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet, Dimensions } from 'react-native';

export default EStyleSheet.create({
  container: {
    width: '$defaultWidth',
    height: 20,
    marginTop: 5,
    marginBottom: 10,
    borderRadius: '$defaultRadius',
    backgroundColor: '$lightGray',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: 45,
    paddingHorizontal: 5,
  },
  text: {
    width: '$defaultWidth' - 50,
    marginLeft: 10,
    color: '$primaryBlue',
    fontSize: 14,
    fontFamily: '$defaultFont'
  },
  textWhenEmpty: {
    width: '$defaultWidth' - 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    color: '$heavyGray',
    fontSize: 18,
    fontFamily: '$defaultFontBold'
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '$border',
  },
  iconContainer: {
    width: 15,
    height: '100%',
    marginLeft: 'auto',
    backgroundColor: 'red',
    borderWidth: 2,
    borderColor: 'blue'
  },
  icon: {
    width: 15,
  },
  iconLoader: {
    width: 15,
  },
  iconFavorite: {
    width: 18,
    marginLeft: 'auto',
  }
});
