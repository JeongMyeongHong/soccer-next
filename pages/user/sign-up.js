import axios from 'axios'
import react, { useState } from 'react'

export default function SignUp2(){
    const [inputs, setInputs] = useState({})
    const handleChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        setInputs({
            ...inputs,
            [name] : value
        })
    }

    const handelSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/api/user/signUp', inputs).then(res => {
            const info = res.data
            document.getElementById('result-span').innerHTML = 
            `<h1>${info.name}님 환영합니다.</h1>`
        }).catch(err => alert(err))

    }
    return(<>
       <h1>회원가입폼</h1> 
       <form action="" onSubmit={handelSubmit}>

            <label htmlFor="">이름 : </label>
            <input name="name" type="text" onChange={handleChange} /> <br />

            <label htmlFor="">아이디 : </label>
            <input name="id" type="text" onChange={handleChange} /><br />

            <label htmlFor="">비밀번호 : </label>
            <input name="pw" type="text" onChange={handleChange} /><br />

            <label htmlFor="">전화번호 : </label>
            <input name="phoneNum" type="text" onChange={handleChange} /><br />

            <input type="submit" value="전송" /><button>취소</button>
        </form>
        <div> <span id="result-span"></span></div>
    </>)
}