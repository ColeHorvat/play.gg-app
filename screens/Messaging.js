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
				<RMessage />
				<SMessage />
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
						onPress={() => { console.log("SEND")  }}
					>

					</Icon.Button>
				</View>

			</View>
		</View>
	)
}

const RMessage = () => {
	return (
		<View style = { [styles.balloon, styles.itemIn, { backgroundColor: "#4F4F4F" }]}>
			<Text style = { {paddingTop: 5, color: 'white'} }>Hey! This is a very long message aaaaaaahhhhhh</Text>
		</View>
	)
}

const SMessage = () => {
	return (
		<View style = { [styles.balloon, styles.itemOut, { backgroundColor: "#B1132F" }]}>
			<Text style = { {paddingTop: 5, color: 'white'} }>Hey! This is a very long message aaaaaaaaaaaaaahhhhhhh</Text>
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
		width: '70%',
		marginBottom: 16,
		marginHorizontal: 12,
		borderWidth: 1,
		padding: 10,
		borderRadius: 25,
		backgroundColor: '#FFFFFF'
	},
	messageButtons: {
		width : 45,
		height : 45,
		marginHorizontal: 2,
		marginBottom: 12,

	},
	item: {
		marginVertical: 14,
		flexDirection: 'row',
		flexWrap: "wrap"
	},
	itemIn: {
		alignSelf: 'flex-start',
		marginLeft: 10
	},
	itemOut: {
		alignSelf: 'flex-end',
		marginRight: 10
	},
	balloon: {
		maxWidth: "50%",
		paddingHorizontal: 15,
		paddingTop: 10,
		paddingBottom: 15,
		borderRadius: 20,
		margin: 12
	},
	arrowContainer: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		zIndex: -1
	},
	arrowLeftContainer: {
		justifyContent: 'center',
		alignItems: 'flex-start',
	},
	arrowLeft: {
		left: -20,
	},
	arrowRightContainer: {
		justifyContent: 'flex-end',
		alignItems: 'flex-end'
	}
});

export default Messaging