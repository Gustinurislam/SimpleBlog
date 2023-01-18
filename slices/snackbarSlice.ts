import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'store';

type SnackbarObjType = {
  text: string;
  type: 'success' | 'error';
};

type SnackbarType = SnackbarObjType | null;

// Define a type for the slice state
type SnackbarState = {
  value: SnackbarType;
};

// Define the initial state using that type
const initialState: SnackbarState = {
  value: null,
};

export const snackbarSlice = createSlice({
  name: 'snackbar',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setSnackbar: (state, action: PayloadAction<SnackbarType>) => {
      state.value = action.payload;
    },
  },
});

export const { setSnackbar } = snackbarSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const currentSnackbar = (state: RootState) => state.snackbar.value;

export default snackbarSlice.reducer;
