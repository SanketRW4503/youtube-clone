import { createSlice } from "@reduxjs/toolkit";




const darkmodeSlice = createSlice(
    {
        name:'mode',
        initialState:{
            property:{color:'black',backgroundColor:'white'},
            property2:{color:'black',backgroundColor:'#F1F5F9'},
            property3forimage:{filter:'invert(0%)'}
        },
        reducers:{

            darkMode:(state)=>{
                if(state.property.color==='black'){
                state.property={color:'white',backgroundColor:'black'}
                state.property2={ color:'white',backgroundColor:'#606060'}
                state.property3forimage={filter:'invert(100%)'}
                }else{
                    state.property={color:'black',backgroundColor:'white'}
                    state.property2={color:'black',backgroundColor:'#F1F5F9'}
                    state.property3forimage={filter:'invert(0%)'}
                }
            }
        }
    }
    
);
export default darkmodeSlice.reducer;

export const{darkMode} = darkmodeSlice.actions;