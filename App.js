import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Dashboard from './screens/Dashboard'
import YourProfile from './screens/YourProfile'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
	<NavigationContainer>
		<Stack.Navigator>
			
		<Stack.Screen
				name="Dashboard"
				component={Dashboard}
				options={{ title: 'Dashboard', headerShown:true }}
			/>

			<Stack.Screen
				name="YourProfile"
				component={YourProfile}
				options={{ title: 'YourProfile', headerShown:true }}
			/>		



		</Stack.Navigator>
	</NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
