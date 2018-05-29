import React, {PureComponent} from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { BackHandler } from "react-native";
import { Platform } from "react-native";

export default class BaseContainer extends PureComponent {

  componentDidMount() {
    const { navigation } = this.props;
    if (navigation != undefined && Platform.OS == "android") {
      BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    }
  }

  componentWillUnmount() {
    if (Platform.OS == "android") {
      BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    }
  }

  onBackPress = () => {
    const { navigation } = this.props;
    if (navigation == undefined) {
      return true;
    }
    // In case we are root ( home ) we will exit app otherwise just go back from the stack navigator
    //const navState = this.getNavState();
      navigation.goBack();
    return true;
  };

}
