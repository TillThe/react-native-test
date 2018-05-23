import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { AppLoading } from 'expo';

import styles from './styles';

export default class Loader extends AppLoading {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Loading...</Text>
      </View>
    );
  }
};