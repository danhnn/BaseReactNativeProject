/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import I18n from '@i18n';
import { BaseContainer, CommonAlertPopup, CommonAlertPopupNoButton, InProcessPopup, BaseText, BaseTextInput } from '@shares';

type Props = {};
class LoginPage extends BaseContainer<Props> {
  state = { username: null, password: null }
  
  render() {
    console.log(this.props.showLoading);

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Login Page!
        </Text>

        <BaseTextInput
          style={styles.inputStyle}
          placeholder='Username'
          value={this.state.username}
          onChangeText={value => this.setState({ ...this.state, username: value })}
        />
        
        <BaseTextInput
          placeholder='Password'
          style={styles.inputStyle}
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={value => this.setState({ ...this.state, password: value })}
        />

        <Button title="Login" onPress={() => {
          this.props.login(this.state.username, this.state.password);
        }} />
        <CommonAlertPopup title="Welcome to React Native Skeleton Project" isShow={false} />
        <InProcessPopup isShow={this.props.showLoading} title='Loading...' />
      </View>
    );
  }
}

LoginPage.navigationOptions = {
  title: 'Login Page',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  inputStyle: {
    paddingLeft: 10,
    width: 300,
    height: 40,
    margin: 10,
    borderColor: 'gray',
    borderWidth: 1
  }
});

const mapStateToProps = (state, ownProps) => {
  console.log(state.loginReducer);
  return state.loginReducer;
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { goBack } = ownProps.navigation
  return {
    login: (username, password) => dispatch({ type: 'LOGIN_ACTION', payload: { username, password } }),
    goToHome: () => dispatch({ type: 'NAV_HOME' }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
