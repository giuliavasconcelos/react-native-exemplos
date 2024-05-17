import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Estilos from '../estilos/Estilos';

export default props => {
    return (
        <View style={estilos.container}>
            {validaParOuImpar(props.numero)}
        </View>
    )
}

    function validaParOuImpar(numero) {
        return numero % 2 == 0
            ? <Text style={estilos.texto}>O número é par!</Text>
            : <Text style={estilos.texto}>O número é ímpar!</Text>
    }

    const estilos = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },

        texto: {
            fontSize: 20,
            fontWeight: 'bold',
            borderWidth: 2,
            borderColor: 'red',
            padding: 10,
        }
    });

