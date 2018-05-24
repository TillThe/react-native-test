import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';

const Logo = (props) => (
  <Image resizeMode="contain" style={styles.logo} source={require('./img/logo.png')} {...props} />
);

export default Logo;
