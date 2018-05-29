import React, { PureComponent } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import PopupDialog from 'react-native-popup-dialog';
import BaseText from './BaseText';
import { colors, dimens } from '@styles';

export default class CommonAlertPopupNoButton extends PureComponent {
  render() {
    const { isShow, onDismissed, onOkay, title } = this.props;
    return (
      <PopupDialog dialogStyle={{ borderRadius: dimens.DIALOG_BORDER_RADIUS }} show={isShow} width={300} height={150} onDismissed={() => {
        if (isShow) {
          if (onDismissed) {
            onDismissed()
          }
        }
      }}  ref={(popupDialog) => { this.popupDialog = popupDialog; }}>
        <View style={styles.container}>
            <BaseText style={styles.textStyle}>{title}</BaseText>
        </View>
      </PopupDialog>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: dimens.DIALOG_BORDER_RADIUS,
    backgroundColor: colors.ORANGE_COLOR,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle:{
    color: 'white', 
    padding: 10
  },
  buttonStyle: {
    fontSize:16,
    fontWeight:'bold',
    margin: 10,
    color: 'white'
  }
})