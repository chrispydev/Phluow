import React, {useEffect, useState} from 'react';
import {Text, Image, TouchableOpacity, View} from 'react-native';
import {colors} from '../styles/colors';
import CustomButton from './CustomButton';
import PopupConfirmation from './PopupConfirmation';

export default function PaymentProcess() {
  const [timer, setTimer] = useState(240); // Initial timer value in seconds
  const [isTimerRunning, setIsTimerRunning] = useState(true); // Flag to control timer running state

  useEffect(() => {
    if (isTimerRunning) {
      // Start the timer
      const interval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);

      // Clear the interval and run the function when the timer ends
      if (timer === 0) {
        clearInterval(interval);
        setIsTimerRunning(false);
        handleTimerEnd();
      }

      // Clean up the interval on component unmount
      return () => clearInterval(interval);
    }
  }, [timer, isTimerRunning]);

  const handleTimerEnd = () => {
    // Function to run when the timer ends
    // console.log('Timer ended!');
    // Add your desired logic here
  };

  const handleStartTimer = () => {
    // Function to start the timer again
    setTimer(240);
    setIsTimerRunning(true);
  };

  const formatTime = time => {
    // Calculate minutes and seconds
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    // Format the time in M:SS format with leading zeros
    const formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    return formattedTime;
  };

  return (
    <PopupConfirmation width={'100%'} gap={50}>
      <Image source={require('../assets/Frame.png')} width={70} height={60} />
      <Text
        style={{
          color: colors.secondaryText,
          fontWeight: '400',
          fontSize: 30,
        }}>
        Processing...
      </Text>
      <Text
        style={{
          color: colors.secondaryText,
          fontWeight: '500',
          fontSize: 20,
          textAlign: 'center',
        }}>
        Your transaction is currently being processed
      </Text>
      <CustomButton
        buttonText="Confirm Transaction"
        bgColor={colors.secondary}
        pHorizontal={'20%'}
        bRadius={50}
        height={60}
        elevation={4}
      />

      <View style={{flexDirection: 'row', gap: 10}}>
        <Text
          style={{
            color: colors.secondaryText,
            fontSize: 20,
            fontWeight: '400',
            textAlign: 'center',
            letterSpacing: 1,
          }}>
          Confirm In
        </Text>
        <Text
          style={{
            color: colors.complete,
            fontSize: 20,
            fontWeight: '500',
            textAlign: 'center',
          }}>
          {formatTime(timer)}
        </Text>
      </View>
      <CustomButton
        buttonText="Cancel Transaction"
        bgColor={colors.boxColor}
        pHorizontal={'7%'}
        bRadius={50}
        height={60}
        elevation={4}
      />
    </PopupConfirmation>
  );
}
