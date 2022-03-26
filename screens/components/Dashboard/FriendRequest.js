import {View, Text, Button} from 'react-native'
import React, {useState} from 'react'
import Icon from 'react-native-vector-icons/Feather'
import ProfilePicture from 'react-native-profile-picture'

function FriendRequest() {
  return (
      <View style={{backgroundColor: 'red', flexDirection: 'row'}}>
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

          />
          <Icon.Button 
            name="x"
            size={20}
            color="red"
          />
      </View>
  )
}

export default FriendRequest