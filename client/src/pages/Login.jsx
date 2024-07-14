import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext';
import { toast } from 'react-toastify';

const Login = () => {

  const [inputs, setInputs] = useState({
    username:"",
    password:"",
  })

  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const {login} = useContext(AuthContext);

  // console.log(currentUser)

  const handleChange = e =>{
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async e =>{
    e.preventDefault()
    try{
      // await axios.post("/api/auth/login", inputs);
      await login(inputs);
      toast.success("Logged In successfully");
      navigate("/");
      // console.log(res);
    } catch(err){
      setErr(err.response.data);
    }

  }

  return (
    <div className='auth'>
        <h1>Login</h1>
        <form>
            <input required type='text' placeholder='username' name="username" onChange={handleChange}/>
            <input required type="password" placeholder='password' name="password" onChange={handleChange} />
            <button onClick={handleSubmit} >Login</button>
            {err && <p>{err}</p>}
            <span>Don't you have an account? <Link to="/register" >Register</Link></span>
        </form>
    </div>
  )
}

export default Login