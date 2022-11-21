import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import Accordion from 'react-native-collapsible/Accordion';
import { imageStyle } from '../../../styles/Image';
import { textStyle } from '../../../styles/Text';
import * as Animatable from 'react-native-animatable';

const CONTENT = [
    {
        title: 'Introducción',
        content: 'Se sugiere un entrenamiento moderado de la fuerza muscular, evitando cargas elevadas, por la sensibilidad de las estructuras articulares especialmente durante la primera fase de recuperación.',
    },
    {
        title: 'Recomendaciones',
        content: [
            'Durante el desarrollo de la terapia se debe vigilar la integridad de la piel, especialmente las zonas injertadas en caso de alteraciones sensitivas.',
            '\n\n \u2022 Al usuario se le debe enseñar a inspeccionar su piel después de cada sesión de ejercicio terapéutico y ajustar el tipo o la duración del ejercicio a la respuesta de cada uno de los sistemas.',
            '\n\n \u2022 La implementación de un programa de ejercicios regular, inmediatamente después de que se supere el periodo crítico en una persona que ha presentado una quemadura, contribuye al desarrollo de la tolerancia cardiorrespiratoria o capacidad aeróbica, lo cual beneficia la ejecución de actividades funcionales y su calidad de vida.',
            '\n\n \u2022 En los niños se debe evitar entrenamientos de fuerza o resistencia de alta intensidad, la progresión del ejercicio de forma gradual y lenta para evitar la presencia de posibles lesiones y asegurar la adherencia de los niños al programa de ejercicios propuesto.',
            '\n\n \u2022 Realizar reevaluaciones periódicas de la evolución del usuario frente al programa de ejercicios instaurado, pues de por si se requiere ajustes en la intensidad, duración, frecuencia o modo de ejecución.',
            '\n\n \u2022 Se puede acompañar el programa de ejercicios de actividades lúdicas y recreativas que fomenten mayor seguridad, disfrute y disminución de la tensión que tienden a provocar los ambientes hospitalarios y la ejecución de ejercicios de forma rutinaria.',
            '\n\n \u2022 Se debe educar a la persona con quemaduras, familia y cuidadores. Los efectos benéficos de un programa de ejercicios sobre su condición de salud y el establecimiento de estilos de vida saludables que permanezcan en el tiempo, depende en gran medida del apoyo de quienes le rodean.',
        ]
    },
];

export class TherapeuticExerciseIntroduction extends Component {
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
                        <Text style={textStyle.title}>Ejercicios terapéuticos</Text>
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

export default TherapeuticExerciseIntroduction