import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Platform, Image, LogBox, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'
import Constants from 'expo-constants'
import DateTimePicker from '@react-native-community/datetimepicker'

export default function InviteCard(props) {
	
    const [date, setDate] = useState(new Date());
	const [startTime, setStartTime] = useState(new Date())
	const [endTime, setEndTime] = useState(new Date())
	const [mode, setMode] = useState('date');
	const [show, setShow] = useState(false);
	const [timeMode, setTimeMode] = useState('start');
 
	// DATE PICKER STATES & FUNCTIONS
 
	const [title, setTitle] = useState('')
	const [inviteDateText, setInviteDateText] = useState('');
	const [inviteStartTimeText, setInviteStartTimeText] = useState('');
	const [inviteEndTimeText, setInviteEndTimeText] = useState('');


    const onChange = (event, selectedDate) => {
        if(mode === 'date') {
            const currentDate = selectedDate;
            setShow(Platform.ios);
            setDate(currentDate);
            setInviteDateText(currentDate.toLocaleDateString())
        } else {
            if(timeMode === 'start') {
                const currentStartTime = selectedDate || startTime;
                setShow(Platform.ios);
                setStartTime(currentStartTime.toLocaleTimeString('it-IT', {hour: '2-digit', minute: '2-digit'}).replace(/(:\d{2}| [AP]M)$/, ""));
                setInviteStartTimeText(currentStartTime.toLocaleTimeString('it-IT', {hour: '2-digit', minute: '2-digit'}).replace(/(:\d{2}| [AP]M)$/, ""))

            } else if(timeMode === 'end') {
                const currentEndTime = selectedDate || endTime;
                setShow(Platform.ios);
                setEndTime(currentEndTime.toLocaleTimeString('it-IT', {hour: '2-digit', minute: '2-digit'}).replace(/(:\d{2}| [AP]M)$/, ""));

                setInviteEndTimeText(currentEndTime.toLocaleTimeString('it-IT', {hour: '2-digit', minute: '2-digit'}).replace(/(:\d{2}| [AP]M)$/, ""))
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

    function sendInviteMessage() {
        const INVITE_MESSAGE = "INVITE\n\nTitle: " + title + "\n\nDate: " + inviteDateText + "\nStart time: " + inviteStartTimeText + "\nEnd time: " + inviteEndTimeText + "\nLink: <Google Calendar Link>"
        props.setMessageData([...props.messageData, {method: 'send', content: INVITE_MESSAGE }])
    }

	function checkInviteText() {
		if(title == '') {
			Alert.alert('Please fill out title field')
			return;
		} else if(inviteDateText == '') {
			Alert.alert('Please specify a date')
			return;
		} else if(inviteStartTimeText == '') {
			Alert.alert('Please specify a start time')
			return;
		} else if(inviteEndTimeText == '') {
			Alert.alert('Please specify an end time')
			return;
		}

		sendInviteMessage()
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
                        onPress={ props.toggleInvite }
                    />
                </View>
                                

                <Text style ={[ styles.headerNameText, {} ]}>Create An Invite</Text>
            </View>

            <View style={[ {marginBottom: 20}]}>
                <TextInput 
                    style={ [styles.inviteMessageInput, { marginTop: 12}]}
                    placeholder="Title"
                    placeholderTextColor='white'
                    value={ title }
                    onChangeText={ v => setTitle(v) }
                />

                <TextInput
                    onPressIn={ showDatepicker }
                    style={ [styles.inviteMessageInput]}
                    placeholder='Date'
                    placeholderTextColor='white'
                    value={ date.toLocaleDateString() }
                    onChangeText={ onChange }
                    defaultValue={ date }
                />
            </View>

            <View>
                <View style={ [ { flexDirection: 'row' } ]}>
                    <Text style={ [ {marginTop: 18, fontSize: 18, color: 'white', marginLeft: 10 }]}> Start:</Text>
                    <TextInput
                        onPressIn={ showStartTimepicker } 
                        style={[styles.inviteMessageInput]}
                        value={ startTime }
                        onChangeText={ onChange }
                    />
                </View>
            
                <View style={ { flexDirection: 'row'} }>
                    <Text style={ [ { marginTop: 18, fontSize: 18, color: 'white', marginLeft: 10} ]}> End:</Text>
                    <TextInput
                        onPressIn={ showEndTimepicker } 
                        style={[styles.inviteMessageInput]}
                        value={ endTime }
                        onChangeText={ onChange }
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
                        style={{backgroundColor: 'white'}}
                    />
                )} 
                
            </View>

            <View style = { [ styles.inviteSendContainer ] }>
                <View style = { [ styles.inviteSendButton ]}>
                    <Icon.Button 
                        name="send"
						size={25}
                        color="#D92344"
                        backgroundColor="#211626"
                        onPress={ () => {
							checkInviteText()
							props.toggleInvite //Doesn't work for some reason
						} }
                    />
                </View>
            </View>
            
        </View>
    )
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
		width : 60,
		height : 45,
		marginBottom: 12,
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
