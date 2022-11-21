import { Text, View } from 'react-native'
import React, { Component } from 'react'

export class TherapeuticIntroduction extends Component {
    render() {
        return (
            <View>
                <Text style={textStyle.title}>
                    INTRODUCCIÓN
                </Text>
                <Text style={textStyle.content}>
                    Se sugiere un entrenamiento moderado de la fuerza muscular, evitando cargas elevadas, por la sensibilidad de las estructuras articulares especialmente durante la primera fase de recuperación.
                </Text>
            </View>
        )
    }
}

export default TherapeuticIntroduction