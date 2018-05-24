import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width,
  inputWidth = (screenWidth / 2) + 70;
  
export default EStyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: inputWidth,
    height: 50,
    marginBottom: 10,
    paddingLeft: 5,
    paddingRight: 30,
    borderRadius: 20,
    backgroundColor: '#d3d3d3',
  },
  image: {
    width: 15,
    marginLeft: 50
  },
  input: {
    width: inputWidth,
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 10,
    paddingLeft: 10,
    paddingRight: 25,
    fontSize: 18,
    fontFamily: '$defaultFont',
    color: '$primaryGray'
  }
});
