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
const {color5,color6,color2} = Colors;
import {Icon} from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import { Octicons, Ionicons,AntDesign } from '@expo/vector-icons';
const NavFavoritos = () => {
  return (
    <FlatList data={data}   
            keyExtractor={(item) => item.id} 
            ItemSeparatorComponent={()=> (
                <View
                    style={[tw`bg-gray-200`,{
                        height:0.5
                    }]}
                />
  )}
                renderItem={({ item:{location,destination,icon} }) => (
                    <TouchableOpacity style={[tw`flex-row items-center p-3`]}>
                       

                        <Ionicons 
                                style={[tw`mr-4 rounded-full p-3`,{
                                    backgroundColor: color6
                                }]}
                                name={icon} size={18} color={color5} />
                        
                         
                            <View>
                                <Text style={tw`text-white font-semibold text-lg`}>{location}</Text>
                                <Text style={tw`text-gray-300`}>{destination}</Text>
                            </View>  
                    </TouchableOpacity>
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