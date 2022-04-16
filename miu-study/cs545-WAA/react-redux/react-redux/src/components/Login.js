import React from 'react'
import { useDispatch } from 'react-redux'
import {login, logout} from "../features/user" // slice ထဲက action ကို ယူသုံးမယ်

export default function Login() {
    const dispatch = useDispatch()
  return (
    <div><button onClick={()=>{
        dispatch(login({name: "Pedro", age: 33, email: "pedro@gmail.com"}))
    }} >Login</button>
    <button onClick={()=> {dispatch(logout())} }>Logout</button>
  </div>)
}
