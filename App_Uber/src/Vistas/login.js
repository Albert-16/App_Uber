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

const { IP, LOGIN, PORT } = InfoApi;

import KeyboardView from '../Componentes/keyboardView.js';

const Login = ({ navigation }) => {

    const [hidePassword, setHidePassword] = useState(true);
    const Ruta = "http://" + IP + ":" + PORT + LOGIN;
    return (
        <StyledScroll>
            <StyledContainer>
                <StatusBar style="light" />
                <InnerContainer>
                    <PageLogo resizeMode="cover" source={require('../../assets/img/Logo.png')} />
                    <PageTitulo>Sistema de Uber</PageTitulo>
                    <Subtitle>Iniciar Sesión</Subtitle>

                    <Formik
                        initialValues={{ login: '', contrasenia: '' }}
                        onSubmit={async (values) => {
                            try {
                                // console.log(values);
                                const respuesta = await fetch(Ruta, {
                                    method: 'POST',
                                    headers: {
                                        Accept: 'application/json',
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({
                                        login: values.login,
                                        contrasenia: values.contrasenia
                                    })
                                });

                                const json = await respuesta.json();
                                const data = json.Información;
                                if (!data.token) {
                                    console.log(data);
                                }
                                else {
                                    const token = data.token;
                                    await AsyncStorage.setItem('token', token);
                                    const token2 = await AsyncStorage.getItem('token');
                                    console.log("Token:", token2);
                                    navigation.navigate("Bienvenida");
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
                                    label="Usuario o Correo Electrónico"
                                    icon="person"
                                    placeholder="Example@gmail.com"
                                    placeholderTextColor={color5}
                                    onChangeText={handleChange('login')}
                                    onBlur={handleBlur('login')}
                                    values={values.login}

                                />

                                <MyTextInput
                                    label="Contraseña"
                                    icon="lock"
                                    placeholder="Ingrese su contraseña"
                                    placeholderTextColor={color5}
                                    onChangeText={handleChange('contrasenia')}
                                    onBlur={handleBlur('contrasenia')}
                                    values={values.contrasenia}
                                    secureTextEntry={hidePassword}
                                    isPassword={true}
                                    hidePassword={hidePassword}
                                    setHidePassword={setHidePassword}

                                />

                                <MsgBox>...</MsgBox>
                                <StyledButton onPress={handleSubmit}>
                                    <ButtonText>Aceptar</ButtonText>
                                </StyledButton>
                                <Line />
                                <StyledButton btn2={true} onPress={() => navigation.navigate("RegistroUsuario")}>
                                    <ButtonText btn2={true} >Registrarse</ButtonText>
                                </StyledButton>
                                <Line />

                                <ExtraView>
                                    <ExtraText>¿Olvido su contraseña? </ExtraText>
                                    <TextLink onPress={() => navigation.navigate("Bienvenida")}>
                                        <TextLinkContent>Recuperar Contraseña</TextLinkContent>
                                    </TextLink>
                                </ExtraView>
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



export default Login;