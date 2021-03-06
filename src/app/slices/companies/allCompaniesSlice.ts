import { createSlice } from '@reduxjs/toolkit';

const allCompaniesSlice = createSlice({
  name: 'allCompanies',
  initialState: [],
  reducers: {
    setData: (state: any, action: { payload: any }) => {
      return (state = action.payload);
    },
    emptyData: (state: never[]) => {
      return (state = []);
    },
  },
});

export default allCompaniesSlice;
