import style from "./styles/board-form.module.css"
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addAll } from '../../redux/reducers/board.reducer'

export default function Board(){
    const [inputs, setInputs] = useState('')
    const dispatch = useDispatch()

    // const onChange = e => {
    //     e.preventDefault()
    //     const { value, name } = e.target
    //     setInputs({
    //         ...inputs,
    //         [name]: value
    //     })
    // }
    return(<>
        <h1>게시판</h1>
        <div className={style.container}>
            <form onSubmit={ e=> {
                e.preventDefault()
                alert(`value: ${JSON.stringify(inputs)}`)
                if (inputs) dispatch(addAll(inputs))
                
            }}>
            <div className={style.row}>
                <div className={style.col25}>
                <label className={style.label} htmlFor="title">글 제목</label>
                </div>
                <div className={style.col75}>
                <input className={style.inputText} type="text" id="title" name="title" 
                    onChange={e => {e.preventDefault()
                        setInputs({ ...inputs, "title": e.target.value })} } placeholder="글 제목 입력"/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label className={style.label} htmlFor="name">사용자 이름</label>
                </div>
                <div className={style.col75}>
                <input className={style.inputText} type="text" id="name" name="name" 
                onChange={e => {e.preventDefault()
                            setInputs({ ...inputs, "name": e.target.value })} } 
                         placeholder="이름 입력"/>
                </div>
            </div>
            {/*<div className={style.row}>
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
                <textarea id="subject" name="subject" placeholder="글 내용 입력" onChange={onChange} style={{height: 200 + 'px'}}></textarea>
                </div>
            </div>
                <br/>*/}
            <div className={style.row}>
                <input className={style.inputSubmit} type="submit" value="글 등록"/>
                </div>
            </form>
            </div>
    </>)
}