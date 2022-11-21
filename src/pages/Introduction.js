import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import { textStyle } from '../styles/Text'


export class Introduction extends Component {
  render() {
    return (
      <View>
        <Text style={textStyle.title}>
          INTRODUCCIÓN
        </Text>
        <Text style={textStyle.content}>
          Dado el problema creciente de salud pública en torno a las quemaduras el cual ha sido declarado por la Organización Mundial de la Salud, se ha creado esta aplicación móvil donde usted podrá consultar diferentes tipos de información relacionadas con el tema.
        </Text>
      </View>
    )
  }
}

export default Introduction