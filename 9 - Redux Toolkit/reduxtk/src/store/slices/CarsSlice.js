import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const carsSlice = createSlice({
    name: 'cars',
    initialState: [{name: 'Chevrolet Camaro', price: 100000}],
    reducers: {
        addCar(state,action) {
            state.push(action.payload)
        }, 
        deleteCar(state,action) {
            const index = state.indexOf(action.payload)
            state.splice(index, 1)
        }
    }
})

export const {addCar, deleteCar} = carsSlice.actions
export const carsReducer = carsSlice.reducer