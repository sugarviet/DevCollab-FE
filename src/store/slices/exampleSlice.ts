import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ExampleState {
  data: string;
  loading: boolean;
}

const initialState: ExampleState = {
  data: "",
  loading: false,
};

const exampleSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    fetchDataRequest: (state) => {
      state.loading = true;
    },
    fetchDataSuccess: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.data = action.payload;
    },
  },
});

export const { fetchDataRequest, fetchDataSuccess } = exampleSlice.actions;
export default exampleSlice.reducer;
