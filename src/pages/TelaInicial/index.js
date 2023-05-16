import React from 'react';
import { View, Text, StyleSheet,Image ,TextInput, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native';

export default function TelaInicial() {
    const navigation = useNavigation();
    return(
        
        <View style={styles.container}>
                   <View style={styles.containerLogo}>
                <Animatable.Image
                animation="flipInY"
                source={require('../../assets/logoo.png')}
                style={{ width: '40%'}}
                resizeMode="contain"
                />
            </View>
            <Animatable.View animation="fadeInLeft" delay={200} style={styles.containerHeader}> 
                <Text style={styles.message}>Bem-vindo ao seu perfil: Profissional!</Text>
                


            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}> </Text>
                <TextInput
                placeholder="Clique nas opções abaixo e comece!"
                style={styles.input}
                
                />
                


<TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('Solicitação')}
                >
                    <Text style={styles.buttonText}>Verificar a solicitação de serviços</Text>
                                    
                </TouchableOpacity>
                
               
                
              
              
                           
                                     
                    
 

            </Animatable.View>
            
        </View>
    );
} 
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#38a69d'

    },
    containerLogo:{
        flex:1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerHeader:{
        marginTop: '5%',
        marginBottom:'5%',
        paddingStart: '5%',

    },
    message:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF'
    },
    containerForm: {
        backgroundColor: '#FFF',
        flex:1,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize: 8,
        marginTop:28,
    },
    input:{
        borderBottomWidth: 1,
        heigth: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button:{
        backgroundColor: '#38a69d',
        width:'100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegister:{
        marginTop: 14,
        alignSelf: 'center'
    },
    registerText:{
        color: '#38a69d'
    }
})