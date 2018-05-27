import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView, TouchableOpacity, Text, View, Image, Dimensions, Button } from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';
import moment from 'moment';

import { ButtonWithIcon } from '../components/Button';
import { ChartHeader, HomeHeader } from '../components/Header';
import DateModal from '../components/Modal/DateModal';
import StepModal from '../components/Modal/StepModal';

import { userAuthorized, selectPeriod, selectStep } from '../actions/index';

import menu from '../data/menu';

const styles = EStyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '$screenWidth',
    // backgroundColor: '$primaryBlue',
    backgroundColor: '#dfeeff',
  },
  dateStepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '$screenWidth',
    height: 50,
    backgroundColor: '#80abde'
  },
  dateContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '$screenWidth' / 3 * 2,
    height: '100%',
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  dateImage: {
    width: 20,
    marginRight: 10
  },
  dateText: {
    marginLeft: 'auto',
    color: '$white',
    fontSize: 13,
    fontFamily: '$defaultFontBold'
  },
  stepContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    width: '$screenWidth' / 3,
    height: '100%',
    marginLeft: 45,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  stepImage: {
    width: 20,
    marginRight: 5
  },
  stepText: {
    marginLeft: 'auto',
    color: '$white',
    fontSize: 13,
    fontFamily: '$defaultFontBold'
  },
});

const stepList = [
  {
    title: '15 минут',
    value: 15,
    maxPeriod: '7 days',
    default: false
  },
  {
    title: '1 час',
    value: 60,
    maxPeriod: '30 days',
    default: true
  },
  {
    title: '24 часа',
    value: 1440,
    maxPeriod: '365 days',
    default: false
  },
  {
    title: '1 неделя',
    value: 10080,
    maxPeriod: '1460 days',
    default: false
  },
];
const timeList = [
  {
    title: 'Сегодня',
    value: 0,
    default: false
  },
  {
    title: 'Вчера',
    value: 1,
    default: true
  },
  {
    title: 'Последние 2 дня',
    value: 2,
    default: false
  },
  {
    title: 'Последние 3 дня',
    value: 3,
    default: false
  },
  {
    title: 'Последние 7 дней',
    value: 7,
    default: false
  },
  {
    title: 'Последние 30 дней',
    value: 30,
    default: false
  },
  {
    title: 'Последние 90 дней',
    value: 90,
    default: false
  }
];

class Chart extends Component {
  static propTypes = {

  };

  constructor(props) {
    super(props);

    this.selectPeriod = props.selectPeriod;
    this.selectStep = props.selectStep;

    this.chart = props.charts.find((item) => item.selected);

    this.state = {

    };
  }

  handleDateOpen() {
    console.log('open date: ', this.refs.modalDate);
    this.refs.modalDate.openModal();
  }

  handleStepOpen() {
    console.log('open step: ', this.refs.modalStep);
    this.refs.modalStep.openModal();
  }

  handleDateChoose({ startDate, endDate }) {
    console.log(startDate, endDate);

    this.refs.modalDate.closeModal();

    this.selectPeriod({
      startDate,
      endDate,
      id: this.chart.id
    });
  }

  handleStepChoose(step) {
    console.log('step: ', step);

    this.refs.modalStep.closeModal();

    this.selectStep({
      step,
      id: this.chart.id
    });
  }

  render() {
    // const chart = this.props.charts.find((item) => item.selected);
    const chart = {
      step: menu.stepList.find((x) => x.default),
      startDate: moment().add(-menu.timeList.find((x) => x.default).value, 'd').format('YYYY-MM-DD'),
      endDate: moment().format('YYYY-MM-DD'),
      timeRange: {
        minDate: '2018-04-10'
      }
    };
    const startDate = chart.startDate,
      endDate = chart.endDate,
      minDate = chart.timeRange.minDate ? moment(chart.timeRange.minDate) : null,
      maxDate = chart.timeRange.maxDate ? moment(chart.timeRange.maxDate) : moment();
    
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#d3d3d3" barStyle="light-content" />
        {/* <ChartHeader 
          title='Просмотры по Котовасинску'
        /> */}
        <HomeHeader />
        <View style={styles.dateStepContainer}>
          <ButtonWithIcon
            icon='date'
            text={`${chart.startDate} – ${chart.endDate}`}
            onPress={this.handleDateOpen.bind(this)}
            containerStyle={styles.dateContainer}
            imageStyle={styles.dateImage}
            textStyle={styles.dateText}
          />
          <ButtonWithIcon
            icon='clock'
            text={`${chart.step.title}`}
            onPress={this.handleStepOpen.bind(this)}
            containerStyle={styles.stepContainer}
            imageStyle={styles.stepImage}
            textStyle={styles.stepText}
          />
        </View>
        <DateModal ref={'modalDate'}
          data={timeList}
          onDateChange={this.handleDateChoose.bind(this)}
          startDate={moment(startDate)}
          endDate={moment(endDate)}
          minDate={minDate}
          maxDate={maxDate}
        />
        <StepModal ref={'modalStep'}
          data={stepList}
          onStepSelect={this.handleStepChoose.bind(this)}
          swipeToClose={false}
        />
      </View>
    );
  }

};

const mapStateToProps = (state) => ({
  charts: state.chart
});
const mapDispatchToProps = (dispatch) => ({
  selectPeriod({ startDate, endDate, id }) {
    dispatch(selectPeriod({ startDate, endDate, id }))
  },
  selectStep({ step, id }) {
    dispatch(selectStep({ step, id }))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chart);