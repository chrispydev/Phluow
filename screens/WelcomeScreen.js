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

export default function WelcomeScreen({navigation}) {
  return (
    <Wrapper navigation={navigation}>
      <StatusBar backgroundColor="#000" />
      <PagerView style={{width: '100%', height: '75%'}} initialPage={0}>
        <View key="1">
          <Image style={styles.image} source={require('../assets/saly.png')} />
          <View style={styles.textContainer}>
            <Text style={[styles.text, styles.text1]}>Order With Ease</Text>
            <Text style={[styles.text, styles.text2]}>
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
          <View style={styles.textContainer}>
            <Text style={[styles.text, styles.text1]}>We made it simple</Text>
            <Text style={[styles.text, styles.text2]}>
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
          buttonText="Create An Account"
          buttonAction={() => navigation.navigate('signUp')}
        />
        <TouchableOpacity
          style={styles.buttonText1}
          onPress={() => navigation.navigate('signin')}>
          <Text style={styles.buttonText1}>Sign in</Text>
        </TouchableOpacity>

        <Text style={styles.buttonText2}>
          By continuing you agree to our Terms of service & Privacy Policy
        </Text>
      </View>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    marginTop: -20,
  },
  image: {width: '100%', height: '75%'},
  text: {
    color: '#fff',
    textTransform: 'capitalize',
    fontStyle: 'normal',
    textAlign: 'center',
    lineHeight: 40,
  },
  text1: {
    fontSize: 35,
    fontWeight: '700',
    marginBottom: 10,
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
    fontSize: 25,
    fontWeight: '500',
    lineHeight: 30,
  },
  buttonText2: {
    textAlign: 'center',
    color: '#fff',
    marginTop: 20,
    fontSize: 20,
    fontWeight: '300',
    textTransform: 'capitalize',
  },
});
