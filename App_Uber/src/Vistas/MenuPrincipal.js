import React, { useState } from 'react';
import { View, Text, StyleSheet,SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';


import NavOptions from '../Navegacion/NavOptions';
import {
    StyledContainer,
    InnerContainer,
    PageTitulo,
    Subtitle,
    StyledFormArea,
    StyledButton,
    ButtonText,
    Colors,
    Line,
    MenuContainer,
    Avatar,
    MenuImagen,
    StyleScrollView,
    PageLogo,
    PageHomeLogo
} from '../Componentes/style';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_API , API_KEY } from '@env';
const { color2, color5, color6 } = Colors;
import {setDestination,setOrigin } from '../Slices/navSlice';
import { useDispatch } from 'react-redux';

const MenuPrincipal = ({ navigation }) => {
  const dispatch = useDispatch()

    return (

     
            <StyledContainer>
                <StatusBar style="light" />
                <InnerContainer>

                    <PageHomeLogo resizeMode="contain" source={require('../../assets/img/LogouBER2.png')} />

                    <GooglePlacesAutocomplete

                        styles={{
                            container: {
                                flex: 0,
                                margin: 20,
                                width: 300,
                            },
                            textInput: {
                                backgroundColor: color5,
                                padding: 15,
                                paddingLeft: 55,
                                paddingRight: 55,
                                borderRadius: 5,
                                fontSize: 18,
                                height: 60,
                                width: 200,
                                marginVertical: 3,
                                marginBottom: 10,
                                color: color2
                            }
                        }}
                        onPress={(data, details = null) => {
                            // 'details' is provided when fetchDetails = true
                           
                           dispatch(setOrigin({
                                location: details.geometry.location,
                                description: data.description,
                            })); 
                           // console.log(data);
                           // console.log(details);

                            dispatch(setDestination(null));
                          }}
                        placeholder="¿A dónde desea ir?"
                        fetchDetails={true}
                        debounce={400}
                        enablePoweredByContainer={false}
                        minLength={2}
                        returnKeyType={"search"}
                        query={{key: API_KEY, language: "en"}}
                        nearbyPlacesAPI='GooglePlacesSearch'

                    />
                    <NavOptions />


                </InnerContainer>
            </StyledContainer>
           
        

    );
};


const styles = StyleSheet.create({
    textInput: {
        backgroundColor: color2,
        padding: 15,
        width: '120px',
        paddingLeft: 55,
        paddingRight: 55,
        borderRadius: 5,
        fontSize: 18,
        height: '100px',
        marginVertical: 3,
        marginBottom: 10,
        color: color5
    }
});

export default MenuPrincipal;