import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation';
import {
  Home,Login
} from '@pages';

const noHeaderStyle = {
  navigationOptions: { header: null },
  cardStyle: { backgroundColor: 'white' }
}

const AppNavigator = createStackNavigator({
  Home: { screen: Home.HomePage },
  Login: { screen: Login.LoginPage }
}, noHeaderStyle
);

const addListener = createReduxBoundAddListener("root");

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={{
    dispatch: dispatch,
    state: nav,
    addListener
 }} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);

