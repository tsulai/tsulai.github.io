import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

//createAsyncThunk - accept the string identifier and payload creator call back 
//and perform the async logic and return a promise
//then it will handle the dispatching function of the relavent actions
export const getUsers = createAsyncThunk(
    "users/getUsers",//string identifier
    async(dispatch, getState) => {
        return await fetch("https://jsonplaceholder.typicode.com/users").then(
            (res) => res.json()
        )
    }
)

const usersSlice = createSlice({
    name: "user",
    initialState: {
        users:[],
        status: null
    },
    extraReducers : {//အပေါ်က getUser အလုပ်လုပ် အပြောင်းအလဲမှာ state လိုက်ပြောင်းပေး
        [getUsers.pending]: (state, action) =>{
            state.status = "loading"
        },
        [getUsers.fulfilled] : (state, action)=>{
            state.state = "success";
            state.users = action.payload
        },
        [getUsers.rejected] : (state,action) => {
            state.status = "failed"
        }
    }
})


export default usersSlice.reducer;