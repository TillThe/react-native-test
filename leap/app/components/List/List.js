import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';

import ListItem from './item';
import Separator from './separator';
import EmptyItem from './empty.item';

import styles from './styles';

const ChartList = ({ data, onSelect, onAdd }) => (
  <FlatList
    data={data}
    keyExtractor={(item) => item.id}
    itemSeparatorComponent={Separator}
    ListEmptyComponent={EmptyItem}
    renderItem={({item}) => (
      <ListItem
        text={item.name}
        loaded={item.loaded}
        favorite={item.favorite}
        onSelect={onSelect}
        onAdd={onAdd}
      />
    )}
  />
);

ChartList.propTypes = {
  data: PropTypes.array,
  onSelect: PropTypes.func,
  onAdd: PropTypes.func
};

export default ChartList;