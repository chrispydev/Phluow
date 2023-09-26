import {StyleSheet} from 'react-native';
import {colors} from './colors';

export const globalStyles = StyleSheet.create({
  welcomesigninTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 29,
  },
  text: {
    color: colors.secondaryText,
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    textTransform: 'capitalize',
    letterSpacing: 0.24,
    fontFamily: 'Roboto_400Regular',
  },
  welcomeText: {
    color: colors.secondaryText,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
    flexWrap: 'wrap',
  },
});
