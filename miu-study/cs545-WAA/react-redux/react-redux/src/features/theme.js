//reducer are user slices
import {createSlice} from '@reduxjs/toolkit'//allow you to create reducer in very easy way, to access from differnt components

const initialState  = "";
//1. create slice
export const themeSlice = createSlice({
    name: "theme",
    initialState: {value: initialState},
    reducers: {//functions 
        changeColor: (state, action) => {
            state.value = action.payload //update the state value from the data pass from payload
        }
    }
});

export const {changeColor} = themeSlice.actions;

export default themeSlice.reducer;//will access from index.js