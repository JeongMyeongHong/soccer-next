import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { todoActions} from '../reducers/todoReducer'
import { postTodo } from '../api/todoApi'

interface TodoType{    
    type: string;
    payload: {
        userid: string;
        task: string;  
        complete: string;
    }
}

interface addTodoSuccessType{
    type: string;
    payload: {
        userid: string
    }
}

/**
 * addItem, getItem, modifyItem, removeItem
 * C        R        U           D
 */
function* add(todo: TodoType){
    try{
        alert(' 진행 3: saga내부add 성공' + JSON.stringify(todo))
        const response: addTodoSuccessType = yield postTodo(todo.payload)
        yield put(todoActions.addSuccess(response))
    }catch(error){
        alert(' 진행 3: saga내부add 실패 : ' + error)
        yield put(todoActions.addFailure(error))
    }
}
function* add2(todo: TodoType){
    try{
        alert(' 진행 3: saga내부add 성공' + JSON.stringify(todo))
        const response: addTodoSuccessType = yield postTodo(todo.payload)
        yield put(todoActions.addSuccess(response))
    }catch(error){
        alert(' 진행 3: saga내부add 실패 : ' + error)
        yield put(todoActions.addFailure(error))
    }
}
function* add3(todo: TodoType){
    try{
        alert(' 진행 3: saga내부add 성공' + JSON.stringify(todo))
        const response: addTodoSuccessType = yield postTodo(todo.payload)
        yield put(todoActions.addSuccess(response))
    }catch(error){
        alert(' 진행 3: saga내부add 실패 : ' + error)
        yield put(todoActions.addFailure(error))
    }
}
function* add4(todo: TodoType){
    try{
        alert(' 진행 3: saga내부add 성공' + JSON.stringify(todo))
        const response: addTodoSuccessType = yield postTodo(todo.payload)
        yield put(todoActions.addSuccess(response))
    }catch(error){
        alert(' 진행 3: saga내부add 실패 : ' + error)
        yield put(todoActions.addFailure(error))
    }
}


export function* watchAddTodo(){
    yield takeLatest(todoActions.addRequest, add)
}
