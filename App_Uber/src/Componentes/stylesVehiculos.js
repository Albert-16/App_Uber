//Librerias que necesitamos 
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components';
import Constants from 'expo-constants'

//Paleta de colores
export const Colors = {
    negro: '#12191D',
    segundo: '#1C262D',
    tercero: '#26363E',
    cuarto: '#7C98A9',
    blanco: '#F4F4F4',
    azulGod: '#0072E9'
};
const { negro, segundo, tercero, cuarto, blanco, azulGod } = Colors;

//Estilos a utilizar

//Contenedores
export const Contenedor = styled.View`
    flex: 1;
    background-color: ${negro};
    align-items: center;
    justifyContent: center;
    width: 100%;
    height: 100%;
    padding: 5px;
`;

export const containerContenido = styled.View`
width: "80%",
height: "80%",
padding: 0,
margin: 25,
`;
export const containerContenido2 = styled.View`
alignItems: 'center',
marginTop: 10,
`;

//Botones
export const Viewbotones = styled.View`
display:'flex',
flexDirection:'row',
alignSelf:'center'
`;
export const button = styled.TouchableOpacity`
width:"40%",
backgroundColor:${azulGod},
padding:15,
color:${blanco},
borderRadius:10,
margin:20,
alignItems:'center',
`;
export const buttonText = styled.Text`
color:${blanco},
`;

//Texto
export const Texto = styled.Text`
color: ${blanco},
fontWeight: "bold",
textAlign:"center",
padding:20,
fontSize: 30,
`;
export const TextoSecundario = styled.Text`
color: ${blanco},
fontSize: 16,
`;

//Elements
export const Myinput = styled.TextInput`
height: 40,
margin: 12,
borderWidth: 1,
padding: 10,
width: "100%",
backgroundColor: ${blanco},
borderRadius: 10,
`;
export const line = style.View`
height: 1,
width: '100%',
backgroundColor: ${blanco},
marginVertical: 10
`;

 

