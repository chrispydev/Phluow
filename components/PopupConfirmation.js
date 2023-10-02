import React from 'react';
import {View, Modal} from 'react-native';
import {colors} from '../styles/colors';
import {BlurView} from '@react-native-community/blur';

export default function PopupConfirmation({visible, onClose, children}) {
  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={true}
      onRequestClose={onClose}>
      <BlurView
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          opacity: 0.7,
        }}
        blurType="xlight"
        blurAmount={30}
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(8, 8, 8, 0.9)',
        }}>
        <View
          style={{
            backgroundColor: colors.boxColor,
            padding: 40,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            gap: 15,
            position: 'relative',
            width: 350,
          }}>
          {children}
        </View>
      </View>
    </Modal>
  );
}
