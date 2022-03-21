import React, { useState, useRef } from 'react'
import { TextInput, Button, Image, Text, View, ImageBackground, StyleSheet, Pressable, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants'
import Icon from 'react-native-vector-icons/Feather'




const EmailSignUp1 = ({ navigation }) => {

  const [text, onChangeText] = React.useState("Text");
  const [messageText, setMessageText] = useState('');

  const checkTextInput = () => {
    
    //Check for the Email TextInput
    if (!messageText.trim()) {
      Alert.alert('Please enter Email');
      return;
    }
    //Checked Successfully
    //Move to next page
    navigation.navigate('EmailSignUp2')
  };


  return (
    /* CONTAINER  */
    <View style={styles.container}>
      <StatusBar style='light' />
      <ImageBackground source={require('../assets/background_1.png')} resizeMode = 'stretch' style={styles.backgroundImage}>
   

      <View style={styles.infoMenu}>

        <Text style={styles.buttonText}>Email</Text>

        <TextInput
          style={styles.input}
          onChangeText={value => setMessageText(value)}
          textAlign={'center'}
          placeholder="Enter your email address"
          autoCapitalize='none'
          autoComplete="off"
          autoCorrect='none'
          selectTextOnFocus={false}
          underlineColor={'transparent'}
        />


      </View>


      <View style={styles.signInMenu}>
        <Pressable style={styles.nextButton} onPress={checkTextInput}>
          <Text style={styles.buttonText}>Next</Text>
        </Pressable>
        <Button style={styles.backButton} title="Go back" onPress={() => navigation.goBack()} /> 
      </View>
      </ImageBackground>
    </View>
  );


};


const styles = StyleSheet.create({

  container: {
    height: '100%',

  },
  backgroundImage: {
    justifyContent: "center",
    height: '100%',

  },
  

  infoMenu: {
    height: 350,
    marginRight: 40,
    marginLeft: 40,
    marginTop: 75,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    borderRadius: 20,

  },
  signInMenu: {
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,

  },


  icon: {
    width: 200,
    height: 75,

  },
 
  backButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 20,
    backgroundColor: '#211626',
    marginTop: 20,
    

  },


  nextButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 20,
    backgroundColor: '#73172F',
    marginTop: 20,
    marginBottom: 20,
  },


  input: {
    height: 40,
    width: 250,
    margin: 30,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white'

  },
  
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    color: 'white',
  },



});

export default EmailSignUp1;
