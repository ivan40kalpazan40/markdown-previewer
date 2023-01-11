import { configureStore } from '@reduxjs/toolkit';
import inputReducer from './src/slices/inputSlice';
import classReducer from './src/slices/classSlice';
import idReducer from './src/slices/idSlice';

export const store = configureStore({
  reducer: {
    input: inputReducer,
    elementsClass: classReducer,
    id: idReducer,
  },
});
