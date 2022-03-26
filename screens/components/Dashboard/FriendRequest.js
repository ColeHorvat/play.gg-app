import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import ProfilePicture from 'react-native-profile-picture'
import AsyncStorage from '@react-native-async-storage/async-storage'

function FriendRequest(props) {

    async function addFriend() {
        

        props.friends[0].show = true
        props.setShowRequest(false)
        // props.setFriends(props.friends.concat(FRIEND))
        console.log(props.friends)
    }




    return (
        <View style={{ backgroundColor: 'red', flexDirection: 'row' }}>
            <ProfilePicture
                width={40}
                height={40}
                requirePicture={require('../../../assets/avatar.jpg')}
                isPicture={true}
                user="SirPancakes"
            />
            <Text>Sirpancakes</Text>
            <Icon.Button
                name="check"
                size={20}
                color="green"
                onPress={addFriend}

            />
            <Icon.Button
                name="x"
                size={20}
                color="red"
                onPress={() => console.log("REJECT REQUEST")}
            />
        </View>
    )
}

export default FriendRequest