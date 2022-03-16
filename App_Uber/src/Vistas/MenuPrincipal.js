import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { store } from '../Store/store';
import NavOptions from '../Navegacion/NavOptions';
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
    PageLogo,
    PageHomeLogo
} from '../Componentes/style';



const MenuPrincipal = ({ navigation }) => {

    return (

        <Provider store={store}>
            <StyledContainer>
            <StatusBar style="light" />
                <InnerContainer>
                    <PageTitulo>Uber</PageTitulo>
                    <PageHomeLogo resizeMode="contain" source={require('../../assets/img/LogouBER2.png')} />
                    <NavOptions />
                </InnerContainer>
            </StyledContainer>

        </Provider>

    );
};

export default MenuPrincipal;