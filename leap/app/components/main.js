import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { Asset, AppLoading, Font } from 'expo';

import { appLoaded } from '../actions/index';
import { Loader } from './Loader/index';

import Auth from '../screens/Auth';
import Home from '../screens/Home';
import Chart from '../screens/Chart';


const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$primaryBlue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const loadAssets = async () => {
  try {
    await Font.loadAsync({
      'ProximaNova': require('../../assets/fonts/ProximaNovaRegular.ttf'),
      'ProximaNovaBlack': require('../../assets/fonts/ProximaNovaBlack.ttf'),
      'ProximaNovaBold': require('../../assets/fonts/ProximaNovaBold.ttf')
    });
  } catch (e) {
    console.warn('Error while loading fonts: ', e);
  } 
  
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 300);
  });
  console.log('after load Font');
};


const Main = ({ app, appLoaded }) => {
  console.log('app in main: ', app);

  if (app.loaded) {
    console.log('in app loaded');
    return (
      <View style={styles.container}>
        <Chart />
      </View>
    );
  }

  console.log('in app unloaded');
  return (
    <Loader startAsync={loadAssets}
      onFinish={() => appLoaded(true)}
      onError={console.warn}
      >
    </Loader>
  );
};

const mapStateToProps = (state) => ({
  app: state.app
});
const mapDispatchToProps = (dispatch) => ({
  appLoaded(loaded) {
    dispatch(appLoaded(loaded))
  }
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Main);