import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, LogBox } from 'react-native';
import { StatusBar } from 'expo-status-bar'
import Constants from 'expo-constants';
import ProfilePicture from 'react-native-profile-picture'
import Icon from 'react-native-vector-icons/Feather'



const Dashboard = ({ navigation }) => {

	return (
		<View style={styles.container}>
			<StatusBar style="light" />
			{/* HEADER */}
			<View style={styles.header}>

                <View style={styles.iconContainer}>
					
                    <Icon.Button 
						name="chevron-left"
						style={ styles.icon }
						size={40}	 
						color='black'
						backgroundColor='#73172F'
						onPress={() => navigation.navigate('Dashboard')}
					/>
				</View>
			</View>

            
            <View>
                <Text style={styles.platformsText}>Change Profile Name:</Text>    
            </View>

            <View>
                <Text style={styles.platformsText}>Add/Remove Platforms:</Text>    
            </View>

            <View>
                <Text style={styles.platformsText}>*Save Changes Button Here*</Text>    
            </View>
		</View>

	)
	
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
    icon: {
		marginHorizontal: 12,
	},
	iconContainer: {
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
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
        height: '10%',
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
		marginBottom: 10,
        marginLeft: 20
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
