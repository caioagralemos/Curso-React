import {configureStore} from "@reduxjs/toolkit";
import { formReducer, changeName, changePrice } from "./slices/FormSlice";
import { carsReducer, addCar, deleteCar } from "./slices/CarsSlice";

const store = configureStore({
    reducer: {
        form: formReducer,
        cars: carsReducer
    }
})

export {store, changeName, changePrice, addCar, deleteCar}