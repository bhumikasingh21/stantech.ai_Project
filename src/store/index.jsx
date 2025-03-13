import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./post/PostSlice";

const store = configureStore({
    reducer:{
        post : postSlice.reducer
    }
})

export default store
