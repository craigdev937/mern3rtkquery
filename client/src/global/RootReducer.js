import { configureStore } from "@reduxjs/toolkit";
import { ProdReducer } from "./ProdSlice";

export const RootReducer = configureStore({
    reducer: {
        products: ProdReducer,
    },
});


