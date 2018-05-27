import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, TouchableOpacity, Dimensions } from 'react-native';

import styles from './styles';

const ButtonWithIcon = (props) => {
  const text = props.text,
    onPress = props.onPress,
    icon = props.icon,
    containerStyle = props.containerStyle ? props.containerStyle : styles.container,
    imageStyle = props.imageStyle ? props.imageStyle : styles.image,
    textStyle = props.textStyle ? props.textStyle : styles.text;
  let imageUrl = require(`./img/plus.png`);

  switch (icon) {
    case 'plus':
      imageUrl = require(`./img/plus.png`);
      break;
    case 'drop':
      imageUrl = require(`./img/drop.png`);
      break;
    case 'star':
      imageUrl = require(`./img/star.png`);
      break;
    case 'star-full':
      imageUrl = require(`./img/star-full.png`);
      break;
    case 'loader':
      imageUrl = require(`./img/loader.png`);
      break;
    case 'check':
      imageUrl = require(`./img/check.png`);
      break;
    case 'dots':
      imageUrl = require(`./img/dots.png`);
      break;
    case 'home':
      imageUrl = require(`./img/home.png`);
      break;
    case 'back':
      imageUrl = require(`./img/left-arrow.png`);
      break;
    case 'date':
      imageUrl = require('./img/calendar.png');
      break;
    case 'clock':
      imageUrl = require('./img/clock.png');
      break;
  }

  return (
    <TouchableOpacity style={containerStyle} onPress={onPress}>
      {text ? <Text style={textStyle}>{text}</Text> : null}
      <Image style={imageStyle} resizeMode='contain' source={imageUrl} />
    </TouchableOpacity>
  );
};

ButtonWithIcon.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  onPress: PropTypes.func,
  textStyle: PropTypes.number
};

export default ButtonWithIcon;
