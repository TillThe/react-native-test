import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, TextInput } from 'react-native';

import styles from './styles';

const TextFieldWithIcon = (props) => {
  const isPassword = props.isPassword,
    imageUrl = isPassword ? require('./img/lock.png') : require('./img/user.png'),
    secureText = isPassword ? true : false,
    style = props.style,
    onPress = props.onPress;

  return (
    <View style={styles.container}>
      <Image style={styles.image} resizeMode='contain' source={imageUrl} />
      <TextInput style={styles.input} onPress={onPress} secureTextEntry={secureText} {...props} underlineColorAndroid="transparent" />
    </View>
  );
};

TextFieldWithIcon.propTypes = {
  isPassword: PropTypes.bool
};

export default TextFieldWithIcon;