import React from 'react';
import { FlatList, Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Octicons, Ionicons,AntDesign } from '@expo/vector-icons';
import { HOST } from '@env';
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
    Colors,
    LeftIcon,
    MenuImagen,
    StyleScrollView,
    PageLogo,
    PageHomeLogo,
    StyledButtonHome,
    CenterIcon,
    RightIcon
} from '../Componentes/style';
import { useNavigation } from '@react-navigation/native';

const { color2, color6, color5 } = Colors;

const data = [
    {
        id: "1",
        title: "Viajes",
        screen: "Viajes",
        icon: "enviroment"
    },
    {
        id: "2",
        title: "Mi Perfil",
        screen: "Inicio",
        icon: "user"
    },
    {
        id: "3",
        title: "Historial de Viajes",
        screen: "Viajes",
        icon: "book"
    }
];

const NavOptions = () => {
 console.log(HOST);
   const navigation = useNavigation()
    return (
        <InnerContainer>
            <MenuContainer>

                <FlatList data={data}   keyExtractor={(item) => item.id} 
                renderItem={({ item }) => (
                    <StyledButtonHome onPress={() => { navigation.navigate(item.screen)} }>
                        <CenterIcon>
                            <AntDesign name={item.icon} size={30} color={color5} />
                        </CenterIcon>
                        <ButtonText>{item.title}</ButtonText>
                        <RightIcon center={true}>
                              <AntDesign name="rightcircle" size={30} color={color5} />
                        </RightIcon>
                    </StyledButtonHome>
                   
                )}
                />
             <Line />
             <Subtitle>Sistema de Uber ® 2022</Subtitle>
            </MenuContainer>

        </InnerContainer>

    );
};

export default NavOptions;