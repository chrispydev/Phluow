import React, {useRef} from 'react';
import {
  Image,
  ScrollView,
  Animated,
  View,
  TouchableOpacity,
  ImageBackground,
  Text,
} from 'react-native';
import {colors} from '../styles/colors';

const Header_Max_Height = 240;
const Header_Min_Height = 120;
const Scroll_Distance = Header_Min_Height - Header_Min_Height;

const DynamicHeader = ({value, navigation}) => {
  const animatedHeaderHeight = value.interpolate({
    inputRange: [0, Scroll_Distance],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extralpolate: 'clamp',
  });

  const animatedHeaderColor = value.interpolate({
    inputRange: [0, Scroll_Distance],
    outputRange: ['#181D31', '#678983'],
    extralpolate: 'clamp',
  });

  return (
    <View
      style={{
        height: 200,
        // height: animatedHeaderHeight,
        // backgroundColor: animatedHeaderColor,
      }}>
      <ImageBackground
        source={require('../assets/imag1.png')}
        imageStyle={{flex: 1, height: 240, zIndex: -99999}}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomWidth: 10,
          borderColor: colors.starColor,
        }}>
        <TouchableOpacity
          style={{
            marginLeft: '3%',
            marginTop: '3%',
          }}
          onPress={() => navigation.goBack()}>
          <Image
            style={{width: 30, height: 30}}
            source={require('../assets/signin_back.png')}
          />
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: colors.primaryDark,
            paddingVertical: '2%',
            paddingHorizontal: '4.5%',
            borderRadius: 140,
            marginRight: '3%',
            marginTop: '2%',
          }}>
          {[...new Array(3)].map((_, index) => (
            <View
              key={index}
              style={{
                width: '1%',
                height: '1%',
                borderWidth: 1,
                borderColor: colors.secondaryText,
                padding: 4,
                margin: 1,
                borderRadius: 109,
              }}
            />
          ))}
        </View>
      </ImageBackground>
    </View>
  );
};

export default function Services({navigation}) {
  const scrollOffsetY = useRef(new Animated.Value(0))?.current;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.primary,
        fontFamily: 'Roboto_400Regular',
      }}>
      <DynamicHeader value={scrollOffsetY} navigation={navigation} />
      <Image
        style={{
          borderWidth: 10,
          borderColor: colors.primaryDark,
          borderRadius: 15,
          height: '15%',
          width: '25%',
          objectFit: 'contain',
          left: '5%',
        }}
        source={require('../assets/imag4.png')}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollOffsetY}}}],
          {useNativeDriver: false},
        )}>
        <View>
          {[...new Array(50)].map((_, index) => (
            <View style={{backgroundColor: colors.textLightColor}}>
              <Text style={{color: colors.secondaryText}}>{index}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
