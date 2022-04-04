import style from "./styles/board-form.module.css"
import React, { useState } from "react";
import axios from 'axios'

export default function BoardForm(){

    const [inputs, setInputs] = useState({})

    const onChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`데이터 셋 출력 : ${JSON.stringify(inputs)}`)
        axios.post('http://localhost:5000/api/board/write', inputs)
        .then(res => {
            alert(res.data)
        })
        .catch(err => alert(err))
    }
    return(<>
        <h1>게시판</h1>
        <div className={style.container}>
            <form action="">
            <div className={style.row}>
                <div className={style.col25}>
                <label className={style.label} htmlFor="passengerId">사용자 Id</label>
                </div>
                <div className={style.col75}>
                <input className={style.inputText} type="text" id="passengerId" name="passengerId" onChange={onChange} placeholder="1"/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label className={style.label} htmlFor="name">사용자 이름</label>
                </div>
                <div className={style.col75}>
                <input className={style.inputText} type="text" id="name" name="name" onChange={onChange} placeholder="Owen"/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label className={style.label} htmlFor="teamId">팀 이름</label>
                </div>
                <div className={style.col75}>
                <select onChange={onChange} id="teamId" name="teamId">
                    <option value="">응원팀 선택</option>
                    <option value="K09">서울 FC서울</option>    
                    <option value="K02">수원 삼성블루윙즈</option>
                    <option value="K04">인천 유나이티드</option>
                </select>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label className={style.label} htmlFor="subject">Subject</label>
                </div>
                <div className={style.col75}>
                <textarea id="subject" name="subject" placeholder="화이팅 FC서울" onChange={onChange} style={{height: 200 + 'px'}}></textarea>
                </div>
            </div>
            <br/>
            <div className={style.row}>
                <input className={style.inputSubmit} type="submit" value="Submit" onClick={handleSubmit}/>
            </div>
            </form>
            </div>
    </>)
}