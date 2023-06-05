import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import darkmodeSlice from "./darkmodeSlice";



const store = configureStore(
    {
        reducer:{
            app:appSlice,
            search:searchSlice,
            mode:darkmodeSlice
        }
        

    }
)

export default store;