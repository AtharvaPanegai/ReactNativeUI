import React, {useState}from 'react'
import { StyleSheet, Text, View } from 'react-native'
// yarn add react-native-slider
import Slider from 'react-native-slider';

const SeekbarComponent = () => {

    const [seekbarValue, setSeekbarValue] = useState(5);
    return (
        <View>
            <View
            style={{
           
                alignItems: 'stretch',
                justifyContent: 'center'
            }}>
                 <Slider
                    value={seekbarValue}
                    minimumValue={0}
                    maximumValue={10}
                    step={1}
                    width={300}
                    onSlidingComplete={(value) => {
                    setSeekbarValue(value);
                }}
                />
        </View>
        <View
         style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Text>0</Text>
        <Text>10</Text>
      </View>
      <View>
        <Text
          style={{ alignSelf: 'center' }}
        >{`Current Value: ${seekbarValue}`}</Text>
      </View>
    </View>
  )
}

export default SeekbarComponent


