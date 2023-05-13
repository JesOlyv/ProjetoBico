import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CadastroScreen() {
  const navigation = useNavigation();
  const [isCliente, setIsCliente] = useState(true);
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [idade, setIdade] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [profissao, setProfissao] = useState('');
  const [experienciaProfissional, setExperienciaProfissional] = useState('');

  const handleCadastro = () => {
    // Aqui você pode implementar a lógica para cadastrar o usuário no banco de dados
    console.log('Cadastro realizado com sucesso!');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[styles.filterButton, isCliente ? styles.activeFilterButton : null]}
          onPress={() => setIsCliente(true)}
        >
          <Text style={styles.filterButtonText}>Cliente</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterButton, !isCliente ? styles.activeFilterButton : null]}
          onPress={() => setIsCliente(false)}
        >
          <Text style={styles.filterButtonText}>Profissional</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.input}
          placeholder="Telefone"
          value={telefone}
          onChangeText={setTelefone}
        />
        <TextInput
          style={styles.input}
          placeholder="Endereço"
          value={endereco}
          onChangeText={setEndereco}
        />
        <TextInput
          style={styles.input}
          placeholder="Idade"
          value={idade}
          onChangeText={setIdade}
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />
        { !isCliente && (
          <>
            <TextInput
              style={styles.input}
              placeholder="Profissão"
              value={profissao}
              onChangeText={setProfissao}
            />
            <TextInput
              style={styles.input}
              placeholder="Experiência Profissional"
              value={experienciaProfissional}
              onChangeText={setExperienciaProfissional}
            />
          </>
        )}
        <TouchableOpacity
          style={styles.button}
          onPress={handleCadastro}
        >
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  filterButton: {
    backgroundColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  activeFilterButton: {
    backgroundColor: '#007AFF',
  },
  filterButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  formContainer: {
    flex: 1,},
    input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
    },
    button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
    },
    buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    },
    });
    
    