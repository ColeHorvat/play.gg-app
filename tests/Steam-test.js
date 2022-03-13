import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { t } from 'react-native-tailwindcss';

export default function App() {
  return (
    <View style={[t.flex1, t.justifyCenter, t.itemsCenter]}>
      <Text>Steam Test!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});