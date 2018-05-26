import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { View, Text, AppState, AsyncStorage, Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { SecureStore } from 'expo';

import PropTypes from 'prop-types';

import Main from './components/main';
import { Loader } from './components/Loader/index';

import createStore from './config/store';
import { appLoaded } from './actions/index';

const windowSize = Dimensions.get('window');

EStyleSheet.build({
  $primaryBlue: '#45678f',
  $lightBlue: '#b0c8e4',
  $primaryOrange: '#D57A66',
  $primaryGreen: '#00BD9D',
  $primaryPurple: '#9E768F',
  $primaryGray: '#eef1f2',
  $lightGray: '#F0F0F0',
  $heavyGray: '#8a8a8a',
  $white: '#ffffff',

  $defaultFont: 'ProximaNova',
  $defaultFontBold: 'ProximaNovaBold',
  $defaultFontHeavy: 'ProximaNovaBlack',

  $border: '#E2E2E2',
  $inputText: '#797979',
  $darkText: '#343434',

  $screenWidth: windowSize.width,
  $defaultWidth: windowSize.width - 20,
  $screenHeight: windowSize.height,
  $defaultRadius: 5

});

const store = createStore({});

class App extends Component {
  static propTypes = {
    isStoreLoaded: PropTypes.bool,
    store: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = {
      isStoreLoaded: false,
      store: store
    };
  }

  async componentDidMount() {
    try {
      // let [appStore, userStore] = await Promise.all([
      //   AsyncStorage.getItem('appStore'),
      //   AsyncStorage.getItem('userStore')
      // ]);
      let [appStore, userStore] = await Promise.all([
        SecureStore.getItemAsync('appStore'),
        SecureStore.getItemAsync('userStore')
      ]);
      
      appStore = JSON.parse(appStore);
      userStore = JSON.parse(userStore);
      console.log('stores: ', appStore, userStore);

      if (typeof appStore === 'object' && typeof userStore === 'object') {
        const st = createStore({ userStore });
        console.log(st.getState());

        this.setState({ store: st });
      }
    } catch (e) {
      console.warn('Local store can not be loaded');
      this.handleAppStateChange();
    } finally {
      AppState.addEventListener('change', this.handleAppStateChange.bind(this));
      this.setState({ isStoreLoaded: true })
    }
  }
  
  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange.bind(this));
  }

  async handleAppStateChange(currentAppState) {
    const state = this.state.store.getState();

    console.log('AppStateChange: ', AppState.currentState, state);
    try {
      // AsyncStorage.setItem('appStore', JSON.stringify(state.app));
      // AsyncStorage.setItem('userStore', JSON.stringify(state.user));
      SecureStore.setItemAsync('appStore', JSON.stringify(state.app));
      SecureStore.setItemAsync('userStore', JSON.stringify(state.user));
    } catch (e) {
      console.warn('Error while setting store', e);
    }
  }

  render() {
    if (!this.state.isStoreLoaded) {
      return (
        <Loader />
      );
    }

    // console.log(this.state.store);
    return (
      <Provider store={this.state.store}>
        <Main appLoaded={appLoaded}></Main>
      </Provider>
    );
  }
}

export default App;

