import { all } from 'redux-saga/effects'
import { watchAddTodo } from './todoSaga'
import { watchJoin, watchLogin } from './userSaga'
import { watchAddboard } from './boardSaga'

export default function* rootSaga(){
    yield all([watchJoin(), watchLogin(), watchAddTodo(), watchAddboard()])
}