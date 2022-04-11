import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, LogBox } from 'react-native';
import { StatusBar } from 'expo-status-bar'
import Constants from 'expo-constants';
import ProfilePicture from 'react-native-profile-picture'
import Icon from 'react-native-vector-icons/Feather'
import FriendRequest from './components/Dashboard/FriendRequest';
import AsyncStorage from '@react-native-async-storage/async-storage'



const Dashboard = ({ navigation }) => {
	const API_KEY = '17CB3BD18765C9F04AAB50A3EC9CA2A3'
	const SP_STEAMID = '76561198124794637'
	const BASE_URL = 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=' + API_KEY + '&steamids=';
	
	LogBox.ignoreAllLogs()
	const [showProfile, setShowProfile] = useState(false);
	const [showRequest, setShowRequest] = useState(true);
	const [showPlatform, setShowPlatform] = useState(false);
	const [didLoad, setDidLoad] = useState(false);
	const [friends, setFriends] = useState([
		{
			name: '',
			status: null,
			gamePlaying: '',
			SteamID: SP_STEAMID,
			Platform: 'Steam',
			show: false,
		}
	]);

	function getSteamInfo() {
			friends.map((friend, i) => {
				fetch(BASE_URL + friend.SteamID)
				.then((response) => response.json())
				.then((responseJson) => {
					return responseJson['response']['players']['0'];
				})
				.then(player => {
					
					let updatedFriends = [...friends]
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
			// console.log(friends)
		}, 2000)
		return () => clearInterval(interval)
	}, [])

	return (
		<View style={styles.container}>
			<StatusBar style="light" />
			{/* HEADER */}
			<View style={styles.header}>

				<Image style={styles.logo} source={require('../assets/playgg_logo_concept.png')} />


				<TouchableOpacity
					onPress={
						() => { setShowProfile(!showProfile) }}
						
					>
					<View style={styles.menuLogoContainer}>
						<Image style={styles.menuLogo} source={require('../assets/hamburger_icon.png')} />
					</View>
				</TouchableOpacity>

			</View>

			{showProfile && (

				<View style={styles.profile}>


					<TouchableOpacity style={{ alignSelf: 'flex-start', marginLeft: 8, }}
						onPress={
							() => { setShowProfile(!showProfile) }
						}>

						<View style={styles.menuLogoContainer}>
							<Image style={styles.menuLogo} source={require('../assets/hamburger_icon.png')} />
						</View>

					</TouchableOpacity>


					<View style={{ marginTop: 18, alignItems: 'center' }}>
						<ProfilePicture
							width={75}
							height={75}
							requirePicture={require('../assets/avatar.jpg')}
							isPicture={true}
							user="RabidBlueberry"
						/>


						<View>
							<Text style={styles.nameText}>RabidBlueberry</Text>
						</View>

						<View>
							{/* Steam Status Here */}
							<Text style={styles.statusText}>Online</Text>
						</View>
							<Text style={styles.editprofileText} 
							onPress={() => navigation.navigate('EditProfile', {
								showPlatform: showPlatform, 
								setShowPlatform: setShowPlatform,
							})}>
								 Edit Profile 
							</Text>
						<View style={{ alignItems: 'center', borderTopWidth: .5, borderTopColor: '#707070', width: '100%'}}>
							<View>
								<Text style={styles.platformsText}>Platforms</Text>
								
							</View>
							{showPlatform && (
								<View style={{ alignSelf: 'flex-start', flexDirection: 'row', margin: 10 }}>
									<ProfilePicture
										width={40}
										height={40}
										requirePicture={require('../assets/steam_logo.png')}
										isPicture={true}
									/>
									<View>
										<Text style={[styles.nameText, {color: 'white', fontSize: 20, marginBottom: 0}]}>  Steam</Text>
										<Text style={[styles.nameText, {fontSize: 16, marginTop: 0} ]}>   Rab1dBlueberry</Text>
									</View>
								</View>
							)}

							{!showPlatform && (
								<View style={{padding: 5}}>
									<Text style={{fontSize: 16, color: 'white'}}>No platform linked</Text>
								</View>
							)}

						</View>
						
							
							

						<View style={{ alignItems: 'center', borderTopWidth: .5, borderTopColor: '#707070'}}>
							<View>
								<Text style={styles.platformsText}>Friends</Text>
							</View>
							

							{!showRequest && (		
								<View style={{ alignSelf: 'flex-start', flexDirection: 'row', margin: 20 }}>
									<ProfilePicture
										width={50}
										height={50}
										requirePicture={require('../assets/avatar.jpg')}
										isPicture={true}
									/>
									<Text style={styles.nameText}>   SirPancakes</Text>
								</View>
							)}
								


							{showRequest && (
								<FriendRequest 
									steamID = {'76561198124794637'}
									setFriends = {setFriends}
									friends = {friends}
									setShowRequest={setShowRequest}
								/>
							)}

						</View>


					</View>

				</View>)}



			<ScrollView>
				{friends.filter(friends => friends.show).map(friend => (
					<TouchableOpacity 
					>
						<View style={ styles.cardContainer }>
							<View style={ { display: 'flex', flexDirection: 'row', alignSelf:'flex-start', marginLeft: 12, marginTop: 12 } }>
								<ProfilePicture 
									width={75}
									height={75}
									requirePicture={require('../assets/avatar.jpg')}
									isPicture={true}
									user="SirPancakes"	
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
							<View style={ { position: 'absolute', right:0, top: 20, width : '15%', marginRight: 12} }>
								<Icon.Button 
									name='message-square'
									size={40}
									backgroundColor="#73172f"
									onPress={() => navigation.navigate('Messaging', { friend: friend, inviteActive: false })}
								>

								</Icon.Button>
							</View>

							<View style={ { position: 'absolute', right:0, bottom: 20, width : '15%', marginRight: 12} }>
								<Icon.Button 
									name='mail'
									size={35}
									backgroundColor="#73172f"
									onPress={() => navigation.navigate('Messaging', { friend: friend, inviteActive: true })}
								>

								</Icon.Button>
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

	logo: {
		width: 75,
		height: 75,
	},

	menuLogo: {
		width: 50,
		height: 50,

	},


	menuLogoContainer: {
		alignItems: 'center',
		marginTop: 8,
		marginRight: 8,
	},

	profile: {
		alignSelf: 'flex-end',
		alignItems: 'center',
		backgroundColor: '#2b222a',
		height: '100%',
		width: '75%',
		position: 'absolute',
		zIndex: 2,
		marginTop: Constants.statusBarHeight,


	},
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

	headerNameText: {
		fontSize: 25,
		fontWeight: 'bold',
		color: '#D92344',
		marginTop: 4,
		marginBottom: 4
	},

	statusText: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#076600',
		marginTop: 2,
		marginBottom: 4
	},

	platformsText: {
		fontSize: 25,
		fontWeight: 'bold',
		color: '#D92344',
		marginTop: 10,
		marginBottom: 10
	},
	editprofileText: {
		fontSize: 20,
		fontWeight: 'bold',
		textDecorationLine: 'underline',
		color: '#D92344',
		marginTop: 10,
		marginBottom: 5
	},
	cardContainer: {
		height: 150,
		width: '100%',
		backgroundColor: '#73172F',
		marginVertical: 24,
		flexDirection: 'row',
	},
	nameText: {
		fontSize: 25,
		fontWeight: 'bold',
		color: '#D92344',
		marginTop: 4,
		marginBottom: 4
	},

});

export default Dashboard
