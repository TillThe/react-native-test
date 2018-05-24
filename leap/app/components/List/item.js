import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';

import styles from './styles';

const loaderImgStyle = [styles.icon, styles.iconLoader],
  favoriteImgStyle = [styles.icon, styles.iconFavorite];

const ListItem = ({ text, loaded, favorite, onSelect, onAdd }) => {
  const loadedImg = loaded ? require('./img/check.png') : require('./img/loader.png'),
    favoriteImg = favorite ? require('./img/star-full.png') : require('./img/star.png');

  console.log('text: ', text);
  return (
    <TouchableHighlight onPress={onSelect} style={styles.row}>
      <View>
        <Image style={loaderImgStyle} source={loadedImg} resizeMode='contain'/>
        <Text style={styles.text}>{text}</Text>
        <TouchableWithoutFeedback style={styles.imageContainer} onPress={onAdd}>
          <Image style={favoriteImgStyle} source={favoriteImg} resizeMode='contain'/>
        </TouchableWithoutFeedback>
      </View>
    </TouchableHighlight>
  );
};

ListItem.propTypes = {
  text: PropTypes.string,
  loaded: PropTypes.bool,
  favorite: PropTypes.bool,
  onSelect: PropTypes.func,
  onAdd: PropTypes.func
};

export default ListItem;