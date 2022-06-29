import { createSlice } from '@reduxjs/toolkit';

export const patenteSlice = createSlice({
    name: 'patente',
    initialState: {
        patentes: [],
        loading : false
    },
    reducers: {
        startLoadingPatente: (state, /* action */ ) => {
            state.loading = true;
        },
        setPatentes: (state, action) => {
            state.loading = false;
            state.patentes = action.payload.patentes;
        }
    }
});
// Action creators are generated for each case reducer function
export const { startLoadingPatente, setPatentes } = patenteSlice.actions;