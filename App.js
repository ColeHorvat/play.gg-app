import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Dashboard from './screens/Dashboard'
import Messaging from './screens/Messaging'
import LoginView from './screens/MainLoginScreen';
import EmailSignUpView1 from './screens/EmailSignUpScreen1';
import EmailSignUpView2 from './screens/EmailSignUpScreen2';
import EmailSignUpView3 from './screens/EmailSignUpScreen3';
import EmailSigninView1 from './screens/EmailSignInScreen1';
import UsernameCreationView from './screens/UsernameCreation';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
	<NavigationContainer>
		<Stack.Navigator initialRoutName="Route" headerMode="false" 
                       screenOptions={{headerShown: false }}>

			<Stack.Screen name="MainLoginScreen" component={LoginView} />

			<Stack.Screen
				name="Dashboard"
				component={Dashboard}
				options={{ title: 'Dashboard', headerShown:false }}
			/>
			<Stack.Screen 
				name="Messaging"
				component={Messaging}
				options = {{
					headerShown: false,
				}}
			/>
			
			





			
        	<Stack.Screen name="EmailSignUp1" component={EmailSignUpView1} />
        	<Stack.Screen name="EmailSignUp2" component={EmailSignUpView2} />
        	<Stack.Screen name="EmailSignUp3" component={EmailSignUpView3} />
			<Stack.Screen name="UsernameCreation" component={UsernameCreationView} />
        	<Stack.Screen name="EmailSignIn1" component={EmailSigninView1} />
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
