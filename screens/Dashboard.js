import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Button, Image, TouchableOpacity, ScrollView, Pressabble } from 'react-native';
import { StatusBar } from 'expo-status-bar'
import Constants from 'expo-constants';
import ProfilePicture from 'react-native-profile-picture'



const Dashboard = ({ navigation }) => {
	const API_KEY = '17CB3BD18765C9F04AAB50A3EC9CA2A3'
	const RB_STEAMID = '76561198114121125';
	const RB_URL = 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=' + API_KEY + '&steamids=' + RB_STEAMID;
	const BASE_URL = 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=' + API_KEY + '&steamids=';

	const [show, setShow] = useState(false);
	const [didLoad, setDidLoad] = useState(false);
	const [friends, setFriends] = useState([ 
		{
			name: '',
			status: null,
			gamePlaying: '',
			SteamID: '76561198124794637',
			Platform: 'Steam'
		},
	]);

	function getSteamInfo() {
			friends.map((friend, i) => {
				fetch(BASE_URL + friend.SteamID)
				.then((response) => response.json())
				.then((responseJson) => {
					return responseJson['response']['players']['0'];
				})
				.then(player => {
					// friend.name = player['personaname']
					// friend.status = player['personastate'];
					// if(player['gameextrainfo'])
					// 	friend.gamePlaying = player['gameextrainfo']
					
					let updatedFriends = [...friends]
					console.log(updatedFriends + i)
					updatedFriends[i].name = player['personaname']
					updatedFriends[i].status = player['personastate'];
					if(player['gameextrainfo'])
						if(player['gameextrainfo'].length < 19)
							updatedFriends[i].gamePlaying = player['gameextrainfo']
						else {
							updatedFriends[i].gamePlaying = player['gameextrainfo'].substring(0, 18) + '...' 
						}
					else 
						updatedFriends[i].gamePlaying = ''
					
					setFriends(updatedFriends)
				})
				.catch(error => {
					console.error(error);
				})
			})
	}

	useEffect(() => {
		if(!didLoad) {
			getSteamInfo()
			setDidLoad(true)
		}

		const interval = setInterval(() => {
			getSteamInfo()
		}, 2000)
		return () => clearInterval(interval)
	}, [])

	return (
		<View style={styles.container}>
			<StatusBar style="light" />
			{/* HEADER */}
			<View style={styles.header}>

				<Image style={styles.logo} source={require('../assets/playgg_logo_concept.png')} />

				<View>
					{show && (<Text>This will be shown when pressed</Text>)}
				</View>

				<TouchableOpacity
					onPress={
						() => { setShow(!show) }

					}>

					<Image style={styles.menuLogo} source={require('../assets/hamburger_icon.png')} />

				</TouchableOpacity>

			</View>

			<ScrollView>
				{friends.map(friend => (
					<TouchableOpacity >
						<View style={ styles.cardContainer }>
							<View style={ { display: 'flex', flexDirection: 'row', alignSelf:'flex-start', marginLeft: 12, marginTop: 12 } }>
								<ProfilePicture 
									width={75}
									height={75}
									requirePicture={require('../assets/avatar.jpg')}
									isPicture={true}
									user="SirPancakes"
									URLPicture="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/76/76d6ea598ba63453a9ae8e953096bd00ce478f55.jpg"
								/>
							</View>

							<View style={ [styles.header, {justifyContent: 'center', flexDirection: 'column', marginHorizontal: 24, marginBottom: 42}] }>
								<Text style={ [styles.headerNameText, {color: 'white', fontSize: 24}] }> {friend.name} </Text>
								<View style={ {flexDirection: 'row', alignItems: 'center'} }>
									{friend.status >= 1 && (
										<Image 
											source={require('../assets/steam_logo.png')}
											style = { {width: 20, height: 20} }
										/>
									)}

									<Text style={ [styles.headerNameText, {color: 'white', fontSize: 16}] }> {friend.gamePlaying != '' ? "Playing: " + friend.gamePlaying : ''} 
										<Text style={ [styles.headerNameText, {color: 'white', fontSize: 16}]}>
											{
												StatusText(friend)
											}	
										</Text> 
									</Text>
								</View>
							</View>
						</View>
					</TouchableOpacity>
				))}
			</ScrollView>
		</View>
	)
	
	function StatusText(friend) {
			if(friend.gamePlaying === '') {
				switch(friend.status) {
					case 0:
						return 'Offline'
					case 1:
						return 'Online'
					case 2:
						return 'Busy'
					case 3:
						return 'Away'
					case 4: 
						return 'Snooze'
					case 5:
						return 'Online'
					case 6:
						return 'Online'
					default:
						return 'Loading...'
				}
			}
		}
	}




const styles = StyleSheet.create({
	container: {
		height: '100%',
		width: '100%',
		backgroundColor: '#211626'
	},

	header: {
		flexDirection: "row",
		backgroundColor: '#73172f',
		justifyContent: 'space-between',
		marginTop: Constants.statusBarHeight,
	},

	logo: {
		width: 75,
		height: 75,
	},

	menuLogo: {
		width: 75,
		height: 75,

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
	cardContainer: {
		height: 150,
		width: '100%',
		backgroundColor: '#73172F',
		marginVertical: 24,
		flexDirection: 'row',
	}

});

export default Dashboard