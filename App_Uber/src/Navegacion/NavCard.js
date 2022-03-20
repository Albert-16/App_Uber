import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
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
    PageHomeLogo,
    LeftIcon,
    StyledButtonHome,
    StyledButtonFav
} from '../Componentes/style';

import tw from 'tailwind-react-native-classnames';
import { StatusBar } from 'expo-status-bar';
const { color1, color2, color5 } = Colors;
import { API_KEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../Slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import NavFavoritos from "../Componentes/NavFavoritos";
import { Octicons, Ionicons ,Fontisto } from '@expo/vector-icons';
const NavigatorCard = () => {

    const dispatch = useDispatch();
    const navigation = useNavigation();
    return (

        <SafeAreaView style={tw`bg-black flex-1`}>
            <StatusBar style="dark" />
            <PageTitulo>Buenos Dias</PageTitulo>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <View>

                    <GooglePlacesAutocomplete

                        styles={styles}
                        onPress={(data, details = null) => {
                            // 'details' is provided when fetchDetails = true

                            dispatch(setDestination({
                                location: details.geometry.location,
                                description: data.description,
                            }));
                         //   console.log(data);
                           // console.log(details);
                            navigation.navigate("Uber");
                           // dispatch(setDestination(null));
                        }}
                        placeholder="¿A dónde desea ir?"
                        fetchDetails={true}
                        debounce={400}
                        enablePoweredByContainer={false}
                        minLength={2}
                        returnKeyType={"search"}
                        query={{ key: API_KEY, language: "en" }}
                        nearbyPlacesAPI='GooglePlacesSearch'

                    />

                </View>

                <NavFavoritos/>
            </View>
            <View style={tw`flex-row mt-auto`}>
                <StyledButton btn4={true}  >
                    <Fontisto name="taxi" color={color5} size={16} />
                    <ButtonText>Viajar</ButtonText>
                </StyledButton>

                <StyledButton btn3={true}  >
                    <Fontisto name="taxi" color={color5} size={16} />
                    <ButtonText>Método de Pago</ButtonText>
                </StyledButton>
            </View>
        </SafeAreaView>

    );
};

export default NavigatorCard;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        paddingTop: 20,
        flex: 0
    },
    textInput: {
        backgroundColor: color5,
        borderRadius: 0,
        fontSize: 18
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0
    }
});