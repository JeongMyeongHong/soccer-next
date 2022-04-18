import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import tableStyles from '../common/styles/table.module.css'
import { todoActions } from '../../redux/reducers/todoReducer.ts'
import axios from "axios"

const Table = ({ columns, data }) =>(
  <div>
      <table className={tableStyles.table}>
          <thead>
              <tr className={tableStyles.tr}>
                  {columns.map((column, index) => <th key={index} className={tableStyles.td}>{column}</th>)}
              </tr>
          </thead>
          <tbody>
                  { data.length == 0  ?<tr className={tableStyles.tr}>
                                    <td className={tableStyles.td} colSpan={columns.length}>일정이 없습니다</td>
                                    </tr>
                      :data.map((todo) => (
                      <tr className={tableStyles.tr}  key={todo._id} >
                      <td className={tableStyles.td}>{todo.userid}</td>
                      <td className={tableStyles.td}>{todo.task}</td>
                      </tr>))
                  }
          </tbody>
      </table>
  </div>)

export default function AddTodo() {
    const [values, setValues] = useState({userid:'', task:'', complete: 'not completed'})
    const [data, setData] = useState([])
    const columns = ['아이디', '일정']
    const dispatch = useDispatch()
    const handleChange = e =>{
        e.preventDefault()
        const{name, value} = e.target;
        setValues({...values,[name]: value})
    }

  return (
      <form onSubmit={e => {
        e.preventDefault()
        alert('진행 1 : 일정 등록'+JSON.stringify(values))
        dispatch(todoActions.addRequest(values))
        setValues({ userid:'', task:'', complete: 'not completed' })}}>
        <table className={tableStyles.table}>
          <thead>
            <tr>
              <th colSpan={2}><h2>투두리스트</h2></th>
            </tr>
          </thead>
          <tbody>
            <tr >
              <td><label>할일등록</label></td>
              <td>
              <label htmlFor=""><b>아이디 </b></label>
              <input type="text" name='userid' onChange={handleChange}/><br />

              <label htmlFor=""><b>할 일 </b></label>
              <input type="text" name='task' onChange={handleChange} autoComplete="off"/><br />

              <label htmlFor=""><b>완료여부</b></label>
              <input type="checkbox" name='complete' value="completed" onChange={handleChange}/>
              
              <button style={{marginLeft:"20px"}} type="submit" className="btn btn__primary btn__lg">
                Add
              </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
     
  );
}