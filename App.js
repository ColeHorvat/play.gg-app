import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Dashboard from './screens/Dashboard'
import Messaging from './screens/Messaging'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
	<NavigationContainer>
		<Stack.Navigator>
			<Stack.Screen 
				name="Messaging"
				component={Messaging}
				options = {{
					headerShown: false,
				}}
			/>

			<Stack.Screen
				name="Dashboard"
				component={Dashboard}
				options={{ title: 'Dashboard' }}
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
