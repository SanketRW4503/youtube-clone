import { createSlice } from "@reduxjs/toolkit";




export const appSlice= createSlice({
    name:'app',
    initialState:{
        toggle:true,
    },
    reducers:{

        hamburgerToggle:(state)=>{
            state.toggle=!state.toggle;
        }
    }
});



export default appSlice.reducer;
export const{hamburgerToggle} =appSlice.actions