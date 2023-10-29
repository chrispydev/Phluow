import React, {useState} from 'react';
import {Image, ScrollView, View, TouchableOpacity, Text} from 'react-native';
import {colors} from '../styles/colors';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DynamicHeader from '../components/DynamicHeader';
import IconButton from '../components/IconButton';

export default function Services({navigation}) {
  const [hideText, setHideText] = useState(true);
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: colors.primary,
      }}>
      {/*Header*/}
      <DynamicHeader navigation={navigation} />
      <View
        style={{
          borderTopWidth: 10,
          borderColor: colors.scheduleButtonColor,
        }}>
        <Image
          style={{
            height: 160,
            width: 160,
            borderWidth: 10,
            borderColor: colors.scheduleButtonColor,
            borderRadius: 15,
            objectFit: 'contain',
            left: '5%',
            marginTop: '-15%',
          }}
          source={require('../assets/imag4.png')}
        />
        {/*Text components*/}
        <View style={{paddingHorizontal: '5%', marginTop: '3%'}}>
          {/*Colaspse components*/}
          <View>
            <Text
              style={{
                color: colors.secondaryText,
                fontSize: 22,
                fontWeight: '300',
                letterSpacing: 1,
                maxHeight: `${hideText ? '37%' : '100%'}`,
                backgroundColor: `${
                  hideText ? colors.scheduleButtonColor : colors.primaryDarker
                }`,
                borderBottomRightRadius: 20,
              }}>
              Welcome to [company name], your one-name destination of
              environmentally responsible waste management ... solution. We
              offer a comprehensive range of waste handling services, including
              collection, transportation, storage, treatment, and disposal. Our
              team of expert professionals in commited to promoting
              sustainability and reducing environmental impact through
              innovative wast management strategies. With cutting-edge
              technology and state-of-the-art equipment, we ensure efficient and
              safe wast disposal, keeping the community and the environment
              protected. Join us in our mission towards a cleaner and greener
              planet. #sustainability #wastemanagement # environment
              #responsibility
            </Text>
            <TouchableOpacity
              onPress={() => setHideText(!hideText)}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 13,
                paddingHorizontal: '5%',
                paddingVertical: '3%',
                backgroundColor: colors.boxColor,
                width: '22%',
                elevation: hideText ? 10 : 0,
                marginTop: hideText ? '-4%' : 20,
              }}>
              <Text
                style={{
                  color: colors.secondaryText,
                  fontSize: 20,
                  marginRight: 4,
                }}>
                {hideText ? 'more' : 'less'}
              </Text>
              <Icon
                name={hideText ? 'plus' : 'minus'}
                size={25}
                color={colors.secondaryText}
              />
            </TouchableOpacity>
          </View>
          {/* Working Days*/}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginTop: hideText ? '-2%' : '5%',
              marginLeft: '10%',
              gap: 40,
            }}>
            <Text
              style={{
                color: colors.secondaryText,
                fontSize: 25,
                fontWeight: '300',
                letterSpacing: 1,
              }}>
              Working Days:
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 20,
              }}>
              <Text
                style={{
                  color: colors.secondaryText,
                  fontSize: 25,
                  fontWeight: '300',
                  letterSpacing: 1,
                }}>
                Monday
              </Text>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  borderWidth: 2,
                  borderColor: colors.secondaryText,
                  borderRadius: 13,
                  padding: '1%',
                  // width: '8%',
                }}>
                <Icon
                  name="chevron-down"
                  size={30}
                  color={colors.secondaryText}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/*company times*/}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
            marginTop: hideText ? '-10%' : '4%',
            paddingVertical: hideText ? '2%' : '0',
            marginBottom: hideText ? '7%' : 0,
            backgroundColor: hideText ? colors.boxColor : colors.primaryDarker,
          }}>
          <Text
            style={{
              fontSize: 22,
              color: colors.secondaryText,
              letterSpacing: 1,
              fontWeight: '300',
            }}>
            Opening time:
          </Text>
          <Text
            style={{
              fontSize: 22,
              color: colors.secondaryText,
              letterSpacing: 1,
              fontWeight: '300',
              marginRight: '5%',
            }}>
            8:00am
          </Text>
          <Text
            style={{
              fontSize: 22,
              color: colors.secondaryText,
              letterSpacing: 1,
              fontWeight: '300',
            }}>
            Closing time:
          </Text>
          <Text
            style={{
              fontSize: 22,
              color: colors.secondaryText,
              letterSpacing: 1,
              fontWeight: '300',
            }}>
            5:00pm
          </Text>
        </View>
        <View
          style={{
            marginTop: hideText ? '-5%' : '5%',
            backgroundColor: colors.boxColor,
            paddingHorizontal: '5%',
            paddingVertical: '3%',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: 10,
          }}>
          <Text
            style={{
              color: colors.secondaryText,
              fontSize: 24,
              fontWeight: '400',
              letterSpacing: 1,
              marginRight: '6%',
            }}>
            Social media
          </Text>
          <IconButton
            iconName="instagram"
            backgroundColor={colors.primaryDark}
            iconColor="purple"
          />
          <IconButton
            iconName="telegram"
            backgroundColor={colors.primaryDark}
            iconColor="purple"
          />
          <IconButton
            iconName="facebook"
            backgroundColor={colors.primaryDark}
            iconColor="tomato"
          />
          <IconButton
            iconName="twitter"
            backgroundColor={colors.primaryDark}
            iconColor="royalblue"
          />
          <IconButton
            iconName="linkedin-square"
            backgroundColor={colors.primaryDark}
            iconColor="lightblue"
          />
        </View>
      </View>
    </ScrollView>
  );
}
