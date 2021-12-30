import React from 'react'
import { login } from '../../redux/apiCalls';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const Login = () => {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("")
    const dispatch = useDispatch();

    const handleClick = (e)=>{
          e.preventDefault()
          login(dispatch, {email, password})
    }
    return (
        <div style={{
            "height": "100vh",
            "display" :"flex",
            "flexDirection" : "column",
            "alignItems" :"center",
           "justifyContent" : "center"
        }}>
            <h1 style={{"marginBottom": "40px"}}>LOGIN PAGE</h1>
            <input style={{"padding":"10px", "marginBottom": "20px"}} type="email" placeholder="Enter email here" onChange={e => setemail(e.target.value)}/>
            <input style={{"padding":"10px", "marginBottom": "20px"}} type="password" placeholder='Enter password here' onChange={e => setpassword(e.target.value)}/>
            <button style={{"padding":"10px", "width": "172px"}} onClick={handleClick}>Login</button>
        </div>
    )
}

export default Login
