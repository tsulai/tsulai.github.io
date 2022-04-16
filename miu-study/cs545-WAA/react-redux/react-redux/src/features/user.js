//reducer are user slices
import {createSlice} from '@reduxjs/toolkit'//allow you to create reducer in very easy way, to access from differnt components

const initialState  = {name: "", age: 0, email: ""};
//1. create slice
export const userSlice = createSlice({
    name: "user",
    initialState: {value: initialState},
    reducers: {//functions 
        login: (state, action) => {
            state.value = action.payload //update the state value from the data pass from payload
        },
        logout: (state) => {
            state.value = initialState
        }
    }
});

export const {login, logout} = userSlice.actions;

export default userSlice.reducer;//will access from index.js