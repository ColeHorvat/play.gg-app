import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Pressable, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { t } from 'react-native-tailwindcss';
import Constants from 'expo-constants'
import Icon from 'react-native-vector-icons/Feather'

const Messaging = ({ navigation }) => {
	return (
		<View style={ styles.container }>
			<StatusBar style="light" />
			{/* HEADER */}
			<View style={styles.header}>
				<View style={styles.iconContainer}>
					<Image 
						source={require('../assets/images/playgg_logo_image_only.png')}
						style={ styles.icon }	 
					/>
				</View>
				<View>
					<Text style={ styles.headerNameText }>SirPancakes</Text>
					<Text>
						<Text style={ styles.headerPlayingText }>Playing:</Text>
						{/* IMAGE HERE */} 
						<Text style={ styles.headerGameText }> Halo Infinite</Text>
					</Text>
				</View>
			</View>

			<ScrollView>
				{ /* MESSAGES */ } 
			</ScrollView>

			<View style = { styles.inputContainer }>
				<TextInput
					style={ styles.messageInput }
					placeholder="Send a message..."
				/>

				<View style = { styles.messageButtons }> 
					<Icon.Button 
						name="inbox"
						color="#D92344"
						backgroundColor="#211626"
						onPress={() => { console.log("INVITE") }}
					>

					</Icon.Button>

				</View>
				
				<View style = { styles.messageButtons }>
					<Icon.Button 
						name="send"
						color="#D92344"
						backgroundColor="#211626"
						onPress={() => { console.log("SEND") }}
					>

					</Icon.Button>
				</View>

			</View>
		</View>
	)
}

const SentMessage = () => {
	return (
		<View>
			
		</View>
	)
}

const receivedMessage = () => {
	return (
		<View>

		</View>
	)
}

const styles = StyleSheet.create({

	container: {
		height: '100%',
		width: '100%',
		backgroundColor: '#211626',
	},
	header: {
		height: 85,
		width: '100%',
		backgroundColor: '#73172F',
		marginTop: Constants.statusBarHeight,
		flexDirection: 'row',
	},
	icon: {
		width: 75,
		height: 75
	},
	iconContainer: {
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	headerNameText: {
		fontSize: 25,
		fontWeight: 'bold',
		color: '#D92344',
		marginTop: 4,
		marginBottom: 4
	},
	headerPlayingText: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#076600'
	},
	headerGameText: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#FFFFFF'
	},
	inputContainer: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
	},
	messageInput: {
		height: 40,
		width: '65%',
		marginBottom: 12,
		marginHorizontal: 12,
		borderWidth: 1,
		padding: 10,
		borderRadius: 25,
		backgroundColor: '#FFFFFF'
	},
	messageButtons: {
		width : 45,
		height : 40,
		marginRight: 8,

	}
});

export default Messaging