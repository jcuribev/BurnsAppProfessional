import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import Accordion from 'react-native-collapsible/Accordion';
import { imageStyle } from '../../../styles/Image';
import { textStyle } from '../../../styles/Text';
import * as Animatable from 'react-native-animatable';

const CONTENT = [
    {
        title: 'Ejercicios de estiramiento muscular',
        content: 'Los ejercicios de estiramiento muscular son técnicas fundamentales en los programas de rehabilitación en el área de fisioterapia, teniendo como beneficio a los pacientes la amplitud de movimiento articular, disminución del tono muscular y la prevención de lesiones musculares al momento de realizar la terapia, se realizan haciendo elongaciones de los músculos y de los tendones.',
    },
    {
        title: ' Ejercicios activos y activo-asistidos',
        content: 'Los ejercicios activos y activo-asistidos son estiramientos que se dan por medio de contracciones agonistas de los músculos realizadas por el individuo sin ayuda de otra persona, la principal diferencia de estos dos ejercicios, es que cuando se hace el ejercicio y llega al límite de la de amplitud de movimiento de la persona esta será terminada por un acompañante, en este caso serán denominados movimientos activo-asistido.',
    },
    {
        title: ' Ejercicios isométricos',
        content: 'Los ejercicios isométricos son aquellos que se ejecutan cuando los músculos se contraen en tensión sin la ejecución de ningún movimiento, estos se pueden trabajar agregando un peso extra o con el propio peso corporal, estas contracciones duran unos segundos.',
    },
    {
        title: 'Ejercicios de fortalecimiento muscular',
        content: 'Los ejercicios de fortalecimiento son conocidos en el área de fisioterapia por hacerse por medio de actividades motoras siendo su finalidad el incremento de la fuerza de los músculos, estos se pueden hacer por medio de diferentes aparatos.',
    },
    {
        title: 'Ejercicios de resistencia aeróbica',
        content: 'Los ejercicios de resistencia aeróbica son actividades que se basan en un alto consumo de oxígeno, son realizadas en tiempo mayores de 8 minutos o movimientos de larga duración, los parámetros altos de consumo de oxígeno en los órganos y sistemas garantizan la resistencia del ejercicio.',
    },
    {
        title: 'Ejercicios funcionales',
        content: 'El entrenamiento funcional se basa en ejercicios para mejorar la salud y el bienestar general del individuo, estos ejercicios se adaptan en habilidades naturales para trabajar diferentes organismos y sistemas, se busca sacar el máximo provecho del cuerpo y sus movimientos en diferentes actividades.',
    },
    {
        title: 'Ejercicios con vendajes',
        content: 'Los vendajes funcionales es una destacada técnica de inmovilidad parcial que combina la anatomía y biomecánica en su aplicación, se maneja esencialmente en lesiones tendinosas, musculares y ligamentosas pueden trabajarse de forma preventiva o terapéutica.',
    },
];

export class TherapeuticExerciseTypes extends Component {
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
                        <Text style={textStyle.title}>Tipos de ejercicios terapéuticos</Text>
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

export default TherapeuticExerciseTypes