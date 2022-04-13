import { createSlice } from "@reduxjs/toolkit";


const initialState = []
export const boardSlice = createSlice({
    name: 'boards',
    initialState,
    reducers: {
        addAll(state, action){
            alert(`리듀서 내부 글내용 : ${JSON.stringify(action)}`)
            const title = {id: new Date(), title: action.payload.title}
            state.push(title)
            {action.payload.key}
        }
    }
})

export const { addAll } = boardSlice.actions
export default boardSlice.reducer