import React from 'react';
import { TextInput, Button, Image, Text, View, ImageBackground, StyleSheet, Pressable, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants'
import Icon from 'react-native-vector-icons/Feather'




const EmailSignUp3 = ({ navigation }) => {

  const [text, onChangeText] = React.useState("Text");

  return (
    /* CONTAINER  */
    <View style={styles.container}>
      <StatusBar style='light' />
      <ImageBackground source={require('./assets/background_1.png')} resizeMode='stretch' style={styles.backgroundImage}>

        <View style={styles.header}>
          <Button style={styles.backButton} title="Go back" onPress={() => navigation.navigate('MainLoginScreen')} />

        </View>

        <View style={styles.infoMenu}>
          <Text style={styles.buttonText}>Create Password:</Text>

          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder="Enter your password"
          />
          <Text style={styles.buttonText}>Verify Password</Text>

          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder="Re-enter your password"
          />


        </View>


        <View style={styles.signInMenu}>
          <Pressable style={styles.nextButton} onPress={() => navigation.navigate('EmailSignIn1')}>
            <Text style={styles.buttonText}>Next</Text>
          </Pressable>
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
  header: {
    height: 50,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoMenu: {
    height: 500,
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 40,

    padding: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',

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
