import React, { useState } from 'react';
import { View, TextInput, Button, Alert, SafeAreaView, Text } from 'react-native';




export default function TelaInicial() {
    const [solicitacao, setSolicitacao] = useState('');
    
    // função para buscar a última solicitação de serviço do banco de dados
    const buscarUltimaSolicitacao = async () => {
        try {
            const resultado = await db.executeSql('SELECT * FROM solicitacoes ORDER BY id DESC LIMIT 1');
            const rows = resultado[0].rows;
            if (rows.length > 0) {
                const { cliente, descricao, data } = rows.item(0);
                setSolicitacao(`Cliente: ${cliente}\nDescrição: ${descricao}\nData: ${data}`);
            }
        } catch (error) {
            console.error(error);
            Alert.alert('Erro ao buscar solicitação de serviço.');
        }
    };
    
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>Bem-vindo ao seu perfil: Profissional!</Text>
            <Button title="Verificar solicitação de serviço" onPress={buscarUltimaSolicitacao} />
            <Text style={{ marginTop: 20 }}>{solicitacao}</Text>
        </View>
    );
}
  