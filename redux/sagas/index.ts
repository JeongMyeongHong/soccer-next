import { all } from 'redux-saga/effects'
import { watchAddTodo } from './todoSaga'
import { watchJoin } from './userSaga'
import { watchAddboard } from './boardSaga'

export default function* rootSaga(){
    yield all([watchJoin(), watchAddTodo(), watchAddboard()])
}