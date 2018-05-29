import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import PopupDialog from 'react-native-popup-dialog';
import BaseText from './BaseText';
import {colors, dimens} from '@styles';
var Spinner = require('react-native-spinkit');

export default class InProcessPopup extends PureComponent {
  render() {
    const { isShow, onDismissed, title } = this.props;
    return (
      <PopupDialog dialogStyle={{ borderRadius: dimens.DIALOG_BORDER_RADIUS }} show={isShow} width={200} height={150} onDismissed={() => {
        if (isShow) {
          if (onDismissed != null) {
            onDismissed()
          }
        }
      }
      }>
        <View style={styles.container}>
          <BaseText style={{color: 'white'}}>{title}</BaseText>
          <Spinner isVisible={true} color='white' size={30} type="Wave" />
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
    justifyContent:'center',
    alignItems:'center'
  }
})