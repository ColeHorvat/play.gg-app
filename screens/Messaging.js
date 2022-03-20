import React, { useState, useRef } from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants'
import Icon from 'react-native-vector-icons/Feather'
import DateTimePicker from '@react-native-community/datetimepicker'

{ /* MESSAGE DATA */}

// const messageData = [
// 	{
// 		method: 'send',
// 		content: 'This is a test message'
// 	},
// 	{
// 		method: 'receive',
// 		content: 'This is a test message'
// 	}	
// ]



{ /* MESSAGING PAGE */}

const Messaging = ({ navigation }) => {

	const [messageData, setMessageData] = useState([]);
	const [messageText, setMessageText] = useState('');
	const [inviteActive, setInviteActive] = useState(true);
	const [addedFriends, setAddedFriends] = useState([]);

	const [date, setDate] = useState(new Date());
	const [startTime, setStartTime] = useState(new Date())
	const [endTime, setEndTime] = useState(new Date())
	const [mode, setMode] = useState('date');
	const [show, setShow] = useState(false);
	const [timeMode, setTimeMode] = useState('start');
	
	const scrollView = useRef(null);
	const textInput = useRef(null);

	const FRIENDS = {
		"1":"SirPancakes"
	}

	const messages = messageData.map((message) => {
		if(message.method === 'send') {
			return <SMessage content={message.content}/>
		}
	
		return <RMessage content={message.content} />
	})

	return (
		<View style={ [ styles.container ]}>
			{ console.log(show) }
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
					/>
				</View>
				<View>
					<Text style={ styles.headerNameText }>SirPancakes</Text>
					<Text>
						<Text style={ styles.headerPlayingText }>Playing:</Text>
						{/* IMAGE HERE */} 
						<Text style={ styles.headerGameText }> Halo Infinite</Text>
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
						name="inbox"
						color="#D92344"
						backgroundColor="#211626"
						onPress={ toggleInvite }
					>

					</Icon.Button>

				</View>
				
				<View style = { styles.messageButtons }>
					<Icon.Button 
						name="send"
						color="#D92344"
						backgroundColor="#211626"
						onPress={ sendMessage }
					>

					</Icon.Button>
				</View>


			</View>

			{inviteActive && (

				<InviteCard />
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

	{ /* INVITE COMPONENTS */}

	function InviteCard(props) {

		// DATE PICKER STATES & FUNCTIONS



		const onChange = (event, selectedDate) => {
			if(mode === 'date') {
				const currentDate = selectedDate || date;
				setShow(Platform.ios);
				const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}

				setDate(currentDate);

				console.log(date.toLocaleDateString())
			} else {
				if(timeMode === 'start') {
					const currentStartTime = selectedDate || startTime;
					setShow(Platform.ios);
					setStartTime(currentStartTime.toLocaleTimeString());

					console.log(startTime)

				} else if(timeMode === 'end') {
					const currentEndTime = selectedDate || endTime;
					setShow(Platform.ios);
					setEndTime(currentEndTime.toLocaleTimeString());


					console.log(endTime);
				}
			}

			
		}

		const showMode = (currentMode) => {
			setShow(true)
			setMode(currentMode)
		}

		const showDatepicker = () => { 
			showMode('date');
		}

		const showStartTimepicker = () => {
			setTimeMode('start')
			showMode('time');
		}

		const showEndTimepicker = () => {
			setTimeMode('end')
			showMode('time')
		}


		return (
			<View style = { [styles.inviteContainer] }>
				<View style = { [styles.header, { backgroundColor: '#2B222E', alignItems: 'center', justifyContent: 'center'}]}>
					<View style = { [{ alignSelf: 'flex-start', position: 'absolute', left: 0}]}>
						<Icon.Button 
							name="x"
							style={ [styles.icon, { alignSelf: 'flex-start'}] }
							size={30}	 
							color='white'
							backgroundColor='#2B222E'
							onPress={ toggleInvite }
						/>
					</View>
									

					<Text style ={[ styles.headerNameText, {} ]}>Create An Invite</Text>
				</View>

				<View style={[ {marginBottom: 20}]}>
					<TextInput 
						style={ [styles.inviteMessageInput, { marginTop: 12}]}
						placeholder="Title"
						placeholderTextColor='white'
					/>

					<TextInput
						onPressIn={ showDatepicker }
						style={ [styles.inviteMessageInput]}
						placeholder='Date'
						placeholderTextColor='white'
						value={ date.toLocaleDateString() }
					/>
				</View>

				<View>
					<View style={ [ { flexDirection: 'row' } ]}>
						<Text style={ [ {marginTop: 18, fontSize: 18, color: 'white', marginLeft: 10 }]}> Start:</Text>
						<TextInput
							onPressIn={ showStartTimepicker } 
							style={[styles.inviteMessageInput]}
							value={ startTime }
						/>
					</View>
				
					<View style={ { flexDirection: 'row'} }>
						<Text style={ [ { marginTop: 18, fontSize: 18, color: 'white', marginLeft: 10} ]}> End:</Text>
						<TextInput
							onPressIn={ showEndTimepicker } 
							style={[styles.inviteMessageInput]}
							value={ endTime }
						/>
					</View>

					{show && (
						<DateTimePicker 
							testID="dateTimePicker"
							value={date}
							mode={mode}
							is24Hour={true}
							display="default"
							onChange={onChange}
						/>
					)}

					{ /* SELECT FRIEND MENU */}
					
				</View>
				
				<View style={ [styles.inviteSendButton, { marginTop: 24, marginLeft: 10, flexDirection: 'row'}]} >	
						{/* <Icon 
							name="user"
							style={ [styles.inviteSendButton]}
							size={35}
							color='white'
						/> */}
						{/* <View style={ [{width: 150, height: 200}]}>
							<CustomerMultiPicker 
								options={FRIENDS}
								search={false} // should show search bar?
								multiple={true} //
								placeholder={"Friends"}
								placeholderTextColor={'#757575'}
								returnValue={"label"} // label or value
								callback={(res)=> setAddedFriends(res)} // callback, array of selected items
								rowBackgroundColor={"#eee"}
								rowHeight={40}
								rowRadius={5}
								searchIconName="ios-checkmark"
								searchIconColor="red"
								searchIconSize={30}
								iconColor={"#00a2dd"}
								iconSize={30}
								selectedIconName={"ios-checkmark-circle-outline"}
								unselectedIconName={"ios-radio-button-off-outline"}
								scrollViewHeight={130}
							/>
						</View> */}
						{/* <RNPickerSelect
							style={[styles.inviteSendButton]} 
							onValueChange={(value) => console.log(value)}
							Icon={() => { return <Icon name="chevron-down" size={30} color="white"/> }}
							items={[
								{ label: 'Football', value: 'football' },
								{ label: 'Baseball', value: 'baseball' },
								{ label: 'Hockey', value: 'hockey' },
							]}
							style={  { iconContainer: {
								right: -20,
							}}}
							placeholder={{label: 'Select a friend...'}}
						/> */}
						
						{/* <OptionsMenu 
							style={[styles.inviteSendButton, { }]}
							customButton={ ( <Icon name="chevron-down" size={30} color="white"/>) }
							options={ FRIENDS }
							actions={ FRIENDS.map((friend) => { addInviteFriend(friend) })}
						/> */}
						<Text> { addedFriends }</Text>
				</View>
					

				<View style = { [ styles.inviteSendContainer ] }>
					<View style = { [ styles.inviteSendButton ]}>
						<Icon.Button 
							name="send"
							color="#D92344"
							backgroundColor="#211626"
							onPress={ sendMessage }
						/>
					</View>
				</View>
				
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

	function generateKey(pre) {
		return `${ pre }_${new Date().getTime() }`
	}

	function addInviteFriend(friendName) {
		setAddedFriends(...addedFriends, generatefriendName )
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
		height: 85,
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
		width : 45,
		height : 45,
		marginHorizontal: 2,
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