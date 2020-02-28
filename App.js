import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, SafeAreaView, Button } from 'react-native'
import MonsterSlide from './src/components/MonsterSlide'
import Constants from 'expo-constants'

const top = [require('./assets/monster1_head.png'), require('./assets/monster2_head.png'), require('./assets/monster3_head.png')]

const mid = [require('./assets/monster1_body.png'), require('./assets/monster2_body.png'), require('./assets/monster3_body.png')]

const bottom = [require('./assets/monster1_feet.png'), require('./assets/monster2_feet.png'), require('./assets/monster3_feet.png')]


export default function App() {

  const [top, refreshTop] = useState(1)
  const [bottom, refreshBottom] = useState(2)
  const [mid, refreshMid] = useState(0)
  const [textArea, changeTextArea] = useState("")
  const [match, setMatch] = useState(false)
 
  useEffect (()=>{ 
    if(top === bottom && top === mid && bottom === mid){
      setMatch(true)
    }
  })

  const shuffle = () => {
    if(match){
      setMatch(false)
      changeTextArea("")
    }else{
      changeTextArea("Keep Trying!!")
    }
    
    refreshTop( Math.floor(Math.random() * top.length) )
    refreshMid( Math.floor(Math.random() * bottom.length) )  
    refreshBottom( Math.floor(Math.random() * mid.length) )
    }

   return (
    <SafeAreaView style={styles.container}>
      <Text>{textArea}</Text>
      <View>
        <MonsterSlide imageSrc={top[top]}/>
        <MonsterSlide imageSrc={mid[mid]}/>
        <MonsterSlide imageSrc={bottom[bottom]}/>
      </View>
      <Button title="Click to start game!" onPress={shuffle}/>
      {match ? <Text>You Won!!</Text>: <Text></Text>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight, 
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});