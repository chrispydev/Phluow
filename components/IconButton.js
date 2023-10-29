import React from 'react';
import {TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default function IconButton({iconName, backgroundColor, iconColor}) {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        backgroundColor: `${backgroundColor}`,
        borderRadius: 13,
        paddingVertical: '2%',
        paddingHorizontal: '2%',
        width: '10%',
      }}>
      <Icon name={iconName} size={30} color={iconColor} />
    </TouchableOpacity>
  );
}
