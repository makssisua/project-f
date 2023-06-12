import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
  <div className="login">
    <h1>Login</h1>
    <form action="POST">
      <input value={email} type="email" id="email" placeholder='Email' onChange={(e) => {setEmail(e.target.value)}}/>
      <input value={password} type="password" id="password" placeholder='Password' onChange={(e) => {setPassword(e.target.value)}}/>
      <input type="submit" />
    </form>
    <div>
      OR <Link to="/signup">Signup Page</Link>
    </div>
  </div>
  )
}

export default Login;