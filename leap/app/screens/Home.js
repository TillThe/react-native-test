import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView, TouchableOpacity, Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';

import { Logo } from '../components/Logo';
import { ButtonWithIcon } from '../components/Button';
import { ChartList } from '../components/List';
import { Loader } from '../components/Loader';

import { getConfig, getChartList } from '../service/chart';


const styles = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '$screenWidth',
    paddingTop: 50,
    backgroundColor: '$white'
  }
});


class Home extends Component {
  static propTypes = {

  };

  constructor(props) {
    super(props);

    this.user = this.props.user;
    this.app = this.props.app;
    this.charts = this.props.charts;

    console.log('Home: user: ', this.user, 'app: ', this.app, 'charts: ', this.charts);

    this.state = {

    };
  }

  async getChartData() {
    const menu = await getConfig(),
      chartList = await getChartList();

    
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
    const app = this.props.app;

    console.log('configLoaded: ', app.configLoaded);
    if (!app.configLoaded) {
      return (
        <Loader startAsync={loadAssets}
          onFinish={() => appLoaded(true)}
          onError={console.warn}
        />
      );
    }

    const { navigation } = this.props;

    console.log(navigation, navigation.state.params);

    return (
      <View style={styles.container}>
        <ButtonWithIcon text='Новый график' icon='plus' onPress={() => this.handlePressCreate()} />
        <ButtonWithIcon text='Избранные графики' icon='drop' onPress={() => this.handlePressList()} />
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
  user: state.user,
  charts: state.chart
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
