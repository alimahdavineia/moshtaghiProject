import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT
} from '../constants/userConstants.jsx'
import axios from 'axios'

export const userLoginAction=(email,password)=>async(dispatch)=>{

 try{
    dispatch({//user login request
    type : USER_LOGIN_REQUEST,
    })
    const config={// request setting
        header:{
            'Content-type':'aplication/jason'
        }
    }
    const {data}=await axios.post(//send request login
        'http://127.0.0.1:8000/users/login/',
        {'username':email,'password':password},
        config,
        )
    dispatch({
        type:USER_LOGIN_SUCCESS,
        payload:data
    })

    localStorage.setItem(// save user information in localStorage
        'userInfo',
        JSON.stringify(data))//stringify used for string json data

 }catch(error){

    dispatch({
        type:USER_LOGIN_FAIL,
        payload:error.response && error.response.data.message /// error که خودم در بک اند تنظیم کردم
        ?error.response.data.message
        :error.message
    })


 }



}
