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
                latitude: 14.041261822576123,
                longitude: -86.57036613214595,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }}
        >

            <Marker
                coordinate={{ latitude: 14.041261822576123,
                    longitude: -86.57036613214595,}}
            />




        </MapView>

    );
};

export default Map;