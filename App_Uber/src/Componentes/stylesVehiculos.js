//Librerias que necesitamos 
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components';
import Constants from 'expo-constants';


//Paleta de colores
export const Colors = {
    negro: '#12191D',
    segundo: '#1C262D',
    tercero: '#26363E',
    cuarto: '#7C98A9',
    blanco: '#FFFFFF',
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

export const ContainerContenido = styled.View`
width: 80%;
height: 80%;
padding: 0px;
margin: 25px;
`;
export const ContainerContenido2 = styled.View`
align-items: center;
margin-top: 10px;
`;

//Botones
export const Viewbotones = styled.View`
display:flex;
flex-direction:row;
align-self:center;
`;
export const Button = styled.TouchableOpacity`
width:40%;
background-color:${azulGod};
padding:15px;
color:${blanco};
borderRadius:10px;
margin:20px;
align-items:center;
`;
export const ButtonText = styled.Text`
color:${blanco};
`;

//Texto
export const Texto = styled.Text`
color: ${blanco};
font-weight: bold;
text-align:center;
padding: 40px;
margin-top: 45px;
fontSize: 20px;
`;

export const TextoSecundario = styled.Text`
color: ${blanco};
fontSize: 16px;
`;

//Elements
export const Myinput = styled.TextInput`
height: 40px;
margin: 12px;
borderWidth: 1px;
padding: 10px;
width: 100%;
background-color: ${blanco};
borderRadius: 10px;
`;
export const Line = styled.View`
height: 1px;
width: 100%;
background-color: ${blanco};
margin-vertical: 10px;
`;

export const Caja = styled.View`
 
`
export const Image = styled.ImageBackground`
flex: 1;
justifyContent: center;
`
 

