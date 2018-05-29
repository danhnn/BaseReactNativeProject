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
import { BaseContainer } from '@shares';

type Props = {};
class LoginPage extends BaseContainer<Props> {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Login Page!
        </Text>
        <Button title="Login" onPress={() => {
          this.props.goToHome();
        }} />
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
  }
});

const mapStateToProps = (state, ownProps) => {
  return state.loginReducer;
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { goBack } = ownProps.navigation
  return {
    goToHome: () => dispatch({ type: 'NAV_HOME' }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
