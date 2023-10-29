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
import DynamicHeader from '../components/Header';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Services({navigation}) {
  const scrollOffsetY = useRef(new Animated.Value(0))?.current;
  return (
    /*screeen wrapper*/
    <View
      style={{
        flex: 1,
        backgroundColor: colors.primary,
        fontFamily: 'Roboto_400Regular',
      }}>
      {/*header*/}
      <DynamicHeader navigation={navigation} />
      {/*components wrapper*/}
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
            left: '4%',
            top: '-10%',
            zIndex: 99999,
          }}
          source={require('../assets/imag4.png')}
        />
        <ScrollView
          contentContainerStyle={{marginTop: '-10%'}}
          // style={{marginTop: '-10%'}}
          showsVerticalScrollIndicator={false}>
          <View style={{paddingHorizontal: '5%'}}>
            <View>
              <Text
                style={{
                  color: colors.secondaryText,
                  fontSize: 25,
                  fontWeight: '300',
                  letterSpacing: 1,
                  lineHeight: 35,
                }}>
                Welcome to [company name], your one-name destination of
                environmentally responsible waste management ... solution. We
                offer a comprehensive range of waste handling services,
                including collection, transportation, storage, treatment, and
                disposal. Our team of expert professionals in commited to
                promoting sustainability and reducing environmental impact
                through innovative wast management strategies. With cutting-edge
                technology and state-of-the-art equipment, we ensure efficient
                and safe wast disposal, keeping the community and the
                environment protected. Join us in our mission towards a cleaner
                and greener planet. #sustainability #wastemanagement #
                environment #responsibility
              </Text>
            </View>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 13,
                padding: '3%',
                backgroundColor: colors.boxColor,
                width: '16%',
                elevation: 10,
                marginTop: 20,
              }}>
              <Text
                style={{
                  color: colors.secondaryText,
                  fontSize: 25,
                  marginRight: 4,
                }}>
                less
              </Text>
              <Icon name="minus" size={25} color={colors.secondaryText} />
            </TouchableOpacity>
          </View>
          <View style={{paddingHorizontal: '5%', marginTop: '9%'}}>
            <Text
              style={{
                fontSize: 25,
                letterSpacing: 1,
                color: colors.secondaryText,
              }}>
              Working Days:
            </Text>
            <View>
              <Text>Monday</Text>
              <Icon name="minus" size={25} color={colors.secondaryText} />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
