import React, { useState, useRef } from 'react'
import { TextInput, Button, Image, Text, View, ImageBackground, StyleSheet, Pressable, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants'
import Icon from 'react-native-vector-icons/Feather'




const EmailSignIn1 = ({ navigation }) => {

  const [text, onChangeText] = React.useState("Text");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const checkTextInput = () => {
    
    //Check for the Email TextInput
    if (!email.trim()) {
      Alert.alert('Please enter the email associated with your account.');
      return;
    }
    if (!password.trim()) {
      Alert.alert('Please enter the password associated with your account.');
      return;
    }
    // replace with navigation
    navigation.navigate('Dashboard');
  };


  return (
    /* CONTAINER  */
    <View style={styles.container}>
      <StatusBar style='light' />
      <View style={styles.header}>
       
        <Image
          source={require('../assets/playgg_logo_concept_text.png')}
          style={styles.icon}
        />
      </View>

      <View style={styles.infoMenu}>

        <Text style={styles.buttonText}>Email</Text>

        <TextInput
          style={styles.input}
          onChangeText={value => setEmail(value)}
          textAlign={'center'}
          placeholder="Enter your email"
          autoCapitalize='none'
          autoComplete="off"
          autoCorrect='none'
          selectTextOnFocus={false}
          underlineColor={'transparent'}
        />
        <Text style={styles.buttonText}>Password</Text>

        <TextInput
          style={styles.input}
          onChangeText={value => setPassword(value)}
          textAlign={'center'}
          placeholder="Enter password"
          autoCapitalize='none'
          autoComplete="off"
          autoCorrect='none'
          selectTextOnFocus={false}
          underlineColor={'transparent'}
        />


      </View>


      <View style={styles.signInMenu}>
        <Pressable style={styles.signInButton} onPress={checkTextInput}>
          <Text style={styles.buttonText}>Sign in</Text>
        </Pressable>
        <Button style={styles.backButton} title="Go back" onPress={() => navigation.navigate('MainLoginScreen')} />
      </View>


    </View>
  );


};

const styles = StyleSheet.create({

  container: {
    height: '100%',
    backgroundColor: '#73172F',

  },
  header: {
    height: 85,
    width: '100%',
    flexDirection: 'column',
    marginTop: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoMenu: {
    height: 350,
    marginRight: 40,
    marginLeft: 40,
    marginTop: 75,
    padding: 30,
    backgroundColor: '#211626',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    borderRadius: 20,

  },
  signInMenu: {
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
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


  signInButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 20,
    backgroundColor: '#211626',
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

export default EmailSignIn1;
