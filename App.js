import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GamePlay from './src/components/GamePlay'

const top = [require('./assets/monster1_head.png'), require('./assets/monster2_head.png'), require('./assets/monster3_head.png')]

const mid = [require('./assets/monster1_body.png'), require('./assets/monster2_body.png'), require('./assets/monster3_body.png')]

const bottom = [require('./assets/monster1_feet.png'), require('./assets/monster2_feet.png'), require('./assets/monster3_feet.png')]

export default function App() {
  return (
      <GamePlay top={top} mid={mid} bottom={bottom}/>
  );
}