import React, {useState} from 'react'
import { Text, View, StyleSheet, Button, Image, TouchableOpacity,  } from 'react-native';




const Dashboard = ({ navigation }) => {

  const [show, setShow] = useState(false);


  return (
    <View style={styles.container}>

			{/* HEADER */}
			<View style={styles.header}>
        
        <Image style={styles.logo} source={require('../assets/playgg_logo_concept.png')} />

        <View>
          {show && (<Text>This will be shown when pressed</Text>)}
        </View>

        <TouchableOpacity 
        onPress = {
          () => 
          
          {setShow(!show)}

          }>

            <Image style={styles.menuLogo} source={require('../assets/hamburger_icon.png')} />

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
	}
  
});