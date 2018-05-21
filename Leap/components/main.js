import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Asset, AppLoading, Font } from 'expo';
import { appLoaded } from '../actions/index';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const loadAssets = async () => {
  await Font.loadAsync({
    'ProximaNova': require('../assets/fonts/ProximaNovaRegular.ttf')
  });
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
  console.log('after load Font');
  return {};
};


const Main = ({app, appLoaded}) => {
  console.log('app in main: ', app);

  if (app.loaded) {
    console.log('in app loaded');
    return (
      <View style={styles.container}>
        <Text style={{ fontFamily: 'ProximaNova' }}>Open upp App.jssss to starttt working on your app!</Text>
        <Text>Open upp App.jssss to starttt working on your app!</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }

  console.log('in app unloaded');
  return (
    <AppLoading style={{ backgroundColor: '#000' }}
      startAsync={loadAssets}
      onFinish={() => appLoaded(true)}
      onError={console.warn}><Text>loader...</Text></AppLoading>
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