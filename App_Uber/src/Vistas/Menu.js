import React, { useState } from 'react';
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
    MenuImagen
} from '../Componentes/style';



const Menu = () => {

    return (
        <StyledContainer>
            <StatusBar style="light" />
            <InnerContainer>
            <MenuImagen resizeMode="cover" source={require('../../assets/img/uber3.jpeg')} />
                <MenuContainer>
                    <StyledFormArea>
                        <PageTitulo Menu={true}>Uber</PageTitulo>
                        <Subtitle Menu={true}>Bienvenido</Subtitle>
                        <Avatar resizeMode="cover" source={require('../../assets/img/Logo.png')} />
                        <Line />
                        <StyledButton onPress={() => { }}>
                            <ButtonText>Menú</ButtonText>
                        </StyledButton>
                        <Line />
                    </StyledFormArea>
                </MenuContainer>
            </InnerContainer>
        </StyledContainer>
    );
};

export default Menu;