import React, { ReactElement, useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { signupValidationSchema } from './validation/signupValidation';
import IconPasswordHidde from '../assets/IconPasswordHidden';
import IconPasswordVisible from '../assets/IconPasswordVisible';
import { registerUser, reset } from '../store/slices/authSlice';


function Signup(): ReactElement {
  const { register, handleSubmit, formState: { errors } } = useForm<SignupValidation>({
    resolver: yupResolver(signupValidationSchema)
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [authError, setAuthError] = useState('')

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector((state: GlobalState) => state.auth);
 
  useEffect(() => {
    if(isError){
      setAuthError(message)
    };

    if (isSuccess || user) {
      navigate('/')
    };

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onSubmit: SubmitHandler<SignupInputs> = (date: SignupInputs) => { 
    const { firstName, lastName, email, password } = date
    console.log('-->', date) 
    const userDataFromInputs: SignupInputs = {
      firstName,
      lastName,
      email,
      password
    };

    dispatch(registerUser(userDataFromInputs))
  };
  const togglePasswordVisibility = (): void => { setIsPasswordVisible((prevState: boolean) => !prevState) };

  return (
    <div className="w-full max-w-xs">
      <div className="text-center mb-10 mt-10 text-5xl font-bold text-blue-500">Project-F</div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        action="POST"
      >
        <h1 className='text-gray-900 text-lg font-bold mb-2 text-center'>Реєстрація</h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
            Ім'я
          </label>
          <input
            {...register("firstName")}
            aria-invalid={errors.firstName ? "true" : "false"}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firstName"
            placeholder="Введіть ім'я"
            type="text"
          />
          <p className='text-red-600 text-xs'>{errors.firstName?.message}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
            Прізвище
          </label>
          <input
            {...register("lastName")}
            aria-invalid={errors.lastName ? "true" : "false"}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastName"
            placeholder="Введіть прізвище"
            type='text'
          />
          <p className='text-red-600 text-xs'>{errors.lastName?.message}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Електрона пошта
          </label>
          <input
            {...register("email")}
            aria-invalid={errors.email ? "true" : "false"}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            placeholder="Введіть Email"
            type='email'
          />
          <p className='text-red-600 text-xs'>{errors.email?.message}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Пароль
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 right-0 flex items-center px-2">
              <input className="hidden" id="toggle" type="checkbox" />
              <label
                className="bg-gray-300 hover:bg-gray-400 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer"
                htmlFor="toggle"
                onClick={togglePasswordVisibility}
              >
                {isPasswordVisible ? <IconPasswordHidde height='20px' /> : <IconPasswordVisible height='20px' />}
              </label>
            </div>
            <input
              {...register("password")}
              aria-invalid={errors.password ? "true" : "false"}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              placeholder="Введіть пароль"
              type={isPasswordVisible ? 'text' : 'password'}
            />
          </div>
          <p className='text-red-600 text-xs'>{errors.password?.message}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
            Повторіть пароль
          </label>
          <input
              {...register("confirmPassword")}
              aria-invalid={errors.confirmPassword ? "true" : "false"}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              placeholder="Введіть пароль ще раз"
              type="password"
            />
          <p className='text-red-600 text-xs'>{errors.confirmPassword?.message}</p>
        </div>
        <p className='text-red-600 text-xs'>{authError}</p>
        <div className="flex flex-col items-center">
          <button
            className="mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            { !isLoading 
              ? 'Зареєструватись'
              : <span>
                <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
                </svg>
                Обробка
              </span>}
          </button>
          <p>
            Aбо
          </p>
          <div>
            <Link to="/login" className="font-bold text-sm text-blue-500 hover:text-blue-800">Увійти</Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Signup;