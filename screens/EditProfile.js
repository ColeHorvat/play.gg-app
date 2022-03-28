import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput, SafeAreaView, Alert} from 'react-native';
import { StatusBar } from 'expo-status-bar'
import Constants from 'expo-constants';
import ProfilePicture from 'react-native-profile-picture'
import Icon from 'react-native-vector-icons/Feather'



const EditProfile = ({ navigation, route }) => {

    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] = React.useState(null);
	const [username, setUsername] = useState('')
	const [steamLinked, setSteamLinked] = useState(!route.params.showPlatform)

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
						color='white'
						backgroundColor='#73172F'
						onPress={() => navigation.navigate('Dashboard')}
					/>
				</View>
			</View>

            
            <View>
                <Text style={styles.platformsText}>Change Profile Name:</Text>    
            </View>

            

            <SafeAreaView>
                <TextInput
                    style={styles.input}
                    onChangeText={setUsername}
                    value={number}
                    placeholder="RabidBlueberry"
                />
            </SafeAreaView>



            <View>
                <Text style={styles.platformsText}>Add/Remove Platforms:</Text>    
            </View>

                <View style={[{alignItems: 'center', alignSelf: 'flex-start', marginLeft: 16, paddingHorizontal: 16}]}>
                    <TouchableOpacity style={{}}
						onPress={
							() => { 
								setSteamLinked(!steamLinked) 
								route.params.setShowPlatform(steamLinked)
								if(steamLinked)
									Alert.alert('Steam is now linked');
								else
									Alert.alert('Steam is unlinked')
							}
						}>

						<View style={styles.menuLogoContainer}>
							<Image style={styles.menuLogo} source={require('../assets/steam_logo.png')} />
                            
						</View>
                        
                        <View>
                            <Text style={styles.platformsText2}>Steam</Text> 
                        </View>
					</TouchableOpacity>
                    
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

	platformLinked: {
		backgroundColor: 'black',
	},

	platformUnlinked: {
		backgroundColor: 'rgba(33, 22, 38, 75)'
	},

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#3d2946',
        color: 'white'
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

	platformsText2: {
		fontSize: 18,
		color: 'white',
        fontWeight: 'bold',
		marginTop: 10,
		marginBottom: 10,
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

export default EditProfile
