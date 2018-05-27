import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native';

import styles from './styles';

const SimpleItem = ({ text, selected, onSelect, itemData, style }) => {
  console.log('text: ', text);

  const rowStyle = [styles.row];
  if (selected) {
    rowStyle.push(styles.rowSelected);
  }
  if (style) {
    rowStyle.push(style);
  }

  return (
    <TouchableHighlight onPress={() => onSelect(itemData)} style={[styles.row, style]} underlayColor='#F0F0F0'>
      <View style={rowStyle}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableHighlight>
  );
};

SimpleItem.propTypes = {
  text: PropTypes.string,
  selected: PropTypes.bool,
  onSelect: PropTypes.func,
  itemData: PropTypes.object
};

export default SimpleItem;