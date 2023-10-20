import {Switch, View} from 'react-native';
import React, {useState} from 'react';
import PurchaseDetails from '../PurchaseDetails';
import {colors} from '../../styles/colors';

export default function WaterPurchaseDetail({name, price, volume, image}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: '80%',
          height: '100%',
        }}>
        <PurchaseDetails
          name={name}
          price={price}
          volume={volume}
          image={image}
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.boxColor,
          borderRadius: 20,
          margin: '2%',
          padding: '4%',
          height: '95%',
        }}>
        <Switch
          trackColor={{
            false: colors.scheduleButtonColor,
            true: colors.complete,
          }}
          thumbColor={isEnabled ? colors.secondaryText : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
}
