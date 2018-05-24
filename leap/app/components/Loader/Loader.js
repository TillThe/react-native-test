import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { AppLoading } from 'expo';

import styles from './styles';

import { Logo } from '../Logo/index';

export default class Loader extends AppLoading {
  render() {
    return (
      <View style={styles.container}>
        <Logo style={styles.logo} />
      </View>
    );
  }
};