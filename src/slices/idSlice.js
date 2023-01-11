import { createSlice } from '@reduxjs/toolkit';

const idSlice = createSlice({
  name: 'id',
  initialState: {
    editor: 'input-container',
    viewer: 'view-container',
  },
  reducers: {
    setEditor: (state, action) => {
      state.editor = action.payload;
    },
    setViewer: (state, action) => {
      state.viewer = action.payload;
    },
  },
});
export const { setEditor, setViewer } = idSlice.actions;
export default idSlice.reducer;
