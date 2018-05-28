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

type Props = {};
class HomePage extends Component<Props> {
  componentDidMount() {
    this.props.getHomeContent();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.props.data}
        </Text>
      </View>
    );
  }
}

HomePage.navigationOptions = {
  title: 'Home Page',
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
  return state.homeReducer;
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { goBack } = ownProps.navigation
  return {
    getHomeContent: () => dispatch({type: 'SHOW_HOME_CONTENT'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
