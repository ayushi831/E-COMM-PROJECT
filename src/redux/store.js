import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./product.slice";
import adminSlice from "./admin.slice";


const store = configureStore({
  reducer: {
    product: productSlice,
    admin :adminSlice
  },
});

export default store;
