import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {
    PageTitulo,
    Colors,
} from '../Componentes/style';

import tw from 'tailwind-react-native-classnames';
import { StatusBar } from 'expo-status-bar';
const { color1, color2, color5,color6,color7 } = Colors;
import { API_KEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../Slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import NavFavoritos from "../Componentes/NavFavoritos";
import { Fontisto } from '@expo/vector-icons';

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
                <View><NavFavoritos /></View>

            </View>
            <View style={tw`flex-row justify-evenly py-2 mt-auto`}>
                <TouchableOpacity style={[tw`flex flex-row w-24 px-3 py-3 rounded-full text-center`,{
                    backgroundColor: color6,
                    width: 100,
                    height:  50
                }]}
                onPress={() => navigation.navigate("Perfil")}
                >
                    <Fontisto name="taxi" color={color5} size={16} />
                    <Text style={tw`text-white text-center `}>  Viajar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[tw`flex flex-row justify-between w-24 px-3 py-3 rounded-full`,{
                    backgroundColor: color7,
                    width: 170,
                    height:  50
                }]}
                 onPress={() => navigation.navigate("Pago")}
                >
                    
                    <Fontisto name="taxi" color={color5} size={16} />
                    <Text style={tw`text-white text-center`}>Método de Pago</Text>
                </TouchableOpacity>
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