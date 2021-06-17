/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Fragment, useState } from 'react';
import Cite from './components/Cite';
import Form from './components/Form';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Platform
} from 'react-native';


const App = () => {
  const [show, setShow] = useState(false)
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

  const showFrom = () => {
    setShow(!show)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Administradot de Citas</Text>
      <View style={styles.content}>

        {
          show ? (
            <Fragment>
              <Text style={styles.title}>{show ? 'Crear nueva cita' : 'Cancelar'}</Text>
              <Form style={styles.list} cites={cites} setCites={setCites} showFrom={showFrom} />
            </Fragment>
          ) : (
            <Fragment>
              <Text style={styles.title}>{cites.length > 0 ? 'Administra tus citas' : 'No hay citas, agrega una'}</Text>

              <View>
                <TouchableHighlight onPress={() => showFrom()} style={styles.btnShow}>
                  <Text style={styles.showText}>Crear cita</Text>
                </TouchableHighlight>
              </View>

              <FlatList
                data={cites}
                renderItem={({ item }) => <Cite cite={item} deletePatient={deletePatient} />}
                keyExtractor={cite => cite.id}
              />
            </Fragment>
          )
        }
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
    marginTop: Platform.OS === 'ios' ? 40 : 20 ,
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
  },
  btnShow: {
    padding: 10,
    backgroundColor: '#AA0768',
    marginVertical: 10
  },
  showText: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default App;
