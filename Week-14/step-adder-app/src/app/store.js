import { configureStore } from '@reduxjs/toolkit';
import stepReducer from '../features/stepSlice';
export default configureStore({
    reducer: {
        stepAdder: stepReducer,
    }
})