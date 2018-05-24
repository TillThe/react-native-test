import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView, TouchableOpacity, Text, View, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';

import { Logo } from '../components/Logo/index';
import { TextFieldWithIcon } from '../components/TextField/index';

import { userAuthorized } from '../actions/index';

import userData from '../data/user';

const windowSize = Dimensions.get('window'),
  inputWidth = (windowSize.width / 2) + 20;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: windowSize.width,
    backgroundColor: '$primaryBlue',
  },
  image: {
    width: windowSize.width / 2 - 40,
    height: windowSize.height / 3,
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

const isUserExist = ({login, password}) => {
  // TODO: real query
  return userData.find((item) => item.login === login && item.password === password);
};

class Auth extends Component {
  static propTypes = {
    userAuthorized: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.userAuthorized = props.userAuthorized;

    this.state = {
      loginText: '',
      passwordText: ''
    };
  }

  handleButtonPress() {
    const user = isUserExist({
      login: this.state.loginText,
      password: this.state.passwordText
    });

    if (user) {
      console.log('auth ok');
      this.loginInput.clear();
      this.setState({
        loginText: ''
      });

      this.userAuthorized({
        authorized: true,
        login: user.login
      });
    }

    this.passwordInput.clear();
    this.setState({
      passwordText: ''
    });
  }

  handleLoginChange(text) {
    this.setState({
      loginText: text
    });
  }
  
  handlePasswordChange(text) {
    this.setState({
      passwordText: text
    });
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Image resizeMode='contain' style={styles.image} source={require('../../assets/img/auth-man.png')} />
        <TextFieldWithIcon customRef={input => { this.loginInput = input }} onChangeText={(text) => this.handleLoginChange(text)} isPassword={false} placeholder='username' maxLength={maxCharAmount} />
        <TextFieldWithIcon customRef={input => { this.passwordInput = input }} onChangeText={(text) => this.handlePasswordChange(text)} isPassword={true} placeholder='password' maxLength={maxCharAmount} />
        <TouchableOpacity style={styles.btn} onPress={() => this.handleButtonPress()}>
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
  userAuthorized(authorized) {
    dispatch(userAuthorized(authorized))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);