import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submit = async (e: React.MouseEvent) => {
    e.preventDefault();
  }

  return (
    <div className="w-full max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" action="POST">
        <h1 className='text-gray-900 text-lg font-bold mb-2 text-center'>Реєстрація</h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Електрона пошта
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="email" 
            placeholder="Email" 
            value={email} 
            type="email" 
            onChange={(e) => { setEmail(e.target.value) }}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Пароль
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
            id="password" 
            type="password" 
            placeholder="******************"
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
          />
        </div>
        <div className="flex flex-col items-center">
          <input 
            className="mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit" 
            onClick={(e) => { submit(e) }}
            value="Зареєструватись"
          />
          <div>
            Aбо
          </div>
          <div>
            <Link to="/login" className="font-bold text-sm text-blue-500 hover:text-blue-800">Авторизуватись</Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Signup;