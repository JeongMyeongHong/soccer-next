import axios from "axios";
import React, { useState } from "react";
export default function Calc() {

    const [inputs, setInputs] = useState({opcode: "+"})

    const onChange = (e) => {
        e.preventDefault()
        const { value, name } = e.target
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const onClick = async (e) => {
        e.preventDefault()
        axios.post(`http://localhost:5000/api/basic/calc`, inputs)
        .then(res => {
                const calc = res.data
                document.getElementById('result-span').innerHTML = `
                <h3>num1 : ${calc.num1}</h3>
                <h3>연산자 : ${calc.opcode}</h3>
                <h3>num2 : ${calc.num2}</h3>
                <h3>결과 : ${calc.result}</h3>
                `
            })
        .catch(err => alert(err))
    }

    return (<>
        <h1>계산기</h1>
        <form action="" onSubmit={onClick}>

            <label htmlFor="">num1</label>
            <input name="num1" type="text" onChange={onChange} /> <br />

            <label htmlFor="">연산자</label>
            <select name="opcode" onChange={onChange} >
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
                <option value="%">%</option>
            </select><br />

            <label htmlFor="">num2</label>
            <input name="num2" type="text" onChange={onChange} /><br />

            <input type="submit" value="계산하기" /><br />
        </form>
        <div> <span id="result-span"></span></div>
    </>
    )
}