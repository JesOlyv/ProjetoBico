import NetInfo from '@react-native-community/netinfo';

try {
  const connectionInfo = await NetInfo.fetch();
  if (connectionInfo.isConnected) {
    console.log('Conexão estabelecida com sucesso!');
  } else {
    console.log('Não foi possível conectar-se à rede.');
  }
} catch (error) {
  console.log('Ocorreu um erro ao verificar a conexão:', error);
}