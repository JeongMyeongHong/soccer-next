import { createSlice } from "@reduxjs/toolkit";


const initialState = []
export const boardSlice = createSlice({
    name: 'boards',
    initialState,
    reducers: {
        addBoard(state, action){
            alert(`리듀서 내부 글내용 : ${JSON.stringify(action)}`)
            const title = {id: new Date(), title: action.payload.title}
            state.push(title)
        }
    }
})

export const { addBoard } = boardSlice.actions
export default boardSlice.reducer