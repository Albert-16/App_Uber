import React, { useState } from 'react';
import { Text, View, StyleSheet,SafeAreaView } from 'react-native';
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
    StyledContainerMap
} from '../Componentes/style';

import Map from '../Componentes/Map';
import tw from 'tailwind-react-native-classnames';
import { createStackNavigator } from '@react-navigation/stack'
import NavigatorCard from '../Navegacion/NavCard';
import UberVehiculosOptions from '../Navegacion/UberVehiculosOptions';

const MapViewViajes = ({ navigation }) => {
    const Stack = createStackNavigator();
    return (
       
        <View style={tw`bg-black flex-1`}>

            <View style={tw`h-1/2`}>
                <Map />
            </View>

            <View style={tw`h-1/2`}>
                <Stack.Navigator>
                    <Stack.Screen
                        name='NavigatorCard'
                        component={NavigatorCard}
                        options={{
                            headerShown: false
                        }}
                    />

                    <Stack.Screen
                        name='uberVehiculosOptions'
                        component={UberVehiculosOptions}
                        options={{
                            headerShown: false
                        }}
                    />
                </Stack.Navigator>
            </View>

        </View>
      




    );
};

export default MapViewViajes;