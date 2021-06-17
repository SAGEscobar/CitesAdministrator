/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import Cite from './components/Cite';
import Form from './components/Form';
import {
  Text,
  StyleSheet,
  View,
  FlatList
} from 'react-native';


const App = () => {
  //Define cite state
  const [cites, setCites] = useState([
    { id: "1", patient: "Hook", owner: 'Sergio', symptoms: 'No come' },
    { id: "2", patient: "Redux", owner: 'Alfredo', symptoms: 'No duerme' },
    { id: "3", patient: "Native", owner: 'Juan', symptoms: 'se murio' },
    { id: "4", patient: "Helmet", owner: 'Jorge', symptoms: 'anuma' }
  ]);

  const deletePatient = id => {
    setCites((currentCites) => {
      return currentCites.filter(cite => cite.id !== id)
    })
  }

  return (
    <View style={styles.container}>

      <View style={styles.content}>
        <Form style={styles.list} />

        <Text style={styles.title}>{cites.length > 0 ? 'Administrador de citas' : 'No hay citas, agrega una'}</Text>

        <FlatList
          data={cites}
          renderItem={({ item }) => <Cite cite={item} deletePatient={deletePatient} />}
          keyExtractor={cite => cite.id}
        />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#AA0768',
    flex: 1
  },
  title: {
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF'
  },
  content: {
    flex: 1,
    marginHorizontal: '2.5%'
  },
  list: {
    flex: 1,
  }
});

export default App;
