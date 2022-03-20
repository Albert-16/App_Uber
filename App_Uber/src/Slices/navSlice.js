import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    origin: null,
    destination: null,
    vehiculos:null,
    travelTimeInformation: null
}

export const navSlice = createSlice({
    name: "nav",
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload;
        },
        setVehiculos: (state, action) => {
            state.vehiculos = action.payload;
        },
    },
});

export const { setOrigin, setDestination, setTravelTimeInformation,setVehiculos } = navSlice.actions;

export const selectedOrigin = (state) => state.nav.origin;
export const selectedDestination = (state) => state.nav.destination;
export const selectedTravelTimeInformation = (state) => state.nav.travelTimeInformation;
export const selectedVehiculos = (state) => state.nav.vehiculos;
export default navSlice.reducer;