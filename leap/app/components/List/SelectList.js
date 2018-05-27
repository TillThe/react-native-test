import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';

import SimpleItem from './simpleItem';
import Separator from './separator';
import EmptyItem from './empty.item';

import styles from './styles';

const SelectList = ({ data, onSelect, itemStyle }) => (
  <FlatList
    style={styles.container}
    data={data}
    keyExtractor={(item) => item.id || item.title}
    ItemSeparatorComponent={Separator}
    renderItem={({item}) => (
      <SimpleItem
        itemData={item}
        text={item.name || item.title}
        selected={item.selected || item.default}
        onSelect={onSelect}
        style={itemStyle ? itemStyle : null}
      />
    )}
  />
);

SelectList.propTypes = {
  data: PropTypes.array,
  onSelect: PropTypes.func
};

export default SelectList;