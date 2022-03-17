import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
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
const MapViewViajes = ({ navigation }) => {

    return (
        <StyledContainerMap>
           
            <View style={tw`h-1/2`}>
                <Map />
            </View>
          
        </StyledContainerMap>





    );
};

export default MapViewViajes;