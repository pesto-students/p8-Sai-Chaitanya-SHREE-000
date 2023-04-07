import { createSlice } from '@reduxjs/toolkit';

export const stepSlice = createSlice({
    name: 'stepAdder',
    initialState: {
        value: 0
    },
    reducers: {
        addStep: state => {
            state.value += 1
        },
        clearStep: state => {
            state.value = 0
        }
    }
})

export const { addStep, clearStep } = stepSlice.actions;
export default stepSlice.reducer;