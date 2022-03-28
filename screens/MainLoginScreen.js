import React from 'react';
import { Button, Image, Text, View, ImageBackground, StyleSheet, Pressable, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants'
import Icon from 'react-native-vector-icons/Feather'

import * as Google from 'expo-auth-session/providers/google';

import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

const LoginView = ({ navigation }) => {

  const [accessToken, setAccessToken] = React.useState();
  const [message, setMessage] = React.useState();

  const [request, response, promptAsynch] = Google.useAuthRequest({
    iosClientId: '789952944154-78t0fm0tktkgmd16g5j9194kql5b7epe.apps.googleusercontent.com',
    androidClientId: '789952944154-i9eq419bevq8f8si0g61j71ka0rd5eo1.apps.googleusercontent.com',
    expoClientId: '789952944154-6u9k3ee5d1gsl8rv8dbpfduqb4845sal.apps.googleusercontent.com'
    
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      setAccessToken(response.authentication.accessToken);
    }
  }, [response]);

  async function getUserData() {
    let userInfoResponse = await fetch("https://googleapis.com./userinfo/v2/me",
    {
      headers: { Authorization: 'Bearer ${accessToken}'}
    });

    userInfoResponse.json().then(data => {
      setUserInfo(data);
    });
  }
 

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
      <View style={styles.signUpMenu}>

        <Image 
          source={require('../assets/facebook_auth.png')}
          style={styles.authImg}
        />
        <Image 
          source={require('../assets/twitter_auth.png')}
          style={styles.authImg}
        />
        <TouchableOpacity 
          title={accessToken ? "Get User Data" : "Login" }
          onPress={accessToken ? getUserData : () => { promptAsynch({useProxy: false, showInRecents: true})}}>
          
          <Image source={require('../assets/google_auth.png')}
  
          />
        </TouchableOpacity>
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
