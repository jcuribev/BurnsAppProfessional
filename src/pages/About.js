import { Image, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { Component, useState } from 'react'
import { imageStyle } from '../styles/Image';
import { Card } from '../components/Card';
import { textStyle } from '../styles/Text';

export class About extends Component {

  render() {
    return (
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        <View style={{ flex: 1, }}>
          <View style={{ flex: 1 }}>
            <Text style={textStyle.title}>Investigadores</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', flexShrink: 1, justifyContent: 'center'}}>
            <Card title='Julialba Castellanos Ruiz' image={require('../resources/Images/icon.png')}></Card>
            <Card title='Monica Yamile Pinzón Bernal' image={require('../resources/Images/icon.png')}></Card>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={textStyle.title}>Desarrolladores</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', flexShrink: 1, justifyContent: 'center'}}>
            <Card title='Yaneth Mejía Rendón' image={require('../resources/Images/icon.png')}></Card>
            <Card title='Carlos Andrés Zapata' image={require('../resources/Images/icon.png')}></Card>
            <Card title='Juan Camilo Uribe Villa' image={require('../resources/Images/icon.png')}></Card>
            <Card title='Daniel Gutiérrez Duque' image={require('../resources/Images/icon.png')}></Card>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'black'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  button: {
    padding: 15,
    borderRadius: 8,
    width: "100%",
  },
  focusedButton: {
    padding: 15,
    borderRadius: 8,
    width: "100%",
    backgroundColor: '#e69138'
  }
});

export default About