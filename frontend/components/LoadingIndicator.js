import React from 'react';
import {View, Modal, ActivityIndicator, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../styles/colors';

export default function LoadingIndicator({loadingState}) {
  return (
    <Modal
      visible={loadingState}
      animationType="fade"
      transparent={true}
      onRequestClose={() => console.log('Hello World')}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '80%',
            height: 100,
          }}>
          <LinearGradient
            colors={[colors.primaryDark, colors.secondary]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 15,
            }}>
            <ActivityIndicator size="large" color={colors.secondaryText} />
            <Text style={{color: 'white', fontSize: 20, fontWeight: '400'}}>
              Authentication in progress
            </Text>
          </LinearGradient>
        </View>
      </View>
    </Modal>
  );
}
