import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios  from "axios";



export const productThunk = createAsyncThunk("product", async () => {
  try {
    const  response = await axios.get("https://dummyjson.com/products");
    // console.log(response);
    return response.data.products;
  } catch (e) {
    console.log(e);
  }
});




const productslice = createSlice({
  name: "Product",
  initialState: {
    product: [],
    loading: false,
  },
 reducers:{   },
    extraReducers: (xyz) => {
      xyz.addCase(productThunk.pending, (state, action) => {
        state.loading = true;
      });
      xyz.addCase(productThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      });
      xyz.addCase(productThunk.rejected, (state, action) => {
        state.loading = true;
      });
    
  }
});


export default productslice.reducer;
