import React, { useState, useRef } from 'react'
import { TextInput, Button, Image, Text, View, ImageBackground, StyleSheet, Pressable, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants'
import Icon from 'react-native-vector-icons/Feather'




const EmailSignUp3 = ({ navigation }) => {

  const [text, onChangeText] = React.useState("Text");
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

  const checkTextInput = () => {
    if (password1 != password2) {
      alert('Please make sure your passwords match.');
      return;
    }
    if(password2.length < 8) {
      alert('Please enter a password with at least 8 characters')
      return;
    }
    //Move to next page
    navigation.navigate('EmailSignIn1')
    
  };


  return (
    /* CONTAINER  */
    <View style={styles.container}>
      <StatusBar style='light' />
      <ImageBackground source={require('./assets/background_1.png')} resizeMode='stretch' style={styles.backgroundImage}>


        <View style={styles.infoMenu}>
          <Text style={styles.buttonText}>Create Password:</Text>

          <TextInput
            style={styles.input}
            onChangeText={value => setPassword1(value)}
            placeholder="Enter your password"
            textAlign={'center'}
            autoCapitalize='none'
            autoComplete="off"
            autoCorrect='none'
            selectTextOnFocus={false}
            underlineColor={'transparent'}
          />
          <Text style={styles.buttonText}>Verify Password</Text>

          <TextInput
            style={styles.input}
            onChangeText={value => setPassword2(value)}
            placeholder="Re-enter your password"
            textAlign={'center'}
            autoCapitalize='none'
            autoComplete="off"
            autoCorrect='none'
            selectTextOnFocus={false}
            underlineColor={'transparent'}
          />
          <Text style={styles.buttonText}>Passwords must be:</Text>
          <Text style={styles.buttonText}>at least 8 characters</Text>
          


        </View>


        <View style={styles.signInMenu}>
          <Pressable style={styles.nextButton} onPress={checkTextInput}>
            <Text style={styles.buttonText}>Next</Text>
            
          </Pressable>
          <Button style={styles.backButton} title="Go back" onPress={() => navigation.navigate('MainLoginScreen')} />
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
    textAlign: 'center',
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

export default EmailSignUp3;
