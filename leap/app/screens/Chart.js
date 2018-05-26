import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView, TouchableOpacity, Text, View, Image, Dimensions, Button } from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';
import moment from 'moment';

import { ButtonWithIcon } from '../components/Button';
import { Header } from '../components/Header';
import DateModal from '../components/Modal/DateModal';
import StepModal from '../components/Modal/StepModal';

import { userAuthorized } from '../actions/index';

import menu from '../data/menu';

const styles = EStyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '$screenWidth',
    marginTop: 30,
    backgroundColor: '$primaryBlue',
  },
  dateStepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '$screenWidth',
    height: 50,
    marginTop: 60
  },
  dateContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    width: '50%',
    height: '100%',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#d3d3d3',
    borderWidth: 1
  },
  dateImage: {
    width: 20,
    marginRight: 10
  },
  dateText: {
    marginLeft: 'auto',
    fontSize: 14,
    fontFamily: '$defaultFont'
  },
  stepContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    width: '50%',
    height: '100%',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#d3d3d3',
    borderWidth: 1
  },
  stepImage: {
    width: 20,
    marginRight: 5
  },
  stepText: {
    marginLeft: 'auto',
    fontSize: 14,
    fontFamily: '$defaultFont'
  },
});


class Chart extends Component {
  static propTypes = {

  };

  constructor(props) {
    super(props);

    this.chart = props.chart;
    // Надо прокинуть id chart сюда через навигатор, либо же сам объект. проинициализировать пропсы
    // с помощью пропсов проинициализировать страницу. Доделать ее заодно.
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

  handleDateChoose(date, type) {
    console.log('date: ', date.toDate(), 'type: ', type);
    if (type === 'END_DATE') {
      this.setState({
        selectedEndDate: date,
      });
    } else {
      this.setState({
        selectedStartDate: date,
        selectedEndDate: null,
      });
    }
  }

  handleStepChoose() {
    console.log('test');
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#d3d3d3" barStyle="light-content" />
        <Header />
        <View style={styles.dateStepContainer}>
          <ButtonWithIcon
            icon='date'
            text='Выберите дату'
            onPress={this.handleDateOpen.bind(this)}
            containerStyle={styles.dateContainer}
            imageStyle={styles.dateImage}
            textStyle={styles.dateText}
          />
          <ButtonWithIcon
            icon='clock'
            text='Выберите шаг'
            onPress={this.handleStepOpen.bind(this)}
            containerStyle={styles.stepContainer}
            imageStyle={styles.stepImage}
            textStyle={styles.stepText}
          />
        </View>
        <DateModal ref={'modalDate'}
          onDateChange={this.handleDateChoose.bind(this)}
          maxDate={moment([2018, 4, 15])}/>
        <StepModal ref={'modalStep'}
          onStepSelect={this.handleStepChoose.bind(this)}
          swipeToClose={false}/>
      </View>
    );
  }

};

const mapStateToProps = (state) => ({
  charts: state.chart
});
const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chart);