import React, { useRef, useEffect, useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import Wrapper from '../components/Wrapper';
import { colors } from '../styles/colors';
import CustomButton from '../components/CustomButton';
import { globalStyles } from '../styles/global';

/*eslint-disable*/
export default function ConfirmEmailOtp({ navigation }) {
  const inputRefs = useRef([]);
  let currentIndex = useRef(0);

  const [timer, setTimer] = useState(240); // Initial timer value in seconds
  const [isTimerRunning, setIsTimerRunning] = useState(true); // Flag to control timer running state

  useEffect(() => {
    if (isTimerRunning) {
      // Start the timer
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
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
    console.log('Timer ended!');
    // Add your desired logic here
  };

  const handleStartTimer = () => {
    // Function to start the timer again
    setTimer(240);
    setIsTimerRunning(true);
  };

  const formatTime = (time) => {
    // Calculate minutes and seconds
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    // Format the time in M:SS format with leading zeros
    const formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    return formattedTime;
  };

  const handleChange = (text, index) => {
    if (text.length === 1) {
      currentIndex.current =
        index < inputRefs.current.length - 1 ? index + 1 : currentIndex.current;
      inputRefs.current[currentIndex.current].focus();
    } else if (text.length === 0 && index > 0) {
      currentIndex.current = index - 1;
      inputRefs.current[currentIndex.current].focus();
    }
  };
  return (
    <Wrapper show navigation={navigation}>
      <View style={globalStyles.welcomesigninTextContainer}>
        <Image source={require('../assets/signin.png')} />
        <Text style={globalStyles.text}>Confirm Email</Text>
        <View style={{ gap: 5 }}>
          <Text style={globalStyles.welcomeText}>
            Enter the code sent to your email and confirm to login
          </Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        {[...new Array(5)].map((_, index) => (
          <TextInput
            ref={(ref) => {
              inputRefs.current[index] = ref;
            }}
            key={index}
            keyboardType='decimal-pad'
            contextMenuHidden
            selectTextOnFocus
            textID={`OTPInput-${index}`}
            onChangeText={(text) => handleChange(text, index)}
            maxLength={1}
            style={{
              borderColor: colors.secondaryText,
              backgroundColor: colors.boxColor,
              borderRadius: 4,
              borderWidth: 1,
              width: 50,
              height: 50,
              color: colors.secondaryText,
              fontSize: 18,
              fontWeight: '800',
              textAlign: 'center',
            }}
          />
        ))}
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 15,
          marginBottom: 15,
          gap: 10,
        }}
      >
        <Text
          style={{
            color: colors.secondaryText,
            fontSize: 14,
            fontWeight: 500,
            textAlign: 'center',
          }}
        >
          Haven&apos;t gotten code yet?
        </Text>
        {isTimerRunning ? (
          <Text
            style={{
              color: colors.secondary,
              fontSize: 14,
              fontWeight: 500,
              textAlign: 'center',
            }}
          >
            {formatTime(timer)}
          </Text>
        ) : (
          <TouchableOpacity onPress={handleStartTimer}>
            <Text
              style={{
                color: colors.secondary,
                fontSize: 14,
                fontWeight: 500,
                textAlign: 'center',
              }}
            >
              Re-send code
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <CustomButton
        buttonText='Confirm'
        bgColor={colors.secondary}
        buttonAction={() => navigation.navigate('home-tab')}
      />
    </Wrapper>
  );
}
