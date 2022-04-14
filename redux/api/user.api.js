import axios from 'axios'
const SERVER = 'http://127.0.0.1:5000'
const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT fefege...",
}

const join = (data) => axios.post(`${SERVER}/api/user/signup`,data, { headers})

export default {
    join
}