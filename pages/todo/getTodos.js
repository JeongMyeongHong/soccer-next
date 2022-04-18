import React, {useState, useEffect} from 'react'
import tableStyles from '../common/styles/table.module.css'
import axios from "axios"


export default function GetTodo() {
    const [data, setData] = useState([])
    const columns = ['아이디', '일정']
    useEffect(()=>{
        axios.get('http://localhost:5000/api/todo/get').then(res=>{
          setData(res.data.users)
        }).catch(err=>{})
      },[])

  return (
    <table className={tableStyles.table}>
    <thead>
        <tr>
            <th colSpan={columns.length}><h2>Todo List</h2></th>
        </tr>
        <tr>
            {columns.map((column, index) => <th key={index} className={tableStyles.td}>{column}</th>)}
        </tr>
    </thead>
    <tbody>
        {data.length == 0  ?
            <tr>
                <td className={tableStyles.td} colSpan={columns.length}>일정이 없습니다</td>
            </tr>
        :data.map((todo) => (
            <tr key={todo.userid} >
                <td className={tableStyles.td}>{todo.userid}</td>
                <td className={tableStyles.td}>{todo.task}</td>
            </tr>))}
    </tbody>
    </table>
  );
}