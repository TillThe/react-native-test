import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import { View, Text, AppState, AsyncStorage } from 'react-native';
import reducers from './reducers';
import { appLoaded } from './actions/index';
import Main from './components/main';
// import logger from 'redux-logger';


// const middleware = applyMiddleware(logger());

const initialState = {
  app: {
    loaded: false
  }
};
const store = createStore(reducers, initialState);

// store.state.app.propTypes = {
// 	loaded: PropTypes.bool
// };

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isStoreLoaded: false,
      store: store
    };
  }

  async componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange.bind(this));

    try {
      const restoredStore = JSON.parse(await AsyncStorage.getItem('completeStore'));

      if (typeof restoredStore === 'object') {
        this.setState({ store: createStore(reducers, restoredStore) });
      }
    } catch (e) {
      console.warn('Local store can not be loaded');
      await AsyncStorage.setItem('completeStore', JSON.stringify(this.store));
    } finally {
      this.setState({ isStoreLoaded: true })
    }
  }
  
  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange.bind(this));
  }

  _handleAppStateChange(currentAppState) {
    const storingValue = JSON.stringify(this.state.store.getState())

    AsyncStorage.setItem('completeStore', storingValue);
  }

  render() {
    if (!this.state.isStoreLoaded) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Loading...</Text>
        </View>
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

