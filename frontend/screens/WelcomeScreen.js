import React from 'react';
import {
  View,
  StatusBar,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CustomButton from '../components/CustomButton';
import PagerView from 'react-native-pager-view';
import ImageGrid from '../components/ImageGrid';
import {colors} from '../styles/colors';
import Wrapper from '../components/Wrapper';
import useCustomDimensions from '../hooks/useCustomDimension';

export default function WelcomeScreen({navigation}) {
  const {heightPercentage} = useCustomDimensions('0%', '62%');
  const {widthPercentage: fsp} = useCustomDimensions('9%', '0%');
  const {widthPercentage: wlp, heightPercentage: wlwp} = useCustomDimensions(
    '4%',
    '3%',
  );
  const {heightPercentage: wip} = useCustomDimensions('0%', '43%');
  const {heightPercentage: sip} = useCustomDimensions('0%', '3.5%');
  const {heightPercentage: lip} = useCustomDimensions('0%', '5%');
  const {widthPercentage: buttonFontWP, heightPercentage: buttonFontHP} =
    useCustomDimensions('5%', '3.4%');

  return (
    <ScrollView style={{backgroundColor: colors.primary}}>
      <Wrapper navigation={navigation}>
        <StatusBar backgroundColor="#000" />
        <PagerView
          style={{width: '100%', height: heightPercentage}}
          initialPage={0}>
          <View key="1">
            <Image
              style={[styles.image, {height: wip}]}
              source={require('../assets/saly.png')}
            />
            <View style={styles.textContainer}>
              <Text
                style={[
                  [styles.text],
                  {
                    fontSize: fsp,
                    fontWeight: '700',
                    marginBottom: 10,
                    lineHeight: lip,
                  },
                ]}>
                Order With Ease
              </Text>
              <Text style={[styles.text, {fontSize: wlp, lineHeight: wlwp}]}>
                Find, order, and track the delivery of water from reliable and
                certified suppliers.
              </Text>
              <View style={styles.carouselBars}>
                <View style={styles.carouselBar} />
                <View style={[styles.carouselBar, styles.bar2]} />
              </View>
            </View>
          </View>
          <View key="2">
            <ImageGrid />
            <View>
              <Text
                style={[
                  [styles.text],
                  {fontSize: fsp, fontWeight: '700', marginBottom: 10},
                ]}>
                We made it simple
              </Text>
              <Text style={[styles.text, {fontSize: wlp, lineHeight: wlwp}]}>
                phluow for customers is the best way to meet your water needs.{' '}
              </Text>
              <View style={styles.carouselBars}>
                <View style={[styles.carouselBar, styles.bar2]} />
                <View style={styles.carouselBar} />
              </View>
            </View>
          </View>
        </PagerView>
        <View style={styles.buttonContainer}>
          <CustomButton
            pHorizontal={29}
            bgColor={colors.secondary}
            bRadius={15}
            fontSize={buttonFontWP}
            lineHeight={buttonFontHP}
            buttonText="Create An Account"
            fontWeight={'400'}
            buttonAction={() => navigation.navigate('signUp')}
          />
          <TouchableOpacity
            style={styles.buttonText1}
            onPress={() => navigation.navigate('signin')}>
            <Text
              style={[styles.buttonText1, {fontSize: sip, lineHeight: lip}]}>
              Sign In
            </Text>
          </TouchableOpacity>

          <Text style={[styles.buttonText2, {fontSize: wlp}]}>
            By continuing you agree to our Terms of service & Privacy Policy
          </Text>
        </View>
      </Wrapper>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {width: '100%', resizeMode: 'cover'},
  text: {
    color: '#fff',
    textTransform: 'capitalize',
    fontStyle: 'normal',
    textAlign: 'center',
    lineHeight: 40,
  },
  text2: {
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 25,
  },
  carouselBars: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselBar: {
    height: 4,
    width: 20,
    backgroundColor: colors.secondary,
    borderRadius: 10,
  },
  bar2: {
    width: 5,
    marginLeft: 3,
    marginRight: 3,
    backgroundColor: colors.boxColor,
  },
  buttonContainer: {
    justifyContent: 'space-between',
  },
  buttonText1: {
    textAlign: 'center',
    color: '#007ACC',
    marginTop: 20,
    fontWeight: '400',
    lineHeight: 30,
  },
  buttonText2: {
    textAlign: 'center',
    color: '#fff',
    marginTop: 20,
    fontWeight: '300',
    textTransform: 'capitalize',
  },
});
