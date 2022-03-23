import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Octicons, Ionicons, Fontisto, FontAwesome, Entypo } from '@expo/vector-icons';

import NavOptions from '../Navegacion/NavOptions';
import NavFavoritos from '../Componentes/NavFavoritos';
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
import { GOOGLE_API, API_KEY } from '@env';
const { color2, color5, color6 } = Colors;
import { setDestination, setOrigin } from '../Slices/navSlice';
import { useDispatch } from 'react-redux';
import tw from 'tailwind-react-native-classnames';

const MenuPrincipal = ({ navigation }) => {
    const dispatch = useDispatch()

    return (


        <SafeAreaView style={tw`bg-black h-full`}>
            <StatusBar style="light" />
            <View style={tw`p-5`}>


                <TouchableOpacity style={tw`bg-black absolute top-5 right-3 z-50 p-3 rounded-full shadow-lg`}
                    onPress={() => navigation.navigate("Perfil")}
                >
                    <Entypo style={[tw`rounded-full p-2`, {
                        backgroundColor: color6,
                        

                    }]} name="user" color={color5} size={35} />
                </TouchableOpacity>

                <Image
                    resizeMode="contain"
                    style={
                        {
                            width: 100,
                            height: 100,
                            marginLeft: 120
                        }
                    }
                    source={require('../../assets/img/LogouBER2.png')} />

                <GooglePlacesAutocomplete

                    styles={styles}
                    onPress={async (data, details = null) => {
                        // 'details' is provided when fetchDetails = true

                        dispatch(setOrigin({
                            location: details.geometry.location,
                            description: data.description,
                        }));


                        // console.log(data);
                        // console.log(details);

                        dispatch(setDestination(null));



                    }}
                    placeholder="Lugar de Partida"
                    fetchDetails={true}
                    debounce={400}
                    enablePoweredByContainer={false}
                    minLength={2}
                    returnKeyType={"search"}
                    query={{ key: API_KEY, language: "en" }}
                    nearbyPlacesAPI='GooglePlacesSearch'

                />
                <NavOptions />
                <NavFavoritos />

            </View>
        </SafeAreaView>



    );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        paddingTop: 20,
        flex: 0
    },
    textInput: {
        backgroundColor: color5,
        borderRadius: 0,
        fontSize: 18,
        color: "#000",
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0
    }
});

export default MenuPrincipal;