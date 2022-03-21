import React, {useState} from 'react'
import { Text, View, StyleSheet, Button, Image, TouchableOpacity,  } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { t } from 'react-native-tailwindcss';


const Dashboard = ({ navigation }) => {


const [show, setShow] = useState(false);


  return (
    <View style={styles.container}>

			{/* HEADER */}
			<View style={styles.header}>
        
        <Image style={styles.logo} source={require('../assets/playgg_logo_concept.png')} />


        <TouchableOpacity 
        onPress = {
          () => 
          
          {setShow(!show)}

          }>

            <Image style={styles.menuLogo} source={require('../assets/hamburger_icon.png')} />

        </TouchableOpacity>

			</View> 

      {show && (
        <View style={styles.profile}>
          <Text style={styles.nameText}>RabidBlueberry</Text>

          {/* Steam Status Here */}
          <Text style={styles.statusText}>Online</Text>

          <Text style={styles.platformsText}>Platforms</Text>

          <Text style={styles.platformsText}>Friends</Text>

         

        </View>)}
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
    width: 75,
    height: 75,
    
   },


   profile:{
    alignSelf: 'flex-end',
    alignItems:'center',
    backgroundColor:'#2b222a',
    height: '100%',
    width: '75%',

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