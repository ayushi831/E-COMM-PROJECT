import { toast } from "react-hot-toast";
import { checkmail, login } from "../Api/callapi";
import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const createThunk = createAsyncThunk(
  "create",
  async (formData, { rejectWithValue }) => {
    try {
      const result = await checkmail(formData);
      if (result) {
        toast.success("data sent successfully");
        // console.log(result)
        return result;
      }
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

// login thunk.............................

export const loginThunk = createAsyncThunk(
  "login",
  async (data, { rejectWithValue }) => {
    try {
      const result = await login(data);
      return result;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);




const adminSlice = createSlice({
  name: "admin",
  initialState: {
    loading: false,
    users: [],
    error: null,
  },
  // reducers: {},

  extraReducers: (builder) => {
    builder.addCase(createThunk.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(createThunk.rejected, (state, action) => {
      state.loading = true;
    });

    // login builder........................

    builder.addCase(loginThunk.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(loginThunk.rejected, (state, action) => {
      state.loading = false;
    });

  },
});

export default adminSlice.reducer;