import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';

export default function HistoricoServicos() {
  const navigation = useNavigation();

  const [servicos, setServicos] = React.useState([]);

  function carregarServicos() {
    // Simular a carga de serviços realizados
    const historicoServicos = [
      { nome: 'construção de casa', data: '10/04/2022', cliente: 'João da Silva' },
      { nome: 'reforma de banheiro', data: '20/05/2022', cliente: 'Maria Souza' },
      { nome: 'construção de prédio', data: '01/06/2022', cliente: 'José dos Santos' },
    ];

    setServicos(historicoServicos);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        
      </View>

      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.texto}>Histórico de serviços realizados</Text>

        <TouchableOpacity style={styles.botao} onPress={carregarServicos}>
          <Text style={styles.textoBotao}>Carregar serviços</Text>
        </TouchableOpacity>

        <Text style={styles.textoServicos}>Você realizou {servicos.length} serviços:</Text>

        {servicos.map((servico) => (
          <View key={servico.nome} style={styles.itemServico}>
        
            <View>
              <Text style={styles.textoServicoNome}>{servico.nome}</Text>
              <Text style={styles.textoServicoInfo}>{servico.data} - Cliente: {servico.cliente}</Text>
            </View>
          </View>
        ))}
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 2,
    backgroundColor: '#F5F5F5',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  texto: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  botao: {
    backgroundColor: '#38a69d',
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  textoBotao: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textoServicos: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  itemServico: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});