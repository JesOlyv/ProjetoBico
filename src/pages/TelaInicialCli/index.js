import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function CatalogoServicosScreen() {
  const servicos = [
    { id: '1', nome: 'Pedreiro - Luis Alves - 10 anos de experiência' },
    { id: '2', nome: 'Gesseiro - Almir Gomes - 10 anos de experiência' },
    { id: '3', nome: 'Ladrilheiro - Pedro Dutra - 5 anos de experiência' },
    { id: '4', nome: 'Pintor - Jorge Silva - 1 ano de experiência' },
    { id: '5', nome: 'Armador - Celso Bueno - 2 anos de experiência' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.nome}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Catálogo de Serviços de Obra</Text>
      <FlatList
        data={servicos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Text style={[styles.contactText, styles.centeredText]}>
        Se estiver precisando de um de nossos profissionais, entre em contato através do nosso email: constregis@gmail.com 
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38a69d',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
    textAlign: 'center',
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  itemText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    fontStyle: 'italic',
  },
  contactText: {
    marginTop: 30,
    fontSize: 26,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#00000',
  },
  centeredText: {
    textAlign: 'center',
  },
});
