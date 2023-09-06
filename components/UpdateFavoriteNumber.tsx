import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, TouchableHighlight } from 'react-native';

import Colors from '../constants/Colors';
import { ExternalLink } from './ExternalLink';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import { useAuth } from '../app/context/auth';
import { updateNumber } from '../HasuraConnection';
import TabTwoScreen from '../app/(tabs)/two';


function updateData() {

}
export default function UpdateFavoriteNumber() {
  const [number, setNumber] = useState("");
  const { signOut, user } = useAuth();
  const loginuser = user as string;
  
  //const result = updateNumber(loginuser, parseInt(number));
  return (
    <View>
      <View style={styles.getStartedContainer}>
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Enter your number
        </Text>

        <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
          darkColor="rgba(255,255,255,0.05)"
          lightColor="rgba(0,0,0,0.05)">
           <TextInput style={{width: 150, fontSize:20, textAlign: 'center', fontWeight: 'normal', margin: 20}} 
           onChangeText={(e) => setNumber(e)} 
           value={number}/>
        </View>

        <View >
          
           <TouchableHighlight onPress={()=> updateNumber(loginuser, parseInt(number))} underlayColor={'#0C7DE4'}>
        <Text style={styles.buttonText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">Update</Text>
    </TouchableHighlight>
         </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 25,
    lineHeight: 30,
    textAlign: 'center',
    backgroundColor: '#0C7DE4',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
