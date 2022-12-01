import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

export class References extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text style={styles.text}>Jeschke MG, van Baar ME, Choudhry MA, Chung KK, Gibran NS, Logsetty S. Burn injury. Nat Rev Dis Primers. 2020 Feb 13;6(1):11. doi: 10.1038/s41572-020-0145-5. PMID: 32054846; PMCID: PMC7224101.</Text>
        <Text style={styles.text}>https://www.who.int/news-room/fact-sheets/detail/burns</Text>
        <Text style={styles.text}>Secretaría de Estado de la Seguridad Social Gobierno de España. (2020). MANUAL DE PRIMEROS AUXILIO EN LA EMPRESA. MC MUTUAL.</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontStyle: 'italic',
    margin: 15
  }
})

export default References