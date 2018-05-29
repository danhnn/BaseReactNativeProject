import React, { PureComponent } from 'react';
import { TextInput, StyleSheet, Platform } from 'react-native';

export default class BaseTextInput extends PureComponent {
  render() {
    return (
      <TextInput  
      autoCorrect={false} 
      underlineColorAndroid='rgba(0,0,0,0)'
      {...this.props} 
      style={[styles.textInputStyle, this.props.style]} ref='container' >
        {this.props.children}
      </TextInput>
    )
  }

  setNativeProps(nativeProps) {
    this.refs.container.setNativeProps(nativeProps);
  }
}

const styles = StyleSheet.create({
  textInputStyle: {
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    // fontFamily: Platform.select({
    //   ios: 'Zawgyi-One',
    //   android: 'ZawgyiOne'
    // })
  }
})