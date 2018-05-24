import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView, TouchableOpacity, Text, View, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';

import { Logo } from '../components/Logo';
import { ButtonWithIcon } from '../components/Button';
import { ChartList } from '../components/List';

import chartData from '../data/favorite.chart.list';

const windowSize = Dimensions.get('window');

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: windowSize.width,
    marginTop: 30,
    backgroundColor: '$white'
  }
});


class Home extends Component {
  static propTypes = {

  };

  constructor(props) {
    super(props);


    this.state = {

    };
  }
  
  handlePressCreate() {
    console.log('create');
  }

  handlePressList() {
    console.log('list');
  }

  handleListItemSelect(item) {
    console.log('item selected, item: ', item);
  }

  handleListItemFavorite(item) {
    console.log('item favorites, item: ', item);
  }

  render() {

    return (
      <View style={styles.container}>
        <ButtonWithIcon text='Новый график' icon='plus' onPress={() => this.handlePressCreate()}/>
        <ButtonWithIcon text='Избранные графики' icon='drop' onPress={() => this.handlePressList()}/>
        <ChartList
          data={chartData}
          onSelect={(item) => this.handleListItemSelect(item)}
          onAdd={(item) => this.handleListItemFavorite(item)}
        />
      </View>
    );
  };
};

const mapStateToProps = (state) => ({
  app: state.app,
  user: state.user
});
const mapDispatchToProps = (dispatch) => ({
  userAuthorized(authorized) {
    dispatch(userAuthorized(authorized))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
