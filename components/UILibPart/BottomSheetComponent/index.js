import React, { useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  
} from 'react-native';

// yarn add react-native-raw-bottom-sheet
import BottomSheet from 'react-native-raw-bottom-sheet';
import { Icon } from 'react-native-elements';


export default function BottomSheetComponent() {
  
  const bottomSheetRef = useRef();

  return (
    <View>
      <BottomSheet
        ref={bottomSheetRef}
        closeOnDragDown={true}
        height={300}
        openDuration={250}
      >
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#f1f3f6',
            alignItems: 'center',
            paddingTop: 50,
          }}
        >
          <Text style={{ fontSize: 20 }}>
            Checkout More Apps by Agni
          </Text>
          <TouchableOpacity
            style={[styles.iconButton, { marginTop: 20 }]}
            onPress={() => {
              Linking.openURL(
                'https://play.google.com/store/apps/developer?id=Akul+Srivastava'
              );
            }}
          >
            <Icon name='google-play' type='font-awesome-5' />
            <Text style={{ fontSize: 18, marginLeft: 12 }}>
              Google Play
            </Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: '#3B3B98', marginTop: 0 },
        ]}
        onPress={() => {
          bottomSheetRef.current.open();
        }}
      >
        <Text style={styles.submitButtonText}>More Apps</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  iconButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    marginTop: 10,
  },
  submitButtonText : {
    paddingHorizontal : 20,
    fontSize : 16,
    paddingVertical : 15,
    color : "white",

  },
  button : {
    borderRadius : 8,
  },
})