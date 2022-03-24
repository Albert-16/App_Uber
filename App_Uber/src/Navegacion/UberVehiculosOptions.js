import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Octicons, Ionicons, Fontisto, FontAwesome, Entypo } from '@expo/vector-icons';
import {
  PageTitulo,
  StyledButton,
  Line,
  Colors,
} from '../Componentes/style';

import 'intl';
import 'intl/locale-data/jsonp/es-HN';
const { color5 } = Colors;
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { IP, IMAGE, PORT, LISTARVEHICULOS,MetodoPago } from '@env';
import AsyncStorage from "@react-native-async-storage/async-storage";
const Ruta = "http://" + IP + ":" + PORT + IMAGE;
const RutaListar = "http://" + IP + ":" + PORT + LISTARVEHICULOS;
const RutaMetodoPago = "http://" + IP + ":" + PORT + MetodoPago + "id=" ;

import { useSelector } from 'react-redux';
import { selectedTravelTimeInformation,selectedOrigin,selectedDestination } from '../Slices/navSlice';

const ListaMetodoPagos = [
  { id: 1, descripcion: 'Tarjeta de crédito'},
  { id: 3, descripcion: 'Efectivo'}
]
const surgeChargeRate = 1.5;

const UberVehiculosOptions = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const [ListarVeh, setListarVeh] = useState([]);
  const [Cliente, setCliente] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const travelTimeInformation = useSelector(selectedTravelTimeInformation);
  const origin = useSelector(selectedOrigin);
  const destination = useSelector(selectedDestination);
  const [MetodoDePago,setMetodoDePago] = useState([]);
 
  useEffect(async () => {
    const token = await AsyncStorage.getItem('token');
    setIsLoading(true);
    const cliente = JSON.parse(await AsyncStorage.getItem('Cliente'));

    setCliente(cliente);
    await fetch(RutaListar, {
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

      await fetch(RutaMetodoPago + cliente.id, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token
        }
      })
        .then((res) => res.json()).then((resJson) => {
          setMetodoDePago(resJson)
        })
        .catch(console.error)

  }, []);


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
          <PageTitulo style={tw`text-white py-3 text-xl  text-center `}>Selecciona un Viaje - {travelTimeInformation?.distance?.text}</PageTitulo>
          <Line />
        </View>

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
                <Text style={tw`text-white`}>Duración:{travelTimeInformation?.duration?.text}</Text>
              </View>
              <Text style={tw`text-white `}>
                {new Intl.NumberFormat('es-hn', {
                  style: 'currency',
                  currency: 'HNL'
                }).format(
                  (travelTimeInformation?.distance?.value * surgeChargeRate * multiplier) / 100
                )}
              </Text>
            </TouchableOpacity>
          )}
        />

        <View style={tw`mt-auto border-t border-gray-200`}>
          <StyledButton disabled={!selected} style={tw`rounded-full`}
            onPress={async() => {
              try {
                
                const precio = travelTimeInformation?.distance?.value * surgeChargeRate * selected?.multiplier / 100; 
                  const DataViajes=[
                    { 
                      origen: origin,
                      destino: destination,
                      viaje: travelTimeInformation,
                      Cliente: Cliente,
                      Vehiculo: selected,
                      total: precio,
                    }
                  ];
                  const InformacionViaje = JSON.stringify(DataViajes);
                  await AsyncStorage.setItem('DataViajes',InformacionViaje);
                  if(MetodoDePago.Titulo == "Lista Vacía")
                  {
                    navigation.navigate("Pago");
                  }
                  else
                  {
                    const tipo = JSON.stringify(ListaMetodoPagos[0]);
                    await AsyncStorage.setItem('Tipo', tipo);
                    navigation.navigate("ConfirmarViaje");
                  }
                  //console.log(DataViajes);
              } catch (error) {
                console.log(error.toString());
              }
             
            }}
          >
            <Text style={tw`text-white text-center text-xl`}>Seleccionar {selected?.title}</Text>
          </StyledButton>
        </View>
      </View>

    </SafeAreaView>

  )
}

export default UberVehiculosOptions;

const styles = StyleSheet.create({});