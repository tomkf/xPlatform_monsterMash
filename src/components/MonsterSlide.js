import React, { useState } from 'react'
import { StyleSheet, Image } from 'react-native'

const MonsterSlide = (props) => {
    return (
        <Image source={props.imageSrc} style={styles.image} />
    )
}

const styles = StyleSheet.create({
    image: {
        resizeMode: 'contain',
        height: 180
    }
})

export default MonsterSlide