import React, { useState } from 'react'
import { Text, View, StyleSheet, Button, Image, TouchableOpacity, } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { t } from 'react-native-tailwindcss';
import ProfilePicture from 'react-native-profile-picture'


const Dashboard = ({ navigation }) => {

	const [show, setShow] = useState(false);

	return (
		<View style={styles.container}>

			{show && (

				<View style={styles.profile}>


					<TouchableOpacity style={{ alignSelf: 'flex-start', marginLeft: 8, }}
						onPress={
							() => { setShow(!show) }
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

						<View style={{ alignItems: 'center', borderTopWidth: .5, borderTopColor: '#707070', width: '100%'}}>
							<View>
								<Text style={styles.platformsText}>Platforms</Text>
							</View>
						</View>

						<View style={{ alignItems: 'center', borderTopWidth: .5, borderTopColor: '#707070'}}>
							<View>
								<Text style={styles.platformsText}>Friends</Text>
							</View>
							<View style={{ alignSelf: 'flex-start', flexDirection: 'row', margin: 20 }}>
								<ProfilePicture
									width={50}
									height={50}
									requirePicture={require('../assets/avatar.jpg')}
									isPicture={true}
									user="RabidBlueberry"
								/>
								<Text style={styles.nameText}>   SirPancakes</Text>
							</View>
						</View>


					</View>

				</View>)}


			{/* HEADER */}
			<View style={styles.header}>

				<Image style={styles.logo} source={require('../assets/playgg_logo_concept.png')} />


				<TouchableOpacity
					onPress={
						() => { setShow(!show) }

					}>
					<View style={styles.menuLogoContainer}>
						<Image style={styles.menuLogo} source={require('../assets/hamburger_icon.png')} />
					</View>
				</TouchableOpacity>

			</View>


		</View>

	)
}




export default Dashboard

const styles = StyleSheet.create({
	container: {
		height: '100%',
		width: '100%',
		backgroundColor: '#211626'
	},

	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		backgroundColor: '#73172f'
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


	},

	nameText: {
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
});