import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';

import styles from './styles';

const iconLoaderStyles = { ...styles.icon, ...styles.iconLoader },
  favoriteImgStyle = [styles.icon, styles.iconFavorite];

const ListItem = ({ text, loaded, favorite, onSelect, onAdd, itemData }) => {
  const loadedImg = loaded ? require('./img/check.png') : require('./img/loader.png'),
    favoriteImg = favorite ? require('./img/star-full.png') : require('./img/star.png');

  console.log('text: ', text);
  return (
    <TouchableHighlight onPress={() => onSelect(itemData)} style={styles.row}>
      <View style={styles.row}>
        <Image style={styles.icon} style={styles.iconLoader} source={loadedImg} resizeMode='contain'/>
        <Text style={styles.text}>{text}</Text>
        <TouchableWithoutFeedback style={styles.iconContainer} onPress={() => onAdd(itemData)}>
          <Image style={styles.icon} style={styles.iconFavorite} source={favoriteImg} resizeMode='contain'/>
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
  onAdd: PropTypes.func,
  itemData: PropTypes.object
};

export default ListItem;