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
    MenuImagen,
    StyleScrollView
} from '../Componentes/style';



const MenuPrincipal = ({ navigation }) => {

    return (

        <StyledContainer>
            <StatusBar style="light" />

            <InnerContainer>


                <MenuContainer>
                    <StyledFormArea>

                        <PageTitulo Menu={true}>Uber</PageTitulo>
                        <Subtitle Menu={true}>Pagina Principal</Subtitle>
                       
                        <Line />
                        <StyledButton onPress={() => { navigation.navigate("Viajes")}}>
                            <ButtonText>Viajes</ButtonText>
                        </StyledButton>
                       

                        <Line />
                        <StyledButton onPress={() => { navigation.navigate("Vehículos") }}>
                            <ButtonText>Vehículos</ButtonText>
                        </StyledButton>
                        <Line />

                    
                        <StyledButton onPress={() => { navigation.navigate("Ciudades") }}>
                            <ButtonText>Ciudades</ButtonText>
                        </StyledButton>
                        <Line />

                        <StyledButton onPress={() => {navigation.navigate("Modificar Usuario") }}>
                            <ButtonText>Modificar Usuario</ButtonText>
                        </StyledButton>
                        <Line />

                        <StyledButton onPress={() => {navigation.navigate("Login") }}>
                            <ButtonText>Cerrar Sesión</ButtonText>
                        </StyledButton>
                        <Line />

                    </StyledFormArea>
                </MenuContainer>

            </InnerContainer>

        </StyledContainer>

    );
};

export default MenuPrincipal;