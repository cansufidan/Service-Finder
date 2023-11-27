import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem("authToken"),
    user: null
}

const authSlice = createSlice({
    name:"authSlice",
    initialState,
    reducers:{
        setToken: (state,action) => {

            localStorage.setItem("authToken", action.payload)

            state.token = action.payload
        },
        setUser: (state, action) => {
            state.user = action.payload
        },
        removeToken: (state) => {

            localStorage.removeItem("authToken")

            state.token = null
            state.user = null
        }
    }
})

export const {removeToken, setToken, setUser} = authSlice.actions

export default authSlice.reducer