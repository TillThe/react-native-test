import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const EmptyItem = () => (
  <View style={styles.row}>
    <Text style={styles.textWhenEmpty}>Добавьте графики в избранное</Text>
  </View>
);

export default EmptyItem;