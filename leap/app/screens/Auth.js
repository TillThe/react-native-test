import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView, TouchableOpacity, Text, View, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

import { Logo } from '../components/Logo/index';
import { TextFieldWithIcon } from '../components/TextField/index';

const screenWidth = Dimensions.get('window').width,
  inputWidth = (screenWidth / 2) + 20;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: screenWidth,
    backgroundColor: '$primaryBlue',
  },
  image: {
    height: 100,
    marginBottom: 10
  },
  input: {

  },
  btn: {
    width: inputWidth,
    height: 52,
    marginTop: 20,
    paddingVertical: 3,
    borderWidth: 4,
    borderRadius: 20,
    borderColor: '$white',
    backgroundColor: '$primaryBlue',
  },
  btnText: {
    color: '$white',
    fontSize: 26,
    fontWeight: 'bold',
    fontFamily: '$defaultFont',
    textAlign: 'center'
  }
});

const maxCharAmount = 32;

class Auth extends Component {
  static propTypes = {

  };

  constructor(props) {
    super(props);

    this.state = {
      loginText: '',
      passwordText: ''
    };
  }

  handleButtonPress() {
    
  }

  handleLoginChange(text) {
    this.setState({
      loginText: text
    });
    console.log(this.state.loginText);
  }
  
  handlePasswordChange(text) {
    this.setState({
      passwordText: text
    });
    console.log(this.state.loginText, this.state.passwordText);
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Image resizeMode='contain' style={styles.image} source={require('../../assets/img/auth-man.png')} />
        <TextFieldWithIcon onChangeText={(text) => this.handleLoginChange(text)} isPassword={false} placeholder='username' maxLength={maxCharAmount} />
        <TextFieldWithIcon onChangeText={(text) => this.handlePasswordChange(text)} isPassword={true} placeholder='password' maxLength={maxCharAmount} />
        <TouchableOpacity style={styles.btn} onPress={this.handleButtonPress}>
          <Text style={styles.btnText}>LOGIN</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }

};

const mapStateToProps = (state) => ({
  app: state.app,
  user: state.user
});
const mapDispatchToProps = (dispatch) => ({
  // appLoaded(loaded) {
  //   dispatch(appLoaded(loaded))
  // }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);