import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';

export default function Solicitação() {
  const navigation = useNavigation();

  const [solicitacoes, setSolicitacoes] = React.useState([]);

  function verificarSolicitacoes() {
    // Simular o recebimento de solicitações
    const novasSolicitacoes = ['construção de casa', 'reforma de banheiro'];

    setSolicitacoes(novasSolicitacoes);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        
      </View>

      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.texto}>Verificar solicitações de serviço</Text>

        <TouchableOpacity style={styles.botao} onPress={verificarSolicitacoes}>
          <Text style={styles.textoBotao}>Verificar</Text>
        </TouchableOpacity>

        <Text style={styles.textoSolicitacoes}>Você possui {solicitacoes.length} solicitações:</Text>

        {solicitacoes.map((solicitacao) => (
          <View key={solicitacao} style={styles.itemSolicitacao}>
           
            <Text style={styles.textoSolicitacao}>{solicitacao}</Text>
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
  textoSolicitacoes: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#38a69d',
  },
  itemSolicitacao: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconeSolicitacao: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  textoSolicitacao: {
    fontSize: 16,
    color: '#333',
  },
});
