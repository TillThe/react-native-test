import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    height: 40,
    backgroundColor: '#fff',
    zIndex: 10
  },
  imageContainer: {
    height: '100%',
    width: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
    marginLeft: 15,
    borderWidth: 1
  },
  image: {
    width: 30
  }
});
