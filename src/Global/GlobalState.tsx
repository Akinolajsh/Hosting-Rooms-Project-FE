import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    hotelUser : "" || null
}

const GlobalState = createSlice({
  name: "AirBnB",
  initialState,
  reducers: {
    createUser : (state : any, {payload} : any) =>{
        state.hotelUser = payload
    },
    logOut : (state : any) =>{
        state.hotelUser = null
    }
  }
});

export const {createUser, logOut } = GlobalState.actions

export default GlobalState.reducer