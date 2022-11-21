import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import Accordion from 'react-native-collapsible/Accordion';
import { imageStyle } from '../../styles/Image';
import { textStyle } from '../../styles/Text';
import * as Animatable from 'react-native-animatable';


const CONTENT = [
    {
        title: 'Dolor',
        content: [
            'El dolor en personas quemadas se relaciona con trastornos sensoriales a largo plazo como parestesias, síndrome de dolor crónico y disestesias.Durante el desarrollo de la terapia se debe vigilar la integridad de la piel, especialmente las zonas injertadas en caso de alteraciones sensitivas.',
            '\n\n \u2022 Es de resaltar que el dolor es una sensación individual y por tal la reacción depende de cada usuario, en ocasiones puede generar depresión, ansiedad o demás trastornos psicológicos.',
        ]
    },
    {
        title: 'Tratamiento del dolor',
        content: [
            'Realizar el tratamiento de manera precoz identificando las alteraciones fisiopatológicas, psicológicas y bioquímicas desde el abordaje de un equipo multidisciplinario.',
            '\n\n \u2022 Farmacoterapia',
            '\n\n \u2022 Crioterapia: Fase aguda de la quemadura donde existe inflamación y dolor. Máximo 20 min.',
            '\n\n \u2022 Termoterapia superficial: Fase subaguda. Paquete Caliente por 15 min. Tolerable al paciente.',
            '\n\n \u2022 Electroterapia: estimulación eléctrica nerviosa transcutánea (TENS). El uso de la TENS puede contribuir con el manejo del dolor en personas quemadas, se puede usar la estimulación eléctrica en el dolor agudo a nivel sensorial, en tanto actúa sobre la transmisión en la médula espinal, y por su efecto en la estimulación de la liberación de endorfinas en el tratamientodel dolor crónico.cuyos efectos y aplicaciones clínicas dependerán de la forma de la onda, la amplitud, la frecuencia, duración del pulso y tiempo de aplicación.',
            '\n\n \u2022 Técnicas de relajación.',
            '\n\n \u2022 Musicoterapia.',
            '\n\n \u2022 Fisioterapia dermatofuncional: Masaje cicatricial con diferentes modalidades.',
        ]
    },
];

export class PainManagement extends Component {
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
                        <Text style={textStyle.title}>Manejo del dolor</Text>
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
export default PainManagement