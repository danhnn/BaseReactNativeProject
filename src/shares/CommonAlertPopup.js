import React, { PureComponent } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import PopupDialog, {ScaleAnimation, FadeAnimation} from 'react-native-popup-dialog';
import BaseText from './BaseText';
import { colors, dimens } from '@styles';

let scaleAnimation = new ScaleAnimation();

export default class CommonAlertPopup extends PureComponent {

  render() {
    const { isShow, onDismissed, onOkay, title, confirmTitle, isNeedAnimation } = this.props;
    if (!isNeedAnimation) {
      scaleAnimation = {};
    }

    return (
      <PopupDialog dialogStyle={{ borderRadius: dimens.DIALOG_BORDER_RADIUS }} 
        dialogAnimation={scaleAnimation}
        show={isShow} width={300} height={150} onDismissed={() => {
        if (isShow) {
          if (onDismissed) {
            onDismissed()
          }
        }
      }}  ref={(popupDialog) => { this.popupDialog = popupDialog; }}>
        <View style={styles.container}>
            <BaseText style={styles.textStyle}>{title}</BaseText>
      
            <TouchableOpacity onPress={() => {
              this.popupDialog.dismiss();
              if (onOkay != null) {
                onOkay()
              }
            }} underlayColor="white">
              <BaseText style={styles.buttonStyle}>{ confirmTitle || 'Okay' }</BaseText>
            </TouchableOpacity>
        </View>
      </PopupDialog>
    )
  }
}

CommonAlertPopup.defaultProps = {
  isNeedAnimation: true
};

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