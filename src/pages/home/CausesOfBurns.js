import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

export class CausesOfBurns extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Headers: ['Descripción Causas de las Quemaduras'],
            Row1: ['Escaldaduras', 'Por contacto con líquidos calientes o vapor.'],
            Row2: ['Por frío', 'La congelación por lesión celular directa por la cristalización del agua en el tejido y la lesión indirecta por isquemia y reperfusión.'],
            Row3: ['Contacto', 'Lesión por contacto con objetos sólidos calientes o fríos como metales, vidrio, entre otros.'],
            Row4: ['Fuego', 'Daño por llama debido a aire oxidado sobrecalentado como incendios.'],
            Row5: ['Químicos', 'Contacto con productos químicos nocivos como ácidos, lejía, solvente de pintura o gasolina.'],
            Row6: ['Electricidad', 'Electricidad transmisión de corriente eléctrica a través de la piel.'],
            Row7: ['Radiación', 'Proveniente de radiografías, luz solar y otras fuentes de radiación ultravioleta, como una cama solar.'],
            Row8: ['Maltrato', 'Se tiene la intención de generar daño físico a la víctima.'],
        }
    }
    render() {
        const state = this.state;
        return (
            <ScrollView horizontal={true}>
                <View style={styles.container}>
                    <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                        <Row data={state.Headers} style={styles.head} textStyle={styles.headerText} />
                        <Row data={state.Row1} style={styles.cell} textStyle={styles.text} />
                        <Row data={state.Row2} style={styles.cell} textStyle={styles.text} />
                        <Row data={state.Row3} style={styles.cell} textStyle={styles.text} />
                        <Row data={state.Row4} style={styles.cell} textStyle={styles.text} />
                        <Row data={state.Row5} style={styles.cell} textStyle={styles.text} />
                        <Row data={state.Row6} style={styles.cell} textStyle={styles.text} />
                        <Row data={state.Row7} style={styles.cell} textStyle={styles.text} />
                        <Row data={state.Row8} style={styles.cell} textStyle={styles.text} />
                    </Table>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 'auto', width: 1400, backgroundColor: '#f1f8ff', },
    cell: { width: 700 },
    text: { margin: 6, color: 'black' },
    headerText: { margin: 6, color: 'black', fontWeight: 'bold'}
});

export default CausesOfBurns