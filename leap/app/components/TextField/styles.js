import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width,
  inputWidth = (screenWidth / 2) + 70;
  
export default EStyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: inputWidth,
    height: 50,
    marginBottom: 10,
    borderRadius: 20,
    backgroundColor: '$white',
  },
  image: {
    width: 15,
    marginLeft: 10
  },
  input: {
    width: inputWidth - 25,
    height: 50,
    marginLeft: 'auto',
    paddingVertical: 10,
    paddingHorizontal: 10,
    paddingRight: 25,
    fontSize: 18,
    fontFamily: '$defaultFont',
    color: '$heavyGray'
  }
});
