import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { t } from 'react-native-tailwindcss';

const Dashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>This is the dashboard</Text>
      <StatusBar style="auto" />

      


      
    </View>

    
  )
}

export default Dashboard

 const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#211626',
      alignItems: 'center',
      justifyContent: 'center',
   },
   header: {
     backgroundColor: '#73172f'
   }
});