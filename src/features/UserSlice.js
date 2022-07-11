import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState:{ 
     value:{ 
        email: "",
        pwd: "" , 
        isLogin: false,
        showSidebar: true
        } 
    },


    reducers: {
        login: (state, action) => {
            state.value = action.payload;
            state.value.showSidebar  = action.payload.isLogin; //todo change this to a central logic
         },
        logout:(state) => {
            state.value = { email: "", pwd: "" };
        },
        toggleSidebar: (state, action) =>{
            state.value.showSidebar  = action.payload.showSidebar;
        }
},
});

export const {login, logout, toggleSidebar} = userSlice.actions;

export const selectUser = (state) => state.user.value;

export default userSlice.reducer;