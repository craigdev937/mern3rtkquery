import { createSlice } from "@reduxjs/toolkit";

const ProdSlice = createSlice({
    name: "products",
    initialState: [],
    reducers: {}
});

export const ProdReducer = ProdSlice.reducer;



// export const ProdFetch = createAsyncThunk("products/ProdFetch", 
// async () => {
//     const res = await fetch()
// });


