import { createSlice } from '@reduxjs/toolkit';
import { prepopulate } from '../utils/utils';

const inputSlice = createSlice({
  name: 'input',
  initialState: {
    input: prepopulate(),
  },
  reducers: {
    setInput: (state, action) => {
      state.input = action.payload;
    },
  },
});

export const { setInput } = inputSlice.actions;
export default inputSlice.reducer;
