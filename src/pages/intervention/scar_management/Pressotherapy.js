import { Image, Text, View } from 'react-native'
import React, { Component } from 'react'
import { textStyle } from '../../../styles/Text'
import { imageStyle } from '../../../styles/Image'
import { ScrollView } from 'react-native-gesture-handler'

export class Pressotherapy extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <Text style={textStyle.title}>
          PRESOTERAPIA
        </Text>
        <Text style={textStyle.content}>
          Consiste en la aplicación de una fuerza mecánica de aproximadamente 25 mm Hg a 40 mm de Hg mantenida sobre la cicatriz o injerto, al cual se opone la fuerza de los tejidos profundos a través de la aplicación de elementos rígidos y elásticos compresivos como trajes y vendajes; elementos semirrígidos como bandas de silicona y elementos rígidos como material plástico; se usan además esteroides tópicos, parches de poliuretanos y moldes acrílicos. Generalmente es utilizada en personas cuya cicatriz demora más de 14 días promedio para iniciar el proceso de epitelización, o en aquellas personas que requieren injertos con el fin de facilitar la remodelación y organización del tejido colágeno.
        </Text>
        <Text style={textStyle.content}>
          Se usan siliconas, vendajes compresivos y férulas
        </Text>
        <View style={{maxHeight: 400}}>
          <Image style={imageStyle.style} source={require('../../../resources/Images/ferula.jpg')} />
        </View>
      </ScrollView>
    )
  }
}

export default Pressotherapy