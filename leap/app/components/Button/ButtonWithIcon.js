import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, TouchableOpacity, Dimensions } from 'react-native';

import styles from './styles';

const ButtonWithIcon = (props) => {
  const text = props.text,
    onPress = props.onPress,
    icon = props.icon;
  let imageUrl = icon === 'plus' ? require(`./img/plus.png`) : require('./img/drop.png');

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
      <Image style={styles.image} resizeMode='contain' source={imageUrl} />
    </TouchableOpacity>
  );
};

ButtonWithIcon.propTypes = {
  text: PropTypes.string,
  src: PropTypes.string,
  onPress: PropTypes.func
};

export default ButtonWithIcon;
