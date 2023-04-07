import { createSlice } from '@reduxjs/toolkit';

export const switchSlice = createSlice({
    name: 'switch',
    initialState: {
        value: false
    },
    reducers: {
        isOn: state => { 
            state.value = !state.value
            console.log('called');
        } 
    }
});

export const {isOn} = switchSlice.actions;
export default switchSlice.reducer;