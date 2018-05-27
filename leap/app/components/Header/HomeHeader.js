import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ButtonWithIcon } from '../Button';
import { Logo } from '../Logo';

import styles from './styles';

const HomeHeader = ({ onHomePress = () => {}, onDotsPress = () => {} }) => {

  return (
    <View style={[styles.container, styles.homeContainer]}>
      <ButtonWithIcon
        icon='home'
        onPress={onHomePress}
        imageStyle={styles.image}
        containerStyle={[styles.imageContainer, styles.homeImageContainer]}
      />
      <View sytle={styles.logoContainer}>
        <Logo style={styles.logo}/>
      </View>
      <ButtonWithIcon
        icon='dots'
        onPress={onDotsPress}
        imageStyle={styles.image}
        containerStyle={[styles.imageContainer, styles.dotsImageContainer]}
      />
      <View style={{ position: 'fixed', right: 0, top: 40, width: 100, height: 180, borderWidth: 1, borderColor: 'red', backgroundColor: 'blue', zIndex: 100 }}/>
    </View>
  );
};

HomeHeader.propTypes = {
  onHomePress: PropTypes.func,
  onDotsPress: PropTypes.func,
};

const mapStateToProps = (state) => ({

});
const mapDispatchToProps = (dispatch) => ({

});

export default HomeHeader;
