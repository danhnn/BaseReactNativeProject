
import { AppNavigator } from './AppNavigator';
import { NavigationActions } from "react-navigation";

let initNavState = AppNavigator.router.getStateForAction(
  NavigationActions.init()
);

export default (state = initNavState, action) => {
  let nextState;
  switch (action.type) {

    case 'NAV_LOGIN':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state
      );
      break;

    case 'NAV_HOME':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Home' }),
        state
      );
      break;

    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};