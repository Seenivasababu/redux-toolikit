import { configureStore } from '@reduxjs/toolkit';
import { formReducer, changeCost, changeName } from './slices/formSlice';
import {
  carsReducer,
  addCar,
  removeCar,
  changeSearchTerm,
} from './slices/carsSlice';

const store = configureStore({
  reducer: {
    form: formReducer,
    cars: carsReducer,
  },
});

export { store, addCar, removeCar, changeSearchTerm, changeCost, changeName };
