import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { t } from 'react-native-tailwindcss';

const YourProfile = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <Text style={styles.header}>This is the YourProfile</Text>
      <StatusBar style="auto" />

    </View>


    
  )
}

export default YourProfile

 const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#73172f',
      alignItems: 'center',
      justifyContent: 'center',
   },
   header: {
     backgroundColor: '#73172f'
   }
});