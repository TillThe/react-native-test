import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Asset, AppLoading, Font } from 'expo';
import { appLoaded } from '../actions/index';
import { Loader } from './Loader/index';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    }, 3000);
  });
  console.log('after load Font');
};


const Main = ({app, appLoaded}) => {
  console.log('app in main: ', app);

  if (app.loaded) {
    console.log('in app loaded');
    return (
      <View style={styles.container}>
        <Text style={{ fontFamily: 'ProximaNovaBold' }}>Open upp App.jssss to starttt working on your app!</Text>
        <Text>Open upp App.jssss to starttt working on your app!</Text>
        <Text>Shake yper menu.</Text>
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