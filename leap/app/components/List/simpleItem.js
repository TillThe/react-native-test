import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native';

import styles from './styles';

const SimpleItem = ({ text, selected, onSelect, itemData }) => {
  console.log('text: ', text);

  const rowStyle = [styles.row];
  if (selected) {
    rowStyle.push(styles.rowSelected);
  }

  return (
    <TouchableHighlight onPress={() => onSelect(itemData)} style={styles.row}>
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