import React, { Fragment, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
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
  const [cites, setCites] = useState([]);

  useEffect(() => {
    const getCitesStorages = async () => {
      try {
        const citesStorage = await AsyncStorage.getItem('cites')
        if(citesStorage){
          setCites(JSON.parse(citesStorage))
        }
      } catch (error) {
        console.log(error)
      }
    }
  }, [])

  const deletePatient = id => {
    const filterCites = cites.filter(cite => cite.id !== id);
    setCites(filterCites);
    setCiteStorage(JSON.stringify(filterCites));
  }

  const showFrom = () => {
    setShow(!show)
  }

  const setCiteStorage = async (citesJSON) => {
    try {
      await AsyncStorage.setItem('cites', citesJSON)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Administradot de Citas</Text>
      <View style={styles.content}>

        {
          show ? (
            <Fragment>
              <Text style={styles.title}>{show ? 'Crear nueva cita' : 'Cancelar'}</Text>
              <Form style={styles.list} cites={cites} setCites={setCites} showFrom={showFrom} setCiteStorage={setCiteStorage} />
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
    marginTop: Platform.OS === 'ios' ? 40 : 20,
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
