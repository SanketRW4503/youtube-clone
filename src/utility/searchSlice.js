import { createSlice } from "@reduxjs/toolkit";



const searchSlice= createSlice(
    {
        name:'search',
        initialState:{
          
        },
        reducers:{
            casheResult:(state,action)=>{
                state=Object.assign(state,action.payload)
            }
        }
    }
)


export const {casheResult} =searchSlice.actions;
export default searchSlice.reducer