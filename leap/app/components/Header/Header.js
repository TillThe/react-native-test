import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ButtonWithIcon } from '../Button';

import styles from './styles';

const Header = ({ isChartPage = true }) => {

  return (
    <View style={styles.container}>
      {isChartPage ?
        <ButtonWithIcon
          icon='loader'
          onPress={() => {}}
          imageStyle={styles.image}
          containerStyle={styles.imageContainer}
        />
        : null
      }
      {isChartPage ?
        <ButtonWithIcon
          icon='star'
          onPress={() => {}}
          imageStyle={styles.image}
          containerStyle={styles.imageContainer}
        />
        : null
      }
      <ButtonWithIcon
        icon='dots'
        onPress={() => {}}
        imageStyle={styles.image}
        containerStyle={styles.imageContainer}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  app: state.app,
  user: state.user
});
const mapDispatchToProps = (dispatch) => ({

});

export default Header;
