import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { TRootState } from "../store";

type TGlobalState = {
  loading: boolean;
};

const globalSlice = createSlice({
  name: "global",
  initialState: {
    loading: true,
  } as TGlobalState,
  reducers: {
    setGlobalLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const useGlobalState = (): TGlobalState =>
  useSelector((state: TRootState) => state.global);
export const { setGlobalLoading } = globalSlice.actions;
export default globalSlice.reducer;
