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
    fontSize: 40,
    fontWeight: '700',
    textTransform: 'capitalize',
    fontFamily: 'Roboto_400Regular',
  },
  welcomeText: {
    color: colors.secondaryText,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '400',
    lineHeight: 25,
    flexWrap: 'wrap',
  },
  image: {
    width: 250,
    height: 80,
  },
});
