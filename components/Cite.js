import React from 'react'
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native'

const Cite = ({ cite, deletePatient }) => {

  const removeDialog = (id) => {
    deletePatient(id)
  }

  return (
    <View style={styles.cite}>
      <View>
      <Text style={styles.label}>Paciente: </Text>
      <Text style={styles.text}>{cite.patient}</Text>
    </View>
    <View>
      <Text style={styles.label}>Propietario: </Text>
      <Text style={styles.text}>{cite.owner}</Text>
    </View>
    <View>
      <Text style={styles.label}>Sintomas: </Text>
      <Text style={styles.text}>{cite.symptoms}</Text>
    </View>

    <View>
      <TouchableHighlight onPress={ () => removeDialog(cite.id) } style={styles.btnRemove}>
        <Text style={styles.removeText}>Eliminar &times;</Text>
      </TouchableHighlight>
    </View>

    </View>
  )
}

const styles = StyleSheet.create({
  cite:{
    backgroundColor: '#FFF',
    borderBottomColor: '#e1e1e1',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  label:{
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20
  },
  text:{
    fontSize: 18
  },
  btnRemove: {
    padding: 10,
    backgroundColor: 'red',
    marginVertical: 10
  },
  removeText:{
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

export default Cite