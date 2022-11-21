import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import { Col, Row, Rows, Table, TableWrapper } from 'react-native-table-component';

export class Clasification extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Headers: ['CONVERSESMITH', 'DENOMINACIÓN ABA', 'NIVEL HISTOLÓGICO', 'PRONÓSTICO'],
      Row1: ['Primer grado', 'Epidérmica', 'Epidermis', 'No necesita injerto. Debería curar Espontáneamente en 7 días sin secuelas'],
      Row2: ['Segundo grado superficial', 'Dérmica superficial', 'Epidermis\nDermis papilar', 'Debería epidermizar espontáneamente en 15 días con secuelas estéticas. Si se complica puede profundizarse'],
      Row3: ['Segundo grado profundo', 'Dérmica profunda', 'Epidermis\nDermis papilar y retícula sin afectar fanéreos profundos', 'Habitualmente termina en injerto con secuelas estéticas y/o funcionales. Puede requerir escarectomía tangencial'],
      Row4: ['Tercer grado', 'Espesor total', 'Epidermis\nDermis e hipodermis pudiendo llegar inclusive hasta el plano muscular y óseo', 'Requiere escarectomía precoz, e injerto o colgajos'],
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
          </Table>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 'auto', width: 700, backgroundColor: '#f1f8ff', },
  cell: { width: 700 },
  text: { margin: 6, color: 'black'},
  headerText: { margin: 6, color: 'black', fontWeight: 'bold'}
});

export default Clasification