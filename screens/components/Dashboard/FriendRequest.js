import { View, Text, StyleSheet} from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import ProfilePicture from 'react-native-profile-picture'
import AsyncStorage from '@react-native-async-storage/async-storage'

function FriendRequest(props) {

    async function addFriend() {
        
        props.friends[0].show = true
        props.setShowRequest(false)
    }

    return (
        <View style={{ backgroundColor: 'rgba(33, 22, 38, 75)', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 10, borderRadius: 10 }}>
            <ProfilePicture
                width={40}
                height={40}
                requirePicture={require('../../../assets/avatar.jpg')}
                isPicture={true}
                user="SirPancakes"
            />
            <Text style={[styles.nameText, {fontSize: 14, marginLeft: '3%'}]}>Sirpancakes</Text>
            <View style={[{flexDirection: 'row', marginLeft: '3%'}]}>
                <Icon.Button
                    name="check"
                    size={20}
                    color="green"
                    backgroundColor="rgba(33, 22, 38, 75)"
                    onPress={addFriend}

                />
                <Icon.Button
                    name="x"
                    size={20}
                    color="red"
                    backgroundColor="rgba(33, 22, 38, 75)"
                    onPress={() => console.log("REJECT REQUEST")}
                />
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

	menuLogoContainer: {
		alignItems: 'center',
		marginTop: 8,
		marginRight: 8,
	},

	container: {
		height: '100%',
		width: '100%',
		backgroundColor: '#211626'
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


export default FriendRequest