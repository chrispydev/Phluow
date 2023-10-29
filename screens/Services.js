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

const DynamicHeader = ({navigation}) => {
  return (
    <View
      style={{
        height: 230,
      }}>
      <ImageBackground
        source={require('../assets/imag1.png')}
        imageStyle={{
          height: 230,
        }}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
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
      <DynamicHeader navigation={navigation} />
      <View
        style={{
          borderTopWidth: 10,
          borderColor: colors.modalSheetColor,
        }}>
        <Image
          style={{
            borderWidth: 10,
            borderColor: colors.modalSheetColor,
            borderRadius: 20,
            width: 135,
            height: 130,
            objectFit: 'contain',
            bottom: '50%',
            left: '4%',
            zIndex: 99999,
          }}
          source={require('../assets/imag4.png')}
        />
        <View style={{paddingHorizontal: '5%', marginTop: '-5%'}}>
          <Text
            style={{
              color: colors.secondaryText,
              fontSize: 20,
              fontWeight: '300',
              letterSpacing: 1,
            }}>
            Welcome to [company name], your one-name
          </Text>
        </View>
      </View>
    </View>
  );
}
