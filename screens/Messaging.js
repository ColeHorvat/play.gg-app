import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { t } from 'react-native-tailwindcss';
import Constants from 'expo-constants'

const Messaging = ({ navigation }) => {
	return (
		<View style={ styles.container }>
			<StatusBar style="light" />
			{/* HEADER */}
			<View style={styles.header}>
				<Image />
				<Text>SirPancakes</Text>
				<Text>Playing: Halo Infinite</Text>
			</View>

			<ScrollView>

			</ScrollView>
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
		marginTop: Constants.statusBarHeight
	},
});

export default Messaging