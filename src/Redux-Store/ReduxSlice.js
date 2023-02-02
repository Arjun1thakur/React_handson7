import { createSlice } from '@reduxjs/toolkit';



const tableData = createSlice({
  name: 'Table-Entry',
  initialState:[],
  reducers: {
    AddMessage:(state,action)=>{
        state.push(action.payload)
    },
    EditMessage:(state,action)=>{
      state[action.payload.index] = action.payload.data;
      return (state) 
    }
}
});
export const {AddMessage,EditMessage} = tableData.actions;
export default tableData.reducer;