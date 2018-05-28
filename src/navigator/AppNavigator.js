import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation';
import {
  Home, Login
} from '@pages';
import {
  createReactNavigationReduxMiddleware,
  initializeListeners,
  createNavigationPropConstructor,
} from 'react-navigation-redux-helpers';

const noHeaderStyle = {
  navigationOptions: { header: null },
  cardStyle: { backgroundColor: 'white' }
}

export const AppNavigator = createStackNavigator({
  Login: { screen: Login.LoginPage },
  Home: { screen: Home.HomePage }
}
);

export const reactNavigationMiddleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);
const navigationPropConstructor = createNavigationPropConstructor("root");

class AppWithNavigationState extends React.Component {

  componentDidMount() {
    initializeListeners("root", this.props.nav);
  }

  render() {
    const navigation = navigationPropConstructor(
      this.props.dispatch,
      this.props.nav,
    );
    return <AppNavigator navigation={navigation} />;
  }

}

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);

