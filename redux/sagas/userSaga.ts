import { PayloadAction} from '@reduxjs/toolkit'
import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { JoinPayload, joinRequest } from '../reducers/userReducer'
import { joinApi } from '../api/userApi'

function* join(action: PayloadAction<JoinPayload>){
    try{
        alert('saga내부join 성공')
        // const result = yield call(joinApi, action.payload)
        // yield put(joinSuccess(result))
        // window.location.href = 'user/login'
    }catch(errer){
        alert('saga내부join 실패')
        // yield put(joinFailure(result))
    }
}

export function* watchJoin(){
    yield takeLatest(joinRequest.type, join)
}