import React from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import {colors} from '../styles/colors';

export default function Wrapper({
  children,
  headerTitle,
  show,
  navigation,
  removePadding,
}) {
  return (
    <SafeAreaView style={styles.signUpContainer}>
      <StatusBar backgroundColor="#000" />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          paddingHorizontal: 32,
        }}>
        {show && (
          <>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}>
              <Image source={require('../assets/signin_back.png')} />
            </TouchableOpacity>
          </>
        )}

        <Text
          style={{
            flex: 1,
            color: colors.secondaryText,
            textAlign: 'center',
            fontWeight: '600',
            lineHeight: 20,
            letterSpacing: -0.24,
            fontSize: 20,
          }}>
          {headerTitle}
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: removePadding ? 0 : 32,
        }}>
        {children}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  signUpContainer: {
    flex: 1,
    backgroundColor: colors.primary,
    fontFamily: 'Roboto_400Regular',
    paddingVertical: 24,
  },
  backButton: {
    marginLeft: -20,
    maxWidth: 20,
  },
});
