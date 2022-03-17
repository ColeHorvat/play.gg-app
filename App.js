import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { t } from 'react-native-tailwindcss';
import React, { useState, useEffect } from 'react';
import ApiCalendar from 'react-google-calendar-api';

export default function App() {
	const API_KEY = '17CB3BD18765C9F04AAB50A3EC9CA2A3';
	const RB_STEAMID = '76561198114121125';
	const URL = 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=' + API_KEY + '&steamids=' + RB_STEAMID;

	const [player, setPlayer] = useState([]);
	const [loading, setLoading] = useState(true)

	// Steam API Hook
	useEffect(() => {
		setInterval(() => {
			fetch(URL)
			.then((response) => response.json())
			.then((responseJson) => {
				return responseJson['response']['players']['0'];
			})
			.then(player => {
				setPlayer(player);
				setLoading(false);
			})
			.catch(error => {
				console.error(error);
			})
		}, 1000)
	})

	function handleItemClick(event, name) {
		if(name === 'signin')
			ApiCalendar.handleAuthClick();
		else if(name === 'signout')
			ApiCalendar.handleSignoutClick();
	}

	return (
		<View style={[t.flex1, t.justifyCenter, t.itemsCenter]}>
			<Text> {loading ? 'Loading...' : player['personaname'] + " " + player['personastate']} </Text> 
			<Button 
				title="Google Calendar"
				onPress={(e) => handleItemClick(e, 'signin')}
			/> 
			<StatusBar style="auto"/>
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