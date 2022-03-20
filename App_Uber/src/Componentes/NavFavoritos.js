import { StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native'
import React from 'react'


const data = [
    {
        id:1,
        icon:"location",
        location: "London, UK",
        destination: "London, Bridge,London, UK"
    },
    {
        id:2,
        icon:"location",
        location: "Danli, Honduras",
        destination: "Jacaleapa, Honduras"
    }
];

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
    StyledButtonHome,
    CenterIcon,
    Titulo,
    Subtitulo,
    StyledButtonFav,
    LeftIcon
} from '../Componentes/style';
const {color5,color6} = Colors;
import {Icon} from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import { Octicons, Ionicons,AntDesign } from '@expo/vector-icons';
const NavFavoritos = () => {
  return (
    <FlatList data={data}   
            keyExtractor={(item) => item.id} 
            
                renderItem={({ item:{location,destination,icon} }) => (
                    <StyledButtonFav style={tw`flex-row items-center p-3`}>
                        <LeftIcon center={true}>

                        <Ionicons 
                                style={tw`p-3`}
                                name={icon} size={30} color={color5} background={color6} />
                        </LeftIcon>
                         
                            <View>
                                <Text style={tw`text-white text-center`}>{location}</Text>
                                <Text style={tw`text-white`}>{destination}</Text>
                            </View>  
                    </StyledButtonFav>
                )}
                />
  )
}

export default NavFavoritos;

const styles = StyleSheet.create({
    title: {
        color: "white",
        fontSize: 16,
        lineHeight: 84,
        textAlign: "center"
      },
      subTitle: {
        color: "white",
        fontSize: 14,
        lineHeight: 84,
      }
});