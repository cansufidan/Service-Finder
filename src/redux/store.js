import { configureStore } from "@reduxjs/toolkit";

import categoryReducer from "./categorySlice";
import authReducer from "./authSlice";

const store = configureStore({
    reducer:{
        authState: authReducer,
        categoryState: categoryReducer,
    }
})

export default store