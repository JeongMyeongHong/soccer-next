import tableStyle from "../common/styles/table.module.css"
import {useState, useEffect} from 'react'
import axios from "axios"

const BoardTable = ({ columns, colspan, data }) =>{
    return(<div>
        <table className={tableStyle.table}>
            <thead>
                <tr className={tableStyle.tr}>
                    {columns.map((column, index) => <th key={index} className={tableStyle.td}>{column}</th>)}
                </tr>
            </thead>
            <tbody>
                    { data.length == 0 ? <td colSpan={colspan} className={tableStyle.td}>데이터가 없습니다.</td>
                        : data.map((board) => (
                            <tr className={tableStyle.tr} key = {board._id}>
                                <td className={tableStyle.td}>{board.passengerId}</td>
                                <td className={tableStyle.td}>{board.name}</td>
                                <td className={tableStyle.td}>{board.teamId}</td>
                                <td className={tableStyle.td}>{board.subject}</td>
                            </tr>
                        ))
                    }
            </tbody>
        </table>
    </div>)
}

export default function BoardList(){
    const columns = ['사용자 아이디', '사용자 이름', '응원팀 이름', 'subject']
    const [data, setData] = useState([])
    const proxy = 'http://localhost:5000'

    useEffect( () => {
        axios.get(proxy+'/api/board/read')
        .then(res => {setData(res.data.boards)})
        .catch(err => {})
    } , [] )
    return(<div>
        <h1>보드 리스트</h1> 
        {data.length !=0 && <h3>게시글 수 : {data.length} 개</h3>}
        <div className={tableStyle.td}>
        <BoardTable columns={columns} colsapn={4} data={data}/>
        </div>
    </div>)
}


