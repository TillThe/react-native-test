import { StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Auth from '../screens/Auth';
import Home from '../screens/Home';
import Chart from '../screens/Chart';
// import Options from '../screens/Options';

const HomeStack = createStackNavigator(
  {
    Auth: {
      screen: Auth,
      navigationOptions: {
        header: () => null
      }
    },
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null
      }
    },
    Chart: {
      screen: Chart,
      navigationOptions: {
        header: () => null
      }
    },
  },
  {
    headerMode: 'screen',
  },
);

export default HomeStack;
