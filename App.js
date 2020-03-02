import React, { useState } from 'react'
import { StyleSheet, View, Image, Text, SafeAreaView, Button } from 'react-native'
import Constants from 'expo-constants'

const slides = { 
  top:  [require('./assets/monster1_head.png'), require('./assets/monster2_head.png'), require('./assets/monster3_head.png')],
  mid: [require('./assets/monster1_body.png'), require('./assets/monster2_body.png'), require('./assets/monster3_body.png')],
  bottom: [require('./assets/monster1_feet.png'), require('./assets/monster2_feet.png'), require('./assets/monster3_feet.png')]
}

export default function App() {

  const [isMatch, toggleMatch] = useState(false)
  const [textArea, changeTextArea] = useState("")
  const [topIndex, refreshTop] = useState(0)
  const [midIndex, refreshMid] = useState(1)
  const [bottomIndex, refreshBottom] = useState(2)
 
  const rollDice = _ => { return Math.floor(Math.random() * slides.top.length)}

  const verify = _ => { bottomIndex === topIndex && midIndex === topIndex ? toggleMatch(true) : toggleMatch(false) }

  const shuffle = _ => {    
    refreshTop(rollDice())
    refreshBottom(rollDice())
    refreshMid(rollDice())  
    
    verify()

    isMatch ? (toggleMatch(true), changeTextArea("You Won!!")) : (toggleMatch(false), changeTextArea("Keep Trying!!")) 
  }

   return (
    <SafeAreaView style={styles.container}>
      <Text>{textArea}</Text>
      <View>
        <Image source={slides.top[topIndex]} style={styles.image} />
        <Image source={slides.mid[midIndex]} style={styles.image} />
        <Image source={slides.bottom[bottomIndex]} style={styles.image} />
      </View>
      <Button title="Click to start game!" onPress={shuffle}/>
      {isMatch ? <Text>You won, play again!</Text>: <Text>{textArea}</Text>}
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