import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService"

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    //localhost:8080/api/v1/user?id=dean@miu.edu
    const handleSubmit = async (e) => {
        e.preventDefault();
        localStorage.removeItem("user");
        try {
            await AuthService.login(email, password).then(
                () => {
                    console.log('LoggedIn local storage: ' + localStorage.getItem("user"))
                    navigate("/posts");
                    window.location.reload();
                },
                (error) => {
                    console.log(error);
                }
            )
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(()=>{
        if(AuthService.getCurrentUser !== ''){
            navigate("/posts")
        }
    },[])

    return (
        <div  className="container-sm" style={{'width': '40%'}}>
            <h2>Login</h2>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
              <label >Email address</label>
              <input onChange= {e => setEmail(e.target.value)} type="email" className="form-control" id="InputEmail" placeholder="Enter email" required pattern="[a-z0-9._+\-]+@[a-z0-9.\-]+\.[a-z]{2,3}" />
              <span className="email-note">We'll never share your email with anyone else.</span>
            </div>
            <div className="form-group">
              <label >Password</label>
              <input onChange={e => setPassword(e.target.value)} type="password" required className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            
            <button type="submit" className="btn btn-primary">Submit</button>

            {/* <h3>Login</h3>
            <div>Email:</div>
            <input type="email" onChange= {e => setEmail(e.target.value)} />
            <div>Password:</div>
            <input type="password" onChange={e => setPassword(e.target.value)} />
             */}
        </form>
        </div>
    )
}
