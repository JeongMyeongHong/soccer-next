import tableStyle from "../common/styles/table.module.css"

const UserTable = ({ columns, colspan, data }) =>{
    return(<div>
        <table className={tableStyle.table}>
            <thead>
                <tr className={tableStyle.tr}>
                    {columns.map((column) => <th key={column.UserName} className={tableStyle.td}>{column}</th>)}
                </tr>
            </thead>
            <tbody>
                <tr className={tableStyle.tr}>
                    { data.length == 0 ? <td colSpan={colspan} className={tableStyle.td}>데이터가 없습니다.</td>
                        :  <td colSpan={colspan} className={tableStyle.td}>데이터가 있습니다.</td>
                    }
                </tr>
            </tbody>
        </table>
    </div>)
}
// {datas.map((data) => (<td colSpan={colspan} key={data} className={tableStyle.td}>{data}</td>))}

export default function UserList(){
    const columns = ['UserName', 'ID', 'Password', 'PhoneNum']
    const data = ['UserName', 'ID']
    return(<div>
        <h1>유저 리스트</h1> 
        {/*{data.length && <h3>회원수 : {data.length} 명</h3>}*/}
        {data.length !=0 && <h3>회원수 : {data.length} 명</h3>}
        <div className={tableStyle.td}>
        <UserTable columns={columns} colsapn={4} data={data}/>
        </div>
    </div>)
}


