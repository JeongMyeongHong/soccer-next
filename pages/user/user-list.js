import tableStyle from "../common/styles/table.module.css"
import {useState, useEffect} from 'react'
import axios from "axios"

const UserTable = ({ columns, colspan, data }) =>{
    return(<div>
        <table className={tableStyle.table}>
            <thead>
                <tr className={tableStyle.tr}>
                    {columns.map((column, index) => <th key={index} className={tableStyle.td}>{column}</th>)}
                </tr>
            </thead>
            <tbody>
                    { data.length == 0 ? <td colSpan={colspan} className={tableStyle.td}>데이터가 없습니다.</td>
                        : data.map((user) => (
                            <tr className={tableStyle.tr} key = {user._id}>
                                <td className={tableStyle.td}>{user.name}</td>
                                <td className={tableStyle.td}>{user.id}</td>
                                <td className={tableStyle.td}>{user.pw}</td>
                                <td className={tableStyle.td}>{user.phoneNum}</td>
                            </tr>
                        ))
                    }
            </tbody>
        </table>
    </div>)
}

export default function UserList(){
    const columns = ['UserName', 'ID', 'Password', 'PhoneNum']
    const [data, setData] = useState([])
    const proxy = 'http://localhost:5000'

    useEffect( () => {
        axios.get(proxy+'/api/user/list')
        .then(res => {setData(res.data.users)})
        .catch(err => {})
    } , [] )
    return(<div>
        <h1>유저 리스트</h1> 
        {data.length !=0 && <h3>회원수 : {data.length} 명</h3>}
        <div className={tableStyle.td}>
        <UserTable columns={columns} colsapn={4} data={data}/>
        </div>
    </div>)
}


