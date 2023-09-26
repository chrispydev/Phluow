import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import Wrapper from '../components/Wrapper';
import {colors} from '../styles/colors';
import Status from './Custom/Status';
import Ongoing from './Custom/Ongoing';
import Complete from './Custom/Complete';
import CustomButton from '../components/CustomButton';
import PopupConfirmation from '../components/PopupConfirmation';
import Sheet from '../components/sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default function PickUpOrder({navigation}) {
  const [page, setPage] = useState('status');
  const [visible, setVisible] = useState(false);

  const moveToStatus = () => {
    setPage('status');
    handleModal();
  };

  const moveOnGoing = () => {
    setPage('ongoing');
  };

  const moveToComplete = () => {
    setPage('complete');
  };

  const handleModal = () => {};

  const popUp = (
    <>
      <PopupConfirmation
        visible={visible}
        onClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          <Text style={{color: colors.secondaryText, textAlign: 'center'}}>
            Your order is still pending
          </Text>
          <Text
            style={{
              paddingLeft: 3,
              color: colors.pending,
              textAlign: 'center',
            }}>
            pending
          </Text>
          <Text style={{color: colors.secondaryText, textAlign: 'center'}}>
            Wait for [company name] to accept your order
          </Text>
        </View>

        <TouchableOpacity onPress={() => setVisible(!visible)}>
          <Text
            style={{
              color: colors.secondaryText,
              textAlign: 'center',
              flexWrap: 'wrap',
              textDecorationStyle: 'dashed',
              textDecorationLine: 'underline',
            }}>
            See details of Order
          </Text>
        </TouchableOpacity>
        <CustomButton
          buttonAction={() => handleModal()}
          buttonText="Continue"
          bgColor={colors.secondary}
          pHorizontal={30}
          pVertical={5}
          bRadius={120}
        />
      </PopupConfirmation>
    </>
  );

  const currentPage = (
    <>
      {page === 'status' && (
        <>
          <View
            style={{
              backgroundColor: colors.primaryDark,
              paddingVertical: 10,
              paddingHorizontal: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <CustomButton
              buttonAction={() => moveToStatus()}
              bgColor={colors.secondary}
              buttonText="Status"
              pVertical={10}
              pHorizontal={10}
              bRadius={10}
            />
            <CustomButton
              buttonAction={() => moveOnGoing()}
              bgColor={colors.primaryDark}
              buttonText="Ongoing"
              pVertical={10}
              pHorizontal={10}
            />
            <CustomButton
              buttonAction={() => moveToComplete()}
              bgColor={colors.primaryDark}
              buttonText="Complete"
              pVertical={10}
              pHorizontal={10}
            />
          </View>
          <Status />
        </>
      )}
      {page === 'ongoing' && (
        <>
          <View
            style={{
              backgroundColor: colors.primaryDark,
              paddingVertical: 10,
              paddingHorizontal: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <CustomButton
              buttonAction={() => moveToStatus()}
              bgColor={colors.primaryDark}
              buttonText="Status"
              pVertical={10}
              pHorizontal={10}
              bRadius={10}
            />
            <CustomButton
              buttonAction={() => moveOnGoing()}
              bgColor={colors.secondary}
              buttonText="Ongoing"
              pVertical={10}
              pHorizontal={10}
            />
            <CustomButton
              buttonAction={() => moveToComplete()}
              bgColor={colors.primaryDark}
              buttonText="Complete"
              pVertical={10}
              pHorizontal={10}
            />
          </View>
          <Ongoing />
        </>
      )}
      {page === 'complete' && (
        <>
          <View
            style={{
              backgroundColor: colors.primaryDark,
              paddingVertical: 10,
              paddingHorizontal: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <CustomButton
              buttonAction={() => moveToStatus()}
              bgColor={colors.primaryDark}
              buttonText="Status"
              pVertical={10}
              pHorizontal={10}
              bRadius={10}
            />
            <CustomButton
              buttonAction={() => moveOnGoing()}
              bgColor={colors.primaryDark}
              buttonText="Ongoing"
              pVertical={10}
              pHorizontal={10}
            />
            <CustomButton
              buttonAction={() => moveToComplete()}
              bgColor={colors.secondary}
              buttonText="Complete"
              pVertical={10}
              pHorizontal={10}
            />
          </View>
          <Complete />
        </>
      )}
    </>
  );
  return (
    <Wrapper
      headerTitle="Schedule Pickups"
      show
      removePadding
      navigation={navigation}>
      <GestureHandlerRootView>
        <Sheet />
        {/* {popUp} */}
        {/* {currentPage} */}
      </GestureHandlerRootView>
    </Wrapper>
  );
}
