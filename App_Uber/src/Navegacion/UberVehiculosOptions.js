import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Octicons, Ionicons, Fontisto, FontAwesome, Entypo } from '@expo/vector-icons';
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
  RightIcon,
  Titulo,
  Formik
} from '../Componentes/style';
const { color5 } = Colors;
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { IP, IMAGE, PORT, LISTARVEHICULOS } from '@env';
import AsyncStorage from "@react-native-async-storage/async-storage";
const Ruta = "http://" + IP + ":" + PORT + IMAGE;
const RutaListar = "http://" + IP + ":" + PORT + LISTARVEHICULOS;
import { setVehiculos } from '../Slices/navSlice';
import { useSelector } from 'react-redux';
import { selectedTravelTimeInformation } from '../Slices/navSlice';
const data = [
  {
    id: "Uber-X-123",
    title: "UberX",
    multiplier: 1.2,
    image: "uber3.jpeg"
  },
  {
    id: "Uber-LX-123",
    title: "Uber LUX",
    multiplier: 1.2,
    image: "uber4.jpg"
  }
]












const UberVehiculosOptions = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const [ListarVeh, setListarVeh] = useState([]);
  const [precio,setPrecio] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const travelTimeInformation = useSelector(selectedTravelTimeInformation);
  const tarifa=10;
  const km = travelTimeInformation?.distance.value / 1000;
  const costo = km * tarifa;
 
  useEffect(async () => {
    const token = await AsyncStorage.getItem('token');
    setIsLoading(true);
    fetch(RutaListar, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      }
    })
      .then((res) => res.json()).then((resJson) => {
        setListarVeh(resJson)
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));


  }, []);


  useEffect(() => {
    try {
      const distanciaTexto = travelTimeInformation?.duration.text;
      const distanciaNumero = distanciaTexto.replace(" km","");
      setPrecio(distanciaNumero.toFixed(2));
      console.log(distanciaNumero);
    } catch (error) {
      console.error;
    }
  }, []);
  // console.log(ListarVeh.Información);

  const ListaDatos = ListarVeh.Información;
  return (



    <SafeAreaView style={tw`flex-grow bg-black`}>
 
        <View>
          <View>

            <TouchableOpacity style={tw`absolute top-2 left-3 z-50 p-2 rounded-full`}
              onPress={() => { navigation.navigate("NavigatorCard") }}
            >
              <Entypo name="chevron-left" color={color5} size={30} />
            </TouchableOpacity>
            <PageTitulo style={tw`text-white py-3 text-xl  text-center `}>Selecciona un Viaje - {travelTimeInformation?.distance.text}</PageTitulo>
            <Line />
          </View>
          <View style={tw`h-1/2`} >
            <FlatList data={ListaDatos}
              keyExtractor={(item) => item.Id}
              scrollEnabled={true}
              renderItem={({ item: { Id, title, image, multiplier }, item }) => (
                <TouchableOpacity style={tw`flex-row justify-between px-5 items-center ${Id === selected?.Id && "bg-gray-700"}`}
                  onPress={() => setSelected(item)}
                >
                  <Image
                    source={{
                      uri: Ruta + image,
                      method: 'GET',
                    }}
                    resizeMode="contain"
                    style={{ width: 100, height: 100 }}
                  />
                  <View style={tw`-ml-5`}>
                    <Text style={tw`text-white  font-semibold`}>{title}</Text>
                    <Text style={tw`text-white`}>Duración:{travelTimeInformation?.duration.text}</Text>
                  </View>
                  <Text style={tw`text-white `}>L. {costo.toFixed(0)}.00</Text>
                </TouchableOpacity>
              )}
            />


          </View>



          <View style={tw`h-1/2`}>
            <StyledButton disabled={!selected} style={tw`rounded-full`}>
              <Text style={tw`text-white text-center text-xl`}>Seleccionar {selected?.title}</Text>
            </StyledButton>
          </View>
        </View>
     
    </SafeAreaView>

  )
}

export default UberVehiculosOptions;

const styles = StyleSheet.create({});