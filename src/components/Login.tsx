import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginValidationSchema } from './validation/loginValidation';
import IconPasswordHidde from '../assets/IconPasswordHidden';
import IconPasswordVisible from '../assets/IconPasswordVisible';


function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginInputs>({
    resolver: yupResolver(loginValidationSchema)
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const onSubmit: SubmitHandler<LoginInputs> = (date: LoginInputs) => {
    console.log('-->', date)
  };

  const togglePasswordVisibility = ():void => {
    setIsPasswordVisible((prevState: boolean) => !prevState);
  }

  return (
    <div className="w-full max-w-xs">
      <form 
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" 
        action="POST"
      >
        <h1 className='text-gray-900 text-lg font-bold mb-2 text-center'>Авторизація</h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Електрона пошта
          </label>
          <input
            {...register("email")}
            aria-invalid={errors.email ? "true" : "false"}
            className="shadow appearance-none border rounded w-full py-2 px-3 mb-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="email" 
            placeholder="Email" 
          />
          <p className='text-red-600 text-xs'>{errors.email?.message}</p>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Пароль
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 right-0 flex items-center px-2">
              <input className="hidden js-password-toggle" id="toggle" type="checkbox" />
              <label
               className="bg-gray-300 hover:bg-gray-400 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer" 
               htmlFor="toggle"
               onClick={togglePasswordVisibility}
              >
                {isPasswordVisible ? <IconPasswordHidde  height='20px'/> : <IconPasswordVisible height='20px'/>}
              </label>
            </div>
            <input
              {...register("password")}
              aria-invalid={errors.password ? "true" : "false"}
              className="shadow appearance-none border rounded w-full py2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="password" 
              placeholder="Пароль"
              type={ isPasswordVisible ? 'text' : 'password' }
            />
          </div>
          <p className='text-red-600 text-xs'>{errors.password?.message}</p>
        </div>
        <div className="flex flex-col items-center">
          <input 
            className="mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit" 
            value="Увійти"
          />
          <p>
            Aбо
          </p>
          <div>
            <Link to="/signup" className="font-bold text-sm text-blue-500 hover:text-blue-800">Зареєструватись</Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login;