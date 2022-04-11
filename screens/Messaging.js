import React, { useState, useRef } from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, Image}from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants'
import Icon from 'react-native-vector-icons/Feather'
import InviteCard from './components/Messaging/InviteCard'

{ /* MESSAGING PAGE */}

const Messaging = ({ navigation, route }) => {
	// LogBox.ignoreAllLogs()
	const [messageData, setMessageData] = useState([]);
	const [messageText, setMessageText] = useState('');
	const [inviteActive, setInviteActive] = useState(route.params.inviteActive);
	const [addedFriends, setAddedFriends] = useState([]);
	
	const scrollView = useRef(null);
	const textInput = useRef(null);

	const messages = messageData.map((message) => {
		if(message.method === 'send') {
			return <SMessage content={message.content}/>
		} else {
			return <RMessage content={message.content} />
		}
	})

	return (
		<View style={ [ styles.container ]}>
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
				<View>
					<Text style={ [styles.headerNameText, { color: 'white' } ] }>SirPancakes</Text>
					<Text>
					{route.params.friend.status >= 1 && (
										<Image 
											source={require('../assets/steam_logo.png')}
											style = { {width: 20, height: 20} }
										/>
					)}
					<Text style={ [styles.headerNameText, {color: 'white', fontSize: 16}] }> {route.params.friend.gamePlaying != '' ? "Playing: " + route.params.friend.gamePlaying : ''} 
							<Text style={ [styles.headerNameText, {color: 'white', fontSize: 16}]}>
								{
									StatusText(route.params.friend)
								}	
							</Text> 
						</Text>
					</Text>
				</View>
			</View>

			<ScrollView
				ref={scrollView}
				onContentSizeChange={() => {
					scrollView.current.scrollToEnd({ animated: true, index: -1 }, 200);
				}}
			>
				{ messages }
			</ScrollView>

			<View style = { styles.inputContainer }>
				<TextInput
					ref={textInput}
					style={ styles.messageInput }
					placeholder="Send a message..."
					onChangeText={messageText => setMessageText(messageText)}
					defaultValue={messageText}
				/>

				<View style = { styles.messageButtons }> 
					<Icon.Button 
						name="mail"
						size={25}
						color="#D92344"
						backgroundColor="#211626"
						onPress={ toggleInvite }
					>

					</Icon.Button>

				</View>
				
				<View style = { styles.messageButtons }>
					<Icon.Button 
						name="send"
						size={25}
						color="#D92344"
						backgroundColor="#211626"
						onPress={ sendMessage }
					>

					</Icon.Button>
				</View>


			</View>

			{inviteActive && (

				<InviteCard 
					setMessageData={setMessageData}
					toggleInvite={ toggleInvite }
					messageData={messageData}
				/>
			)}
		</View>
	)

	{ /* MESSAGE COMPONENTS */}

	function RMessage(props) {
		return (
			<View style = { [styles.balloon, styles.itemIn, { backgroundColor: "#4F4F4F" }]}>
				<Text style = { {paddingTop: 5, color: 'white'} }>{ props.content }</Text>
			</View>
		)
	}

	function SMessage(props) {
		return (
			<View style = { [styles.balloon, styles.itemOut, { backgroundColor: "#B1132F" }]}>
				<Text style = { {paddingTop: 5, color: 'white'} }>{ props.content }</Text>
			</View>
		)
	}

	{ /* UTIL FUNCTIONS */}

	function sendMessage() { 
		if(messageText != '') {
			setMessageData([...messageData, { method: 'send', content: messageText }])
			setMessageText('')
			textInput.current.clear()
		}
	}

	function receiveMessage() {
		setMessageData([...messageData, { method: 'receive', content: 'NEW MESSAGE'}])
	}

	function toggleInvite() {
		setInviteActive(!inviteActive)
	}

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


{ /* STYLES */}

const styles = StyleSheet.create({

	container: {
		height: '100%',
		width: '100%',
		backgroundColor: '#211626',
	},
	header: {
		height: '10%',
		width: '100%',
		backgroundColor: '#73172F',
		marginTop: Constants.statusBarHeight,
		flexDirection: 'row',
	},
	icon: {
		marginHorizontal: 12,
	},
	iconContainer: {
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
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
	inputContainer: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
	},
	messageInput: {
		height: 40,
		width: '70%',
		marginBottom: 16,
		marginHorizontal: 12,
		borderWidth: 1,
		padding: 10,
		borderRadius: 25,
		backgroundColor: '#FFFFFF'
	},
	inviteMessageInput: {
		height: 40,
		width: '70%',
		marginHorizontal: 12,
		borderBottomWidth: 1,
		borderColor: '#707070',
		paddingHorizontal: 10,
		backgroundColor: '#211626',
		color: 'white',
		fontSize: 18,
		
	},
	messageButtons: {
		width : 55,
		height : 45,
		marginBottom: 12,

	},
	inviteSendContainer: {
		position: 'absolute',
		right: 0,
		bottom: 0,
		marginHorizontal: 4,
	},
	inviteSendButton: {
		width : 45,
		height : 45,
	},
	item: {
		marginVertical: 14,
		flexDirection: 'row',
		flexWrap: "wrap"
	},
	itemIn: {
		alignSelf: 'flex-start',
		marginLeft: 10
	},
	itemOut: {
		alignSelf: 'flex-end',
		marginRight: 10
	},
	balloon: {
		maxWidth: '70%',
		paddingHorizontal: 15,
		paddingTop: 10,
		paddingBottom: 15,
		borderRadius: 20,
		margin: 12
	},
	arrowContainer: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		zIndex: -1
	},
	arrowLeftContainer: {
		justifyContent: 'center',
		alignItems: 'flex-start',
	},
	arrowLeft: {
		left: -20,
	},
	arrowRightContainer: {
		justifyContent: 'flex-end',
		alignItems: 'flex-end'
	},
	inviteContainer: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: '#211626',
		height: '50%'
	}
});

export default Messaging