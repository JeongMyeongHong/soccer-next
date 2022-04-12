import { createSlice } from "@reduxjs/toolkit"

export const UserDataPayload = {
    id: String,
    name: String,
    pw: String,
    phoneNum: String,
}

const initialState = {
    userLoading: false,
    userData: null,
    error: null
}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        joinRequest(state, action){state.userLoading = true, state.error = null}, 
        joinSuccess(state, action){state.userLoading = false, state.error = action.payload}, 
        joinFailure(state, action){state.userLoading = false, state.error = action.payload}
    }
})

export default userSlice.reducer