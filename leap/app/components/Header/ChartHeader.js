import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ButtonWithIcon } from '../Button';

import styles from './styles';

const ChartHeader = ({ title, onBackPress = () => {}, onFavoritePress = () => {}, onDotsPress = () => {} }) => {

  return (
    <View style={styles.container}>
      <ButtonWithIcon
        icon='back'
        onPress={onBackPress}
        imageStyle={styles.image}
        containerStyle={[styles.imageContainer, styles.backImageContainer]}
      />
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText} ellipsizeMode='tail' numberOfLines={2}>{title}</Text>
      </View>
      <ButtonWithIcon
        icon='loader'
        onPress={() => {}}
        imageStyle={styles.image}
        containerStyle={[styles.imageContainer, styles.loaderImageContainer]}
      />
      <ButtonWithIcon
        icon='star'
        onPress={onFavoritePress}
        imageStyle={styles.image}
        containerStyle={styles.imageContainer}
      />
      <ButtonWithIcon
        icon='dots'
        onPress={onDotsPress}
        imageStyle={styles.image}
        containerStyle={[styles.imageContainer, styles.dotsImageContainer]}
      />
    </View>
  );
};

ChartHeader.propTypes = {
  title: PropTypes.string,
  onBackPress: PropTypes.func,
  onFavoritePress: PropTypes.func,
  onDotsPress: PropTypes.func,
};

const mapStateToProps = (state) => ({
  
});
const mapDispatchToProps = (dispatch) => ({

});

export default ChartHeader;
