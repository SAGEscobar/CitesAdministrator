import React, { Fragment, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableHighlight,
  Alert, 
  ScrollView} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

const Form = () => {
  const [patient, setPatient] = useState('');
  const [owner, setOwner] = useState('');
  const [phone, setPhone] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');

  const [isDatePickerVisible, setDatePickerVisible] = useState(false)
  const [isTimePickerVisible, setTimePickerVisible] = useState(false)

  const showDatePicker = () => {
    setDatePickerVisible(true)
  }

  const hideDatePicker = () => {
    setDatePickerVisible(false)
  }

  const handleConfirm = date => {
    const options = { year: 'numeric', month: 'long', day: '2-digit' }
    setDate(date.toLocaleDateString('es-ES', options))
    hideDatePicker()
  }

  const showTimePicker = () => {
    setTimePickerVisible(true)
  }

  const hideTimePicker = () => {
    setTimePickerVisible(false)
  }

  const handleConfirmTime = time => {
    const options = { hour: 'numeric', minute: '2-digit', timeStyle: 'short', hour12: true }
    console.log(time)
    setHour(time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', seconds: false }))

    hideTimePicker()
  }

  const createCite = () => {
    if (patient.trim() === '' ||
      owner.trim() === '' ||
      phone.trim() === '' ||
      symptoms.trim() === '' ||
      date.trim() === '' ||
      hour.trim() === '') {
        showAlert
        return;
    }
  }

  //Show alert if validation fails
  const showAlert = () => {
    Alert.alert(
      'Error', //Alert's Title
      'Todos los campos son obligatorios', //Alert's message
      [{ // Alert's button
        text: 'Ok'
      }]
    )
  }

  return (
    <Fragment>
      <ScrollView style={styles.form}>
        <View>
          <Text style={styles.label}>Paciente</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setPatient(text)}
          />
        </View>
        <View>
          <Text style={styles.label}>Dueño</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setOwner(text)}
          />
        </View>
        <View>
          <Text style={styles.label}>Telefono de contacto</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setPhone(text)}
            keyboardType='numeric'
          />
        </View>

        <View>
          <Text style={styles.label}>Fecha</Text>
          <Button title="Seleccionar fecha" onPress={showDatePicker} />
          <DateTimePicker
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            locale='es_ES'
            headerTextIOS="Elige una fecha"
          />
          <Text>{date}</Text>
        </View>

        <View>
          <Text style={styles.label}>Hora</Text>
          <Button title="Seleccionar hora" onPress={showTimePicker} />
          <DateTimePicker
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={handleConfirmTime}
            onCancel={hideTimePicker}
            headerTextIOS="Elige una hora"
          />
          <Text>{hour}</Text>
        </View>

        <View>
          <Text style={styles.label}>Sintomas</Text>
          <TextInput
            multiline
            style={styles.input}
            onChangeText={text => setSymptoms(text)}
          />
        </View>

        <View>
          <TouchableHighlight onPress={() => createCite()} style={styles.btnSubmit}>
            <Text style={styles.submitText}>Agendar Cita</Text>
          </TouchableHighlight>
        </View>

      </ScrollView>
    </Fragment>
  )
}

const styles = StyleSheet.create({
  form: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: '2.5%'
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20
  },
  input: {
    marginTop: 10,
    borderColor: '#e1e1e1',
    borderStyle: 'solid',
    borderWidth: 1
  },
  btnSubmit: {
    padding: 10,
    backgroundColor: '#AA0768',
    marginVertical: 10
  },
  submitText: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

export default Form;