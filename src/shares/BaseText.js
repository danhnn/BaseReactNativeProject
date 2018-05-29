import React, { PureComponent } from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

export default class BaseText extends PureComponent {
  render() {
    return (
      <Text {...this.props} style={[styles.textStyle, this.props.style]} ref='container' >
        {this.props.children}
      </Text>
    )
  }

  setNativeProps(nativeProps) {
    this.refs.container.setNativeProps(nativeProps);
  }
}
  
const styles = StyleSheet.create({
  textStyle: {
    // fontFamily: Platform.select({
    //   ios: 'Zawgyi-One',
    //   android: 'ZawgyiOne'
    // })
  }
})