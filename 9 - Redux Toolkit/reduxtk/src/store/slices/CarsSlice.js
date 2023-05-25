import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        data: []
    },
    reducers: {
        addCar(state,action) {
            state.data.push({...action.payload, id: nanoid()})
        }, 
        deleteCar(state,action) {
            const index = state.data.indexOf(action.payload)
            state.data.splice(index, 1)
        },
        changeSearchTerm(state,action) {
            state.searchTerm = action.payload
        }
    }
})

export const {addCar, deleteCar, changeSearchTerm} = carsSlice.actions
export const carsReducer = carsSlice.reducer