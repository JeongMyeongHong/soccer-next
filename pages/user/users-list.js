import tableStyle from "../common/styles/table.module.css"
import {useState, useEffect} from 'react'
import axios from "axios"
import Link from 'next/link'

const UserTable = ({ columns, colspan, data }) =>{
    return(<div>
        <table className={tableStyle.table}>
            <thead>
                <tr className={tableStyle.tr}>
                    {columns.map((column, index) => <th key={index} className={tableStyle.td}>{column}</th>)}
                </tr>
            </thead>
            <tbody>
                    { data.length == 0  ?<tr className={tableStyle.tr}>
                                      <td colSpan={colspan} className={tableStyle.td}>데이터가 없습니다</td>
                                      </tr>
                        :data.map((user) => (
                        <tr className={tableStyle.tr}  key={user.name} >
                        <td className={tableStyle.td}>
                            <Link href={{pathname:`/user/[name]`,
                                        query:{selectedUser: 'test'}}} as={`/user/${user.name}`}>
                            <a>{user.name}</a>
                            
                            </Link>
                        </td>
                        <td className={tableStyle.td}>{user.id}</td>
                        <td className={tableStyle.td}>{user.pw}</td>
                        <td className={tableStyle.td}>{user.phoneNum}</td>
                        </tr>))
                    }

            </tbody>
        </table>
    </div>)
}

export default function UsersList(){
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


