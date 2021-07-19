import React, { useState } from 'react';
import {
  View,
  TextInput,
} from 'react-native';
// yarn add react-native-emoji
import Emoji from 'react-native-emoji';

export default function RNEmojiComponent() {
  
  const [emojiName, setEmojiName] = useState('fire');
  
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <TextInput
        style={{
        
          marginRight: 10,
          backgroundColor: '#f3f3f3',
          paddingHorizontal: 10,
          height: 40,
          borderRadius: 6,
        }}
        placeholder='Emoji Name'
        defaultValue='fire'
        onChangeText={(text) => setEmojiName(text)}
        autoCapitalize='none'
        autoCompleteType='off'
      />
      <Emoji name={emojiName} style={{ fontSize: 40 }} />
    </View>
  )
}