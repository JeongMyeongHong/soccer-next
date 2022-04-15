import tableStyle from "../common/styles/table.module.css"
import {useState, useEffect} from 'react'
import axios from "axios"
import Link from 'next/link'

const Table = ({ columns, colspan, data }) =>{
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
                        <tr className={tableStyle.tr}  key={user.userid} >
                        <td className={tableStyle.td}>
                            <Link href={{pathname:`/user/[userid]`,
                                        query:{selectedUser: 'test'}}} as={`/user/${user.userid}`}>
                            <a>{user.userid}</a>
                            
                            </Link>
                        </td>
                        <td className={tableStyle.td}>{user.name}</td>
                        <td className={tableStyle.td}>{user.email}</td>
                        <td className={tableStyle.td}>{user.phone}</td>
                        <td className={tableStyle.td}>{user.birth}</td>
                        <td className={tableStyle.td}>{user.address}</td>
                        </tr>))
                    }

            </tbody>
        </table>
    </div>)
}

export default function UsersList(){
    const columns = ['사용자ID', '이름', '이메일', '전화번호', '생년월일', '주소']
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
        <Table columns={columns} colsapn={columns.length} data={data}/>
        </div>
    </div>)
}


