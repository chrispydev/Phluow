import React from 'react';
import {View, Modal, Text, Image} from 'react-native';
import {colors} from '../styles/colors';

export default function PopupConfirmation({visible, onClose, children}) {
  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={true}
      onRequestClose={onClose}>
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
            padding: 20,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            gap: 15,
            position: 'relative',
            maxWidth: 250,
          }}>
          {children}
        </View>
      </View>
    </Modal>
  );
}
