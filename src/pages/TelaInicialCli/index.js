import React, { useState } from 'react';
import { View, Text, StyleSheet, Picker, TextInput, Button } from 'react-native';

const services = [
  { id: '1', name: 'Pedreiro' },
  { id: '2', name: 'Gesseiro' },
  { id: '3', name: 'Ladrilheiro' },
  { id: '4', name: 'Pintor' },
  { id: '5', name: 'Armador' },
];

export default function ServiceRequestScreen() {
  const [service, setService] = useState('');
  const [description, setDescription] = useState('');

  function handleServiceChange(value) {
    setService(value);
  }

  function handleSendServiceRequest() {
    function handleSendServiceRequest() {
      db.transaction((tx) => {
        tx.executeSql(
          'INSERT INTO services (service, description) VALUES (?, ?)',
          [service, description],
          () => {
            console.log('Solicitação de serviço adicionada com sucesso!');
          },
          (error) => {
            console.log('Erro ao adicionar solicitação de serviço:', error);
          },
        );
      });
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione um tipo de serviço:</Text>
      <Picker selectedValue={service} onValueChange={handleServiceChange}>
        {services.map((service) => (
          <Picker.Item key={service.id} label={service.name} value={service.id} />
        ))}
      </Picker>
      <Text style={styles.title}>Descreva o serviço que deseja:</Text>
      <TextInput
        style={styles.input}
        multiline
        numberOfLines={4}
        placeholder="Digite aqui a descrição do serviço"
        onChangeText={(text) => setDescription(text)}
        value={description}
      />
      <Button title="Enviar solicitação" onPress={handleSendServiceRequest} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '90%',
    height: 100,
    padding: 10,
    marginVertical: 10,
  },
});
