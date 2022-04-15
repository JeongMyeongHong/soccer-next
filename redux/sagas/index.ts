import { all } from 'redux-saga/effects'
import { watchAdd } from './todoSaga'
import { watchJoin } from './userSaga'

export default function* rootSaga(){
    yield all([watchJoin(), watchAdd()])
}