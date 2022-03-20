import React, { useEffect, useRef } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';
import { selectedDestination, selectedOrigin } from '../Slices/navSlice';
import { setTravelTimeInformation } from '../Slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';
import { API_KEY } from '@env';
import {useDispatch} from 'react-redux';
const Map = () => {
    const origin = useSelector(selectedOrigin);
    const destination = useSelector(selectedDestination);
    const mapRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!origin || !destination) return;

        mapRef.current.fitToSuppliedMarkers(["origin","destination"],{
            edgePadding:{
                top:50,
                bottom:50,
                right:50,
                left:50
            }
        });
    }, [origin, destination]);

    useEffect(() => {
        if (!origin || !destination) return;
        const getTravelTime = async()=>{
            const URL = `https://maps.googleapis.com/maps/api/distancematrix/json?
             units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${API_KEY}`;
           await  fetch(URL).then((res)=>res.json())
             .then(data=>{
               
                 dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
             })
        }
        getTravelTime();
    }, [origin, destination,API_KEY]);
  
    return (

        <MapView
            ref={mapRef}
            style={tw`flex-1`}
            mapType="mutedStandard"
            initialRegion={{
                latitude: origin.location.lat,
                longitude: origin.location.lng,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005
            }}
        >

            {origin && destination && (
                <MapViewDirections
                    origin={origin.description}
                    destination={destination.description}
                    apikey={API_KEY}
                    strokeWidth={3}
                    strokeColor="black"
                />
            )}


            {origin?.location && (
                <Marker
                    coordinate={{
                        latitude: origin.location.lat,
                        longitude: origin.location.lng,
                    }}
                    title="Origen"
                    description={origin.description}
                    identifier='origin'
                />
            )}

            {destination?.location && (
                <Marker
                    coordinate={{
                        latitude: destination.location.lat,
                        longitude: destination.location.lng,
                    }}
                    title="Destino"
                    description={destination.description}
                    identifier='destination'
                />
            )}




        </MapView>

    );
};

export default Map;