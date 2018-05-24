/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Store from "@middleware";
import { AppWithNavigationState } from '@navigator';

import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Store>
        <AppWithNavigationState />
      </Store>
    );
  }
}
