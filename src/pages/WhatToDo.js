import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { textStyle } from '../styles/Text'
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';
import { imageStyle } from '../styles/Image';

const CONTENT = [
  {
    title: 'Actuaciones generales',
    content: 'La asistencia inmediata del quemado es muy similar a la de cualquier accidentado con la peculiaridad de que lo primero que se debe hacer, sin olvidar nuestra propia seguridad, es parar el proceso de la quemadura; es decir, eliminar la causa.',
    image: null
  },

  {
    title: 'Conducta general a seguir',
    content: [
    'Ante todo y antes de tratar las diferentes quemaduras, adoptaremos siempre medidas de autoprotección.',
    '\n\n \u2022 Apartar al lesionado del agente causante de la quemadura, si el agente causante de la quemadura es eléctrico, se debe cortar el suministro eléctrico antes de entrar en contacto para socorrerlo.',
    '\n\n \u2022 Enfriar la zona afectada con agua a temperatura ambiente, como mínimo durante 10 minutos; también se puede cubrir la superficie con apósitos húmedos o sábanas húmedas para evitar la extensión de la lesión y disminuir el dolor. ',
    '\n\n \u2022 Cuando la piel pierda su integridad o la quemadura sea extensa, deberá cubrirse para evitar el riesgo de infección, utilizando apósitos o gasas estériles y en ausencia de los mismos podrían emplearse toallas, sábanas o pañuelos siempre que estén completamente limpios. Evitaremos el contacto directo de las quemaduras con las manos o superficies que puedan estar contaminadas. ',
    '\n\n \u2022 Siempre protegeremos nuestras manos del contacto con estas sustancias y se retirarán objetos que puedan comprimir las extremidades como pulseras, anillos, etc. ',
    '\n\n \u2022 Si las ropas del individuo están ardiendo, apagaremos las llamas y se evitará que la víctima por miedo o dolor empiece a correr y avive el fuego. Le atenderemos en el suelo y utilizaremos para sofocar las llamas una manta, toallas, abrigos, etc. que no sean de material sintético. En último caso se le puede hacer rodar por el suelo.',
    '\n\n \u2022 En quemaduras graves que afecten a los dedos, colocaremos gasas húmedas estériles entre ellos para evitar que se adhieran. Si las quemaduras afectan a las extremidades, las mantendremos elevadas para evitar que se hinchen (edemas).',
    '\n\n \u2022 En las quemaduras químicas (causticaciones) por ácidos o álcalis, se procederá rápidamente al lavado abundante con agua, preferiblemente con ducha evitando que la presión del chorro pueda erosionarla. Se mantendrá durante unos 20 minutos. Tras eliminar el corrosivo se cubrirá la lesión con apósitos limpios y se remitirá para valoración especializada.'
  ],
    image: null
  },

  {
    title: 'Lo que NO se debe hacer',
    content: [
      'Evitaremos la aplicación de pomadas, lociones o ungüentos sobre las quemaduras.',
      '\n\n \u2022 No efectuaremos remedios caseros como aplicar grasas, pasta de dientes, aceite, vinagre, etc.',
      '\n\n \u2022 Tampoco se aplicará hielo sobre la superficie quemada, pues puede agravar la lesión.',
      '\n\n \u2022 No utilizaremos algodón ni apósitos que puedan dejar “pelusilla”, pues se adhieren a la quemadura.',
      '\n\n \u2022 Las ampollas no deberán pincharse ni aplicar apósitos que comprima excesivamente y pudieran reventarlas, pues al perder la integridad de la piel aumenta el riesgo de infección.',
      '\n\n \u2022 Cuando las quemaduras sean por productos químicos, nunca deberá intentar neutralizarlos con otro producto químico.',
    ],
    image: null
  },
  
];

export class WhatToDo extends Component {

  state = {
    activeSections: [],
    collapsed: true,
    multipleSelect: true,
  };

  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  setSections = (sections) => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={200}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Text style={styles.headerText}>{section.title}</Text>
      </Animatable.View>
    );
  };

  renderContent(section, _, isActive) {
    return (
      <Animatable.View
        duration={200}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Text style={styles.contentText}>{section.content}</Text>
      </Animatable.View>
    );
  }

  render() {

    const { multipleSelect, activeSections } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ marginVertical: 10 }} style={{ flex: 1 }}>
        <Text style={textStyle.title}>
          MANEJO INICIAL DE LA QUEMADURA
        </Text>
          <Text style={textStyle.content}>
            La asistencia inmediata del quemado es muy similar a la de cualquier accidentado con la peculiaridad de que lo primero que se debe hacer, sin olvidar nuestra propia seguridad, es parar el proceso de la quemadura; es decir, eliminar la causa.
          </Text>
          <Accordion
            align="bottom"
            activeSections={activeSections}
            sections={CONTENT}
            touchableComponent={TouchableOpacity}
            expandMultiple={multipleSelect}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            duration={200}
            onChange={this.setSections}
            renderAsFlatList={false}
          />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20
  },
  imageContainer: {
    maxHeight: 200,
    width: '90%',
    alignSelf: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
    color: 'black'
  },
  header: {
    padding: 10,
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    marginVertical: 5,
    marginHorizontal: 20
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    color: 'black'
  },
  content: {

    fontWeight: 'bold',

  },
  contentText: {
    textAlign: 'justify',
    color: 'black',
    marginHorizontal: 20
  },
  active: {
    marginBottom: 10
  },
  inactive: {
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {

    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
  },
  multipleToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
    alignItems: 'center',
  },
  collapsibleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
    color: 'black'
  },
});

export default WhatToDo