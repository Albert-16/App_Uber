import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';
import { selectedOrigin } from '../Slices/navSlice';
const Map = () => {
    const origin = useSelector(selectedOrigin);

    /*
         latitude: origin.location.lat,
         longitude: origin.location.lng,

          {origin?.location && (
                <Marker
                coordinate={{ latitude: 14.05, longitude: -86.5833 }}
            />
            )}
    */
    return (

        <MapView
            style={tw`flex-1`}
            mapType="mutedStandard"
            initialRegion={{
                latitude: origin.location.lat,
                longitude: origin.location.lng,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005
            }}
        >

            {origin?.location && (
                <Marker
                    coordinate={{
                        latitude: origin.location.lat,
                        longitude: origin.location.lng,
                    }}
                    title="Origin"
                    description={origin.description}
                    identifier='origin'
                />
            )}




        </MapView>

    );
};

export default Map;