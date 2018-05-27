import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView, TouchableOpacity, Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';

import { Logo } from '../components/Logo';
import { ButtonWithIcon } from '../components/Button';
import { ChartList } from '../components/List';
import { Loader } from '../components/Loader';

import { getChartList, getID } from '../service/chart';
import { getConfig } from '../service/app';

import { userAuthorized, configLoad, chartsLoaded, chartLoad, chartSelect, chartFavorite, chartNew } from '../actions/index';


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

    this.userAuthorized = this.props.userAuthorized;
    this.configLoad = this.props.configLoad;
    this.chartsLoaded = this.props.chartsLoaded;
    this.chartLoad = this.props.chartLoad;
    this.chartSelect = this.props.chartSelect;
    this.chartFavorite = this.props.chartFavorite;
    this.chartNew = this.props.chartNew;

    console.log('Home: user: ', this.user, 'app: ', this.app, 'charts: ', this.charts);

    this.state = {

    };
  }

  async loadAndSetCharts() {
    const menu = await getConfig(),
      chartList = await getChartList();
      
    console.log('menu: ', menu, 'chartList: ', chartList);
    
    const charts = chartList.map((item) => {
      return {
        ...menu,
        ...item,
        selected: false,
        step: item.step ? item.step : menu.stepList.find((x) => x.default),
        startDate: item.startDate ? item.startDate : moment().add(-menu.timeList.find((x) => x.default).value, 'd').format('YYYY-MM-DD'),
        endDate: item.endDate ? item.endDate : moment().format('YYYY-MM-DD'),
        id: getID()
      };
    });

    console.log(charts);
    this.chartsLoaded(charts);
    this.configLoad({ loaded: true, config: menu });

  }
  async handleLoadEnd() {

  }
  
  handlePressCreate() {
    console.log('create');
    this.chartNew();
  }

  handlePressList() {
    console.log('list');
  }

  handleListItemSelect(item) {
    this.chartSelect({ selected: true, id: item.id });
    this.props.navigation.navigate('Chart');
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
        <Loader startAsync={this.loadAndSetCharts.bind(this)}
          onFinish={this.handleLoadEnd}
          onError={console.warn}
        />
      );
    }

    const { navigation, charts } = this.props;

    console.log(navigation, navigation.state.params, charts);

    return (
      <View style={styles.container}>
        <ButtonWithIcon text='Новый график' icon='plus' onPress={() => this.handlePressCreate()} />
        <ButtonWithIcon text='Избранные графики' icon='drop' onPress={() => this.handlePressList()} />
        <ChartList
          data={charts}
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
  },
  configLoad({loaded, config}) {
    dispatch(configLoad({loaded, config}))
  },
  chartsLoaded(charts) {
    dispatch(chartsLoaded(charts))
  },
  chartLoad({loaded, id}) {
    dispatch(chartLoad({loaded, id}))
  },
  chartSelect({selected, id}) {
    dispatch(chartSelect({selected, id}))
  },
  chartFavorite({favorite, id}) {
    dispatch(chartFavorite({favorite, id}))
  },
  chartNew() {
    dispatch(chartNew())
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
