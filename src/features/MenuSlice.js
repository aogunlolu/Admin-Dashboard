import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
    name: "menu",
initialState:{ 
    value:{open: "true", 
            close: "false"} 
        },

    reducers: {
        sidebar: (state, action) => {
            state.value = action.payload;
         },
        narbar:(state) => {
            state.value = action.payload;
        },
    },
});

export const {sidebar, narbar} = menuSlice.actions;

export const selectUser = (state) => state.menu.value;

export default menuSlice.reducer;