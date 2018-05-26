import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';

import SimpleItem from './simpleItem';
import Separator from './separator';
import EmptyItem from './empty.item';

import styles from './styles';

const SelectList = ({ data, onSelect }) => (
  <FlatList
    style={styles.container}
    data={data}
    keyExtractor={(item) => item.id}
    ItemSeparatorComponent={Separator}
    ListEmptyComponent={EmptyItem}
    renderItem={({item}) => (
      <SimpleItem
        itemData={item}
        text={item.name}
        selected={item.selected}
        onSelect={onSelect}
      />
    )}
  />
);

SelectList.propTypes = {
  data: PropTypes.array,
  onSelect: PropTypes.func
};

export default SelectList;