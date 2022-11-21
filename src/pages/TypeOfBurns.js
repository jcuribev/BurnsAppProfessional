import React, { Component } from 'react';
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import { imageStyle } from '../styles/Image';
import { textStyle } from '../styles/Text';

const BACON_IPSUM =
  'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. ';

const CONTENT = [
  {
    title: 'Líquido caliente o escaldaduras',
    content: 'Se producen por infusiones con sopas, líquidos calientes, durante el baño llevando a diferentes tipos de profundidad dependiendo del tiempo de exposición. Se puede producir también por aceite caliente y grasas que pueden generar quemaduras de espesores completos.',
    image: require('../resources/Images/foto.png')
  },
  {
    title: 'Quemaduras por fuego',
    content: 'Se producen por productos inflamables, accidentes de tránsito y explosiones de gas que producen flamas o llamas.',
    image: require('../resources/Images/frostbite.png')
  },
  {
    title: 'Quemaduras por químicas',
    content: ' Son quemaduras producidas por cáusticos y otros químicos como álcalis fuertes, solventes o limpiadores de drenajes',
    image: require('../resources/Images/frostbite2.png')
  },
  {
    title: 'Quemaduras eléctricas',
    content: 'Se generan por electricidad, corriente de la naturaleza por los rayos, corriente eléctrica alterna',
    image: require('../resources/Images/frostbite3.png')
  },
  {
    title: 'Quemaduras por congelación',
    content: 'Se producen por exposiciones prolongadas al hielo',
    image: require('../resources/Images/Escaldadura1.jpg')
  },
];

export class TypeOfBurns extends Component {
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
        <View style={styles.imageContainer}>
          <Image source={section.image} style={imageStyle.style} resizeMethod='scale' />
        </View>
      </Animatable.View>
    );
  }

  render() {
    const { multipleSelect, activeSections } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View style={styles.multipleToggle}>
            <Text style={textStyle.title}>Tipos de quemaduras</Text>
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

export default TypeOfBurns