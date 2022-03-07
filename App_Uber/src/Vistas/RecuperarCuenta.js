import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Octicons, Ionicons } from '@expo/vector-icons';
import { Formik } from 'formik';
import { Alert, View } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { InfoApi } from "../Configuracion/configuracion";

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitulo,
    Subtitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    Colors,
    StyledButton,
    ButtonText,
    MsgBox,
    Line,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent,
    StyledScroll
} from '../Componentes/style';

const { color2, color6, color5 } = Colors;

const { IP, RECUPERARCONTRA, PORT } = InfoApi;



const RecuperarCuenta = ({ navigation }) => {

    const [hidePassword, setHidePassword] = useState(true);
    const Ruta = "http://" + IP + ":" + PORT + RECUPERARCONTRA;
    return (
        <StyledScroll>
            <StyledContainer>
                <StatusBar style="light" />
                <InnerContainer>
                    <PageLogo resizeMode="cover" source={require('../../assets/img/Logo.png')} />
                    <PageTitulo>Sistema de Uber</PageTitulo>
                    <Subtitle>Recuperar Cuenta</Subtitle>

                    <Formik
                        initialValues={{ correo :'' }}
                        onSubmit={async (values) => {
                            try {
                                // console.log(values);
                                const respuesta = await fetch(Ruta, {
                                    method: 'POST',
                                    headers: {
                                        Accept: 'application/json',
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify(values)
                                });

                                const json = await respuesta.json();
                                const data = json.Información;
                                
                                if (json.Titulo == "Envió Exitoso") {
                                    navigation.navigate("Restablecer Contraseña");
                                }
                                else {
                                console.log("Error");
                                    
                                }
                                
                                //console.log(data.token);
                                
                                console.log("Mensaje: ", json.Mensaje);
                                Alert.alert("Aviso", json.Mensaje);


                            } catch (error) {
                                console.log(error);
                                Alert.alert("Error", "error: " + error.message);
                            }

                        }} >
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <StyledFormArea>
                                <MyTextInput
                                    label="Correo Electrónico"
                                    icon="mail"
                                    placeholder="Example@gmail.com"
                                    placeholderTextColor={color5}
                                    onChangeText={handleChange('correo')}
                                    onBlur={handleBlur('correo')}
                                    values={values.correo}

                                />

                            

                                <Line />
                                <StyledButton onPress={handleSubmit}>
                                    <ButtonText>Aceptar</ButtonText>
                                </StyledButton>
                                <Line />
                               

                                
                            </StyledFormArea>
                        )}
                    </Formik>
                </InnerContainer>
            </StyledContainer>
        </StyledScroll>
    );
};

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={color5} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'eye-off' : 'eye'} size={30} color={color5} />
                </RightIcon>
            )}
        </View>
    )
}



export default RecuperarCuenta;