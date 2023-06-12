import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submit = async (e: React.MouseEvent) => {
    e.preventDefault();
  }

  return (
    <div className="login">
      <h1>Login</h1>
      <form action="POST">
        <input value={email} type="email" id="email" placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} />
        <input value={password} type="password" id="password" placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} />
        <input type="submit" onClick={(e) => { submit(e) }} />
      </form>
      <div>
        OR <Link to="/signup">Signup Page</Link>
      </div>
    </div>
  )
}

export default Login;