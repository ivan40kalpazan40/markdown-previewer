import { createSlice } from '@reduxjs/toolkit';

const classSlice = createSlice({
  name: 'elementsClass',
  initialState: {
    editorClass: {
      display: 'flex',
      flexDirection: 'row',
      width: '30vw',
    },
    viewerClass: {
      display: 'flex',
      flexDirection: 'column',
      width: '45vw',
    },
    none: {
      display: 'none',
    },
  },
  reducers: {
    setEditor: (state, action) => {},
    setViewer: (state, action) => {},
  },
});

export default classSlice.reducer;
