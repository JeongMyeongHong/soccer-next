import { createSlice } from "@reduxjs/toolkit"
// parameter

// payload
export interface UserType{
    userid: string;
    password: string;  
    email: string;
    name: string;  
    phone: string;
    birth: string;
    address: string;
}

// state
export interface UserState{
    loading: boolean;
    data: UserType[];
    error: any; //에러는 타입 종류 상관없이 다 잡는다.
}


const initialState: UserState = {
    loading: false,
    data: [],
    error: null
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        joinRequest: (state: UserState, payload) => { alert('진행2: 리듀서 내부'), state.loading = true },
        joinSuccess(state: UserState, {payload}){ state.data = [...state.data, payload], state.loading = false },
        joinFailure(state: UserState, {payload}){ state.data = payload, state.loading = false },
        showList(state: UserState, {payload}){ state.data = [...state.data, payload], state.loading = false }
    }
})
const { reducer, actions } = userSlice //reducer는 함수 + actions는 객체 = userSlice는 기능+객체 = 객체
export const userActions = actions
export default reducer