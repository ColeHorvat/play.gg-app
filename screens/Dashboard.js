import React, { useState } from 'react'
import { Text, View, StyleSheet, Button, Image, TouchableOpacity, ScrollView, Pressabble } from 'react-native';
import { StatusBar } from 'expo-status-bar'
import Constants from 'expo-constants';
import ProfilePicture from 'react-native-profile-picture'



const Dashboard = ({ navigation }) => {

	const [show, setShow] = useState(false);
	const [friends, setFriends] = useState([ 
		{
			name: '',
			status: '',
			gamePlaying: '',
			SteamID: '76561198124794637'
		},
		{

		}
	]);

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
								/>
							</View>

							<View>
								<Text> </Text>
								<View>
									<Image />
									<Text> </Text>
								</View>
							</View>
						</View>
					</TouchableOpacity>
				))}
			</ScrollView>
		</View>
	)


}


const styles = StyleSheet.create({
	container: {
		height: '100%',
		width: '100%',
		backgroundColor: '#211626'
	},

	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		backgroundColor: '#73172f',
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
	}

});

export default Dashboard