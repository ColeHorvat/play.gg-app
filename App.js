import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { t } from 'react-native-tailwindcss';
import React, { useState, useEffect } from 'react';

export default function App() {
  const API_KEY = '17CB3BD18765C9F04AAB50A3EC9CA2A3';
  const RB_STEAMID = '76561198114121125';
  const URL = 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=' + API_KEY + '&steamids=' + RB_STEAMID;

  const [player, setPlayer] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(URL)
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson['response']['players']['0'];
    })
    .then( player => {
      setPlayer(player);
      setLoading(false);
    })
    .catch( error => {
      console.error(error);
    })
  }, []);

  return (
    <View style={[t.flex1, t.justifyCenter, t.itemsCenter]}>
      <Text>{ loading ? 'Loading...' : player['personaname']}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
