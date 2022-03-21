import React from 'react';
import { Button, Image, Text, View, ImageBackground, StyleSheet, Pressable, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants'
import Icon from 'react-native-vector-icons/Feather'


const LoginView = ({ navigation }) => {

  return (
    /* CONTAINER  */
    <View style={styles.container}>
      <StatusBar style='light' />
      <View style={styles.header}>
        <Image
          source={require('./assets/playgg_logo_concept_text.png')}
          style={styles.icon}
        />
      </View>
      <View style={styles.signUpMenu}>

        <Image 
          source={require('./assets/facebook_auth.png')}
          style={styles.authImg}
        />
        <Image 
          source={require('./assets/twitter_auth.png')}
          style={styles.authImg}
        />
        <Image
          source={require('./assets/google_auth.png')}
          style={styles.authImg}
        />
        <Text style={styles.signUpOptionText} > ⎯ OR ⎯</Text>
        <Pressable style={styles.signUpButton} onPress={() => navigation.navigate('EmailSignUp1')}>
          <Text style={styles.buttonText}>Sign up with email</Text>
        </Pressable>

      </View>
      <View style={styles.signInMenu}>
        <Text style={styles.signInText}>Already have an account?</Text>
        <Pressable style={styles.signInButton} onPress={() => navigation.navigate('EmailSignIn1')}>
          <Text style={styles.buttonText}>Sign in</Text>
        </Pressable>
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
    flexDirection: 'row',
    marginTop: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUpMenu: {
    height: 350,
    marginRight: 40,
    marginLeft: 40,
    marginTop: 75,
    padding: 30,
    backgroundColor: '#fff',
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
  authImg: {
    flex: 1,
    width: 175,
    height: 50,
    resizeMode: 'contain'

  },

  signUpButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
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
  },


  signUpOptionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#211626',
    marginTop: 10

  },
  signInText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',

  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    color: 'white',
  },



});

export default LoginView
