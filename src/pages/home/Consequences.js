import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import Accordion from 'react-native-collapsible/Accordion';
import { imageStyle } from '../../styles/Image';
import { textStyle } from '../../styles/Text';
import * as Animatable from 'react-native-animatable';

const CONTENT = [
    {
      title: 'Edad',
      content: 'Es clara su relación con el pronóstico porque la piel de las personas mayores es atrófica y más delgada, lo que incrementa el daño de la quemadura al disminuir el efecto protector del epitelio; el envejecimiento  es un factor que dificulta la respuesta a la agresión.',
    },
    {
      title: 'Tipo de quemadura',
      content: 'Su etiología y producción de humos inhalados empeoran el pronóstico.',
    },
    {
      title: 'Traslado a la unidad',
      content: 'La duración y las condiciones en las que se realiza el traslado a la unidad.',
    },
    {
      title: 'Condiciones de salud previas',
      content: 'Por ejemplo la bronquitis crónica obstructiva, agravada por la inhalación del humo.',
    },
    {
      title: 'Lesiones asociadas',
      content: 'Otras heridas pueden agravar el pronóstico de la quemadura.',
    },
  ];

export class Consequences extends Component {
    state = {
        activeSections: [],
        collapsed: true,
        multipleSelect: false,
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
            <ScrollView>
              <View style={styles.multipleToggle}>
                <Text style={textStyle.title}>Consecuencias de las quemaduras</Text>
              </View>
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
        );
      }
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
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

export default Consequences