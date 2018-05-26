import React from 'react';
import { View, Button, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';

import Modal from 'react-native-modalbox';
import CalendarPicker from 'react-native-calendar-picker';

import styles from './styles';

class StepModal extends Modal {
  static propTypes = {
    onStepSelect: PropTypes.func,
    onClose: PropTypes.func,
    stepList: PropTypes.array
  };

  constructor(props) {
    super(props);

    const {
      onStepSelect = () => {},
      onClose = () => {},
      stepList = []
    } = props;

    this.stepList = stepList;

    this.onStepSelect = onStepSelect;
    this.onClose = onClose;

    this.modal = React.createRef();
  }

  openModal() {
    this.modal.current.open();
  }

  closeModal() {
    this.modal.current.close();
  }

  render() {
    const BContent = <Button onPress={() => this.onClose()}
      style={[styles.btn, styles.btnModal]} title='Close'/>;

    return (
      <Modal
        isOpen={false}
        onClosed={() => this.onClose()}
        style={[styles.modal, styles.modalStep]}
        position={"center"}
        swipeToClose={false}
        backdropContent={BContent}
        ref={this.modal}
        {...this.props}>
        <Text style={styles.text}>Step modal</Text>
      </Modal>
    );
  }
};

export default StepModal;