import React from 'react';
import { View, Button } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';

import Modal from 'react-native-modalbox';
import CalendarPicker from 'react-native-calendar-picker';

import { SelectList } from '../List';

import styles from './styles';

class DateModal extends Modal {
  static propTypes = {
    onDateChange: PropTypes.func,
    onClose: PropTypes.func,
    minDate: PropTypes.object,
    maxDate: PropTypes.object,
    startDate: PropTypes.object,
    endDate: PropTypes.object
  };

  constructor(props) {
    super(props);

    const { 
      onDateChange = () => {}, 
      onClose = () => {}, 
      minDate, 
      maxDate, 
      startDate, 
      endDate 
    } = props;

    this.minDate = minDate ? minDate.toString() : '';
    this.maxDate = maxDate ? maxDate.toString() : '';
    this.startDate = startDate ? startDate.toString() : '';
    this.endDate = endDate ? endDate.toString() : '';

    this.onDateChange = onDateChange;
    this.onClose = onClose;

    this.modal = React.createRef();
  }

  openModal() {
    this.modal.current.open();
  }

  closeModal() {
    this.modal.current.close();
  }

  handleDateChange(date, type) {
    console.log('date: ', date, 'type: ', type);

  }

  render() {
    const BContent = <Button onPress={() => this.onClose()}
      style={[styles.btn, styles.btnModal]} title='Close'/>;

    return (
      <Modal
        isOpen={true}
        onClosed={() => this.onClose()}
        style={[styles.modal, styles.modalDate]}
        position={"center"}
        swipeToClose={false}
        backdropContent={BContent}
        ref={this.modal}
        {...this.props}>
          <View style={styles.listContainer}>
            <SelectList
              data={[]}
              onSelect={this.handleDateChange.bind(this)}  
            />
          </View>
          <CalendarPicker
            startFromMonday={true}
            allowRangeSelection={true}
            minDate={this.minDate}
            maxDate={this.maxDate}
            selectedStartDate={this.startDate}
            selectedEndDate={this.endDate}
            weekdays={['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Суб', 'Вск']}
            months={['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']}
            previousTitle='Прошлый'
            nextTitle='Следующий'
            todayBackgroundColor="#67b6f1"
            selectedDayColor="#45678f"
            selectedDayTextColor="#ffffff"
            scaleFactor={375}
            textStyle={{
              fontFamily: 'ProximaNova',
              color: '#424242',
            }}
            onDateChange={this.handleDateChange.bind(this)}
          />
      </Modal>
    );
  }
};

export default DateModal;