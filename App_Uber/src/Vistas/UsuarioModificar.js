import React, { useState, ScrollView, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Octicons, Ionicons } from '@expo/vector-icons';
import { Formik } from 'formik';
import { Alert, SectionList, TextInputBase, View } from 'react-native';
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

const { IP, NEWUSER, PORT } = InfoApi;

const ModifcarUsario = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [hidePassword2, setHidePassword2] = useState(true);
    const [hidePasswordActual, setHidePasswordActual] = useState(true);
    const Ruta = "http://" + IP + ":" + PORT + NEWUSER;
    const presInicio = async () => {
        Alert.alert("Uber", "Hola");
    }

    const [Cliente, setCliente] = useState([]);
    useEffect(async () => {
        const token = await AsyncStorage.getItem('token');
        const cliente = JSON.parse(await AsyncStorage.getItem('Cliente'));
        setCliente(cliente);
      }, []);
    console.log(Cliente?.Apellido);
    const apellido2 = Cliente?.Apellido;
    return (
        <StyledScroll>
            <StyledContainer>


                <StatusBar style="light" />
                <InnerContainer>

                    <PageTitulo>Modificar de Usuarios</PageTitulo>


                    <Formik
                        initialValues={
                            {
                                dni:'',
                                nombre_Usuario: '',
                                contraseniaActual:'',
                                contrasenia: '',
                                nombre: '',
                                apellido: Cliente?.Apellido,
                                correo: '',
                                telefono: '',
                                confirmarContrasenia: ''
                            }}
                        onSubmit={async (values) => {
                            try {

                               // console.log(Ruta);
                                console.log(values);
                                
                            } catch (error) {
                                console.log(error);
                                Alert.alert("Error", "error: " + error.message);
                            }

                        }} >
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <StyledFormArea>

                                <MyTextInput
                                    label="DNI"
                                    icon="credit-card"
                                    placeholder="Ingrese su DNI"
                                    onSubmit={Cliente?.Apellido}                                    
                                    placeholderTextColor={color5}
                                    onChangeText={handleChange('dni')}
                                    onBlur={handleBlur('dni')}
                                    values={values.dni}

                                />

                                <MyTextInput
                                    label="Usuario"
                                    icon="person"
                                    placeholder="Ingrese su Usuario"
                                    placeholderTextColor={color5}
                                    onChangeText={handleChange('nombre_Usuario')}
                                    onBlur={handleBlur('nombre_Usuario')}
                                    values={values.nombre_Usuario}
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
                                    su={apellido2}
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
                                    onChangeText={handleChange('correo')}
                                    onBlur={handleBlur('correo')}
                                    values={values.correo}

                                />

                                <MyTextInput
                                    label="Teléfono"
                                    icon="device-mobile"
                                    placeholder="Ingrese su teléfono"
                                    
                                    placeholderTextColor={color5}
                                    onChangeText={handleChange('telefono')}
                                    onBlur={handleBlur('telefono')}
                                    values={values.telefono}

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
                                    onChangeText={handleChange('confirmarContrasenia')}
                                    onBlur={handleBlur('confirmarContrasenia')}
                                    values={values.confirmarContrasenia}
                                    secureTextEntry={hidePassword2}
                                    isPassword={true}
                                    hidePassword={hidePassword2}
                                    setHidePassword={setHidePassword2}

                                />
                                <MyTextInput
                                    label="Contraseña Actual"
                                    icon="lock"
                                    placeholder="Ingrese su contraseña"
                                    placeholderTextColor={color5}
                                    onChangeText={handleChange('contraseniaActual')}
                                    onBlur={handleBlur('contraseniaActual')}
                                    values={values.contraseniaActual}
                                    secureTextEntry={hidePasswordActual}
                                    isPassword={true}
                                    hidePassword={hidePasswordActual}
                                    setHidePassword={setHidePasswordActual}
                                />

                                <StyledButton onPress={handleSubmit}>
                                    <ButtonText>Guardar Cambios</ButtonText>
                                </StyledButton>
                                <Line />
                                <StyledButton btn2={true} onPress={() => navigation.navigate("Login")}>
                                    <ButtonText btn2={true} >Cancelar</ButtonText>
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

export default ModifcarUsario;