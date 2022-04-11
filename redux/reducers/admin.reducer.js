import { createSlice } from "@reduxjs/toolkit";


const initialState = []
export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        access(state, action){}
    }
})

export default adminSlice.reducer