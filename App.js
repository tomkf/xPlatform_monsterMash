import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Image, Text, SafeAreaView, Button } from 'react-native'
import Constants from 'expo-constants'

const slides = { 
  top:  [require('./assets/monster1_head.png'), require('./assets/monster2_head.png'), require('./assets/monster3_head.png')],
  mid: [require('./assets/monster1_body.png'), require('./assets/monster2_body.png'), require('./assets/monster3_body.png')],
  bottom: [require('./assets/monster1_feet.png'), require('./assets/monster2_feet.png'), require('./assets/monster3_feet.png')]
}

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
    
    refreshTop( Math.floor(Math.random() * slides.top.length) )
    refreshMid( Math.floor(Math.random() * slides.bottom.length) )  
    refreshBottom( Math.floor(Math.random() * slides.mid.length) )
    }

   return (
    <SafeAreaView style={styles.container}>
      <Text>{textArea}</Text>
      <View>
        <Image source={slides.top[top]} style={styles.image} />
        <Image source={slides.mid[top]} style={styles.image} />
        <Image source={slides.bottom[top]} style={styles.image} />
      </View>
      <Button title="Click to start game!" onPress={shuffle}/>
      {match ? <Text>You Won!!</Text>: <Text>{textArea}</Text>}
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
  image: {
    resizeMode: 'contain',
    height: 140
  }
});