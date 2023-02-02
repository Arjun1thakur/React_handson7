import { configureStore } from "@reduxjs/toolkit";
import tableData  from './ReduxSlice'
export default configureStore({
    reducer:{
        dataX:tableData,
    },
}); 