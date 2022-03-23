import React from 'react';
import { FlatList, Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Octicons, Ionicons, AntDesign } from '@expo/vector-icons';
import { HOST } from '@env';
import tw from 'tailwind-react-native-classnames';
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
import { useSelector } from 'react-redux';
import { selectedDestination, selectedOrigin } from '../Slices/navSlice';
const { color2, color6, color5 } = Colors;
import { IP, IMAGE, PORT, LISTARVEHICULOS } from '@env'
const Ruta = "http://" + IP + ":" + PORT + IMAGE;
const data = [
    {
        id: "1",
        title: "Viajes",
        screen: "MapView",
        icon: "enviroment",
        image: "UberHome.png"
    }
];


const NavOptions = () => {
    const origin = useSelector(selectedOrigin);
    const navigation = useNavigation();
    return (


        <FlatList data={data} keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity style={[tw`p-2 pl-6 pb-8 pt-4   m-2 w-40`, {
                    backgroundColor: color2
                }]}
                    disabled={!origin}
                    onPress={() => { navigation.navigate(item.screen) }}>
                    <Image
                        source={{
                            uri: Ruta + item.image,
                            method: 'GET',
                        }}
                        resizeMode="contain"
                        style={{ width: 120, height: 120 }}
                    />
                    
                        <ButtonText style={tw`mt-2 text-lg font-semibold`}>{item.title}</ButtonText>
                        <RightIcon disabled={!origin} center={true}>
                             <AntDesign style={tw`p-2 rounded-full w-10 mt-4`} name="rightcircle" size={30} color={color5} />
                        </RightIcon>
                </TouchableOpacity>

            )}
        />



    );
};

export default NavOptions;