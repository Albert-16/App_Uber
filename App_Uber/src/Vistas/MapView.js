import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';


import {
    StyledContainer,
    InnerContainer,
    PageTitulo,
    Subtitle,
    StyledFormArea,
    StyledButton,
    ButtonText,
    Line,
    MenuContainer,
    Avatar,
    MenuImagen,
    StyleScrollView,
    StyledContainerMap,
    Colors
} from '../Componentes/style';

import Map from '../Componentes/Map';
import tw from 'tailwind-react-native-classnames';
import { createStackNavigator } from '@react-navigation/stack'
import NavigatorCard from '../Navegacion/NavCard';
import UberVehiculosOptions from '../Navegacion/UberVehiculosOptions';
const { color2, color5 } = Colors;

const MapViewViajes = () => {
    const Stack = createStackNavigator();
    return (

        <View style={tw`flex-1 bg-black`}>
            <StatusBar style="dark" />

            <View style={tw`h-1/2`}>
                <Map />
            </View>
            <View style={tw`h-1/2`}>
                <Stack.Navigator screenOptions={{
                    headerStyled: {
                        backgroundColor: color2,
                        
                    },
                    headerTintColor: color5,
                    headerTransparent: true,
                    headerShown:false,
                    headerBackTitle: '',
                    
                }}>
                    <Stack.Screen
                        name='NavigatorCard'
                        component={NavigatorCard}
                        options={{
                            title: "",
                            headerShown:false

                        }}
                    />

                    <Stack.Screen
                        name='Uber'
                        component={UberVehiculosOptions}
                        options={{
                            title: "Seleccione un Vehiculo",
                          
                        }}
                    />
                </Stack.Navigator>
            </View>

            

        </View>





    );
};

export default MapViewViajes;