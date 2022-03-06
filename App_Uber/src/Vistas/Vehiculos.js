import React from "react";

//importamos todos nuestros componentes
import {
    Contenedor,
    ContainerContenido,
    ContainerContenido2,
    Viewbotones,
    Button,
    ButtonText,
    Texto,
    TextoSecundario,
    Myinput,
    Line,
    Image,
    Caja
} from '../componentes/stylesVehiculos';

const Vehiculo = () => {
    return (
        <Contenedor>
            <Image resizeMode="cover" source={require('../../assets/carro.png')}>
                <Caja>
                    <Texto>Registrar Vehículo</Texto>
                </Caja>
                <ContainerContenido>
                    <TextoSecundario>Marca</TextoSecundario>
                    <ContainerContenido2>
                        <Myinput placeholder="Marca del vehículo" />
                    </ContainerContenido2>

                    <TextoSecundario>Modelo</TextoSecundario>
                    <ContainerContenido2>
                        <Myinput placeholder="Modelo del vehículo" />
                    </ContainerContenido2>

                    <TextoSecundario>Placa</TextoSecundario>
                    <ContainerContenido2>
                        <Myinput placeholder="Placa del vehículo" />
                    </ContainerContenido2>

                    <TextoSecundario>Año </TextoSecundario>
                    <ContainerContenido2>
                        <Myinput placeholder="Año del vehículo" />
                    </ContainerContenido2>

                    <TextoSecundario>Color</TextoSecundario>
                    <ContainerContenido2>
                        <Myinput placeholder="Color del vehículo" />
                    </ContainerContenido2>
                    <Viewbotones>
                        <Button>
                            <ButtonText>Registrar</ButtonText>
                        </Button>
                        <Button>
                            <ButtonText>Cancelar</ButtonText>
                        </Button>
                    </Viewbotones>
                    <Line></Line>
                </ContainerContenido>
            </Image>
        </Contenedor>
    );
}
export default Vehiculo;