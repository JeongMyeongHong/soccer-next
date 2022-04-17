import axios, {AxiosResponse} from 'axios'

const SERVER = 'http://127.0.0.1:5000'
const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT fefege...",
}

export interface UserType{
    userid: string;
    password: string;  
    email: string;
    name: string;  
    phone: string;
    birth: string;
    address: string;
}

export const postUser = async (payload: 
    { userid: string; password: string; email: string; name: string; phone: string; birth: string; address: string;})=> {
        try{
            const response:  AxiosResponse<unknown, UserType[]> = await axios.post(`${SERVER}/api/user/signUp`,payload, { headers})
            alert(` 진행 5 : 응답 성공 ${JSON.stringify(response.data)}`)
            return response.data
        }catch(error){

        }}

// export const getUser = async (payload: 
//     { userid: string; password: string; email: string; name: string; phone: string; birth: string; address: string;})=> {
//         try{
//             const response:  AxiosResponse<unknown, UserType[]> = await axios.get(`${SERVER}/api/user/list`)
//             .then(res=>{ setData(res.data.users) }).catch(err=>{})
//             alert(` 진행 ? : 데이터 가져오기 성공 ${JSON.stringify(response.data)}`)
//             return response.data
//         }catch(error){

//         }}
                    