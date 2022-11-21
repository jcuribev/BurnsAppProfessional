import React from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { textStyle } from '../styles/Text'

function MainScreen(props) {
  return (
    <View style= {{height: '100%'}}>
      <Text style={textStyle.title}>
        BurnsAppProfessional
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("TestScreen")}>
        <Text style={styles.buttonText}>
          CONTINUAR
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
      backgroundColor: "#8956ff",
      margin: 10,
      opacity: 0.75,
      width: 150,
      height: 40,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      alignContent: 'center',
  },

  buttonText: {
      fontSize: 15,
      flexWrap: 'wrap',
      textAlign: 'center',
      color: 'white',
      marginHorizontal: 20,
      marginVertical: 10,
      flexGrow: 1,
      alignContent: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
  }
});

export default MainScreen