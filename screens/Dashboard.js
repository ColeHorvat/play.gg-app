import React from 'react'
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { t } from 'react-native-tailwindcss';

function Dashboard() {
  return (
    <View style={[t.flex1, t.justifyCenter, t.itemsCenter]}>
      <Text>This is the dashboard</Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default Dashboard