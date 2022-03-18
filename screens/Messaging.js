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

			<View styles={ styles.inputContainer }>
				<TextInput
					style={ styles.inputText }
				/>
				<Button
					title=""
				/>
				<Icon.Button 
					name="send"
					color="#D92344"
					backgroundColor="#73172F"
					iconStyle={ styles.messageButtons }

				>

				</Icon.Button>
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
		height: '10%',
		width: '100%',
		backgroundColor: '#73172F',
		marginTop: Constants.statusBarHeight,
		flexDirection: 'row',
	},
	icon: {
		maxWidth: 75,
		maxHeight: 75
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
		position: 'absolute',
		bottom: 0,
		left: 0,
	},
	messageInput: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
	},
	messageButtons: {
		
	}
});

export default Messaging