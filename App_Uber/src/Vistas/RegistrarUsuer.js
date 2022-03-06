import React, { useState, ScrollView } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Octicons, Ionicons } from '@expo/vector-icons';
import { Formik } from 'formik';
import { Alert, SectionList, View } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

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
} from '../componentes/style';

const { color2, color6, color5 } = Colors;

const RegistrarUsuario = () => {
    const [hidePassword, setHidePassword] = useState(true);
    return (
   
            <StyledContainer>
                             

                <StatusBar style="light" />
                <InnerContainer>

                    <PageTitulo>Registro de Usuarios</PageTitulo>


                    <Formik
                        initialValues={{ usuario: '', contrasenia: '', nombre: '', apellido: '', confirmarContrasenia: '' }}
                        onSubmit={async (values) => {
                            try {
                                // console.log(values);
                                /*
                                const respuesta = await fetch('http://192.168.90.86:4005/uber/user/login', {
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
                                    console.log("Llego");
                                    await AsyncStorage.setItem('token', token);
                                }
                                //console.log(data.token);
                                console.log(data.usuario);
                                console.log("Mensaje: ", json.Mensaje);
                                Alert.alert("Aviso", json.Mensaje);
                                const token = await AsyncStorage.getItem('token');
                                console.log("Token", token);
                           */
                            } catch (error) {
                                console.log(error);
                                Alert.alert("Error", "error: " + error.message);
                            }

                        }} >
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <StyledFormArea>
                                <StyledScroll>
                                <MyTextInput
                                    label="DNI"
                                    icon="person"
                                    placeholder="Ingrese su DNI"
                                    placeholderTextColor={color5}
                                    onChangeText={handleChange('usuario')}
                                    onBlur={handleBlur('usuario')}
                                    values={values.usuario}

                                />

                                <MyTextInput
                                    label="Usuario"
                                    icon="person"
                                    placeholder="Ingrese su Usuario"
                                    placeholderTextColor={color5}
                                    onChangeText={handleChange('usuario')}
                                    onBlur={handleBlur('usuario')}
                                    values={values.usuario}

                                />

                                <MyTextInput
                                    label="Nombre"
                                    icon="person"
                                    placeholder="Ingrese su Nombre"
                                    placeholderTextColor={color5}
                                    onChangeText={handleChange('nombre')}
                                    onBlur={handleBlur('nombre')}
                                    values={values.nombre}

                                />

                                <MyTextInput
                                    label="Apellido"
                                    icon="person"
                                    placeholder="Ingrese su Apellido"
                                    placeholderTextColor={color5}
                                    onChangeText={handleChange('apellido')}
                                    onBlur={handleBlur('apellido')}
                                    values={values.apellido}

                                />

                                <MyTextInput
                                    label="Correo Electrónico"
                                    icon="mail"
                                    placeholder="Ingrese su correo"
                                    placeholderTextColor={color5}
                                    onChangeText={handleChange('nombre')}
                                    onBlur={handleBlur('nombre')}
                                    values={values.nombre}

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

                                <MyTextInput
                                    label="Confirmar Contraseña"
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


                                <StyledButton onPress={handleSubmit}>
                                    <ButtonText>Registrar</ButtonText>
                                </StyledButton>
                                <Line />
                                <StyledButton btn2={true} onPress={handleSubmit}>
                                    <ButtonText btn2={true} >Cancelar</ButtonText>
                                </StyledButton>
                                <Line />
                                <ExtraView>
                                    <ExtraText>
                                        ¿Tienes una Cuenta?   </ExtraText>
                                    <TextLink>
                                        <TextLinkContent>Login</TextLinkContent>
                                    </TextLink>

                                </ExtraView>
                                </StyledScroll>
                            </StyledFormArea>
                        )}
                    </Formik>
                </InnerContainer>
               
            </StyledContainer>

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

export default RegistrarUsuario;