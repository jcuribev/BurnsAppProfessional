import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import { YoutubePlayer } from '../../components/YoutubePlayer'
import { textStyle } from '../../styles/Text'

export class Definition extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text style={textStyle.title}>
                   DEFINICIÓN DE QUEMADURA
                </Text>
                <Text style={textStyle.content}>
                    Las quemaduras son un trauma directo sobre la piel u otro tejido primario que puede ser causado por diferentes agentes como productos químicos, líquidos y sólidos calientes o aquellos agentes que producen llamas.
                </Text>
                <Text style={textStyle.content}>
                    Se entiende por quemadura un conjunto de fenómenos locales y sistémicos que resultan de la acción de muy alta temperatura, electricidad o algunos agentes químicos , así como por agentes fríos. Las quemaduras se pueden producir en cualquier lugar del organismo, pero son mucho más frecuentes en la piel pudiendo incluir los tejidos adyacentes, ocasionando un desequilibrio bioquímico por desnaturalización proteica, edema y pérdida del volumen del líquido intravascular, debido a un aumento de la permeabilidad.
                </Text>
                <YoutubePlayer videoId='BggrpKfqh1c'></YoutubePlayer>
            </View>
        )
    }
}

export default Definition