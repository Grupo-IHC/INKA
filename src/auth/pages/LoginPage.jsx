import { Link } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import eyeIcon from "../../shared/assets/eye.svg";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../../store/auth/authSlice';
import { useAuthStore } from '../../hooks/useAuthStore';
import { Loader } from '../../inka/components/Loader';
import {useNavigate } from 'react-router-dom';

export const LoginPage = () => {

  const navigate = useNavigate();
  const {startLogin, status} = useAuthStore();

  const {onInputChange, formState, email, password} = useForm({
    email: '',
    password: ''
  })

  const [valueEye, setvalueEye] = useState(false);
 
  const showPassword = () => {
    setvalueEye(!valueEye);
  }

  const onSubmit = async(e) => {
    e.preventDefault();
    try {
    const response = await startLogin({username: email, password});
    if (response) navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {/* <Loader /> */}
      {status === 'checking' && <Loader />}
      <AuthLayout title="Login"> 
        <form onSubmit={onSubmit}>
          <div className='flex justify-between pb-8 flex-col'>
            <label className='font-mont font-bold text-[16px] lg:text-[18px] py-1' htmlFor="email">Email</label>
            <input
              className='w-full bg-white py-2 px-2 lg:py-2.5 lg:px-4 rounded-lg text-[14px]'
              type="text"
              name='email'
              value={email} 
              onChange={onInputChange}
            />
          </div>
          <div className='flex justify-between pb-8 flex-col relative'>
            <label className='font-mont font-bold text-[16px] lg:text-[18px] py-1' htmlFor="password">Contraseña</label>
            <input
              className='w-full bg-white py-2 px-2 lg:py-2.5 lg:px-4 rounded-lg text-[14px]'
              type={valueEye ? 'text' : 'password'}
              name='password'
              value={password}
              onChange={onInputChange}
            />
            <img
              onClick={showPassword}
              className='absolute w-[7%] right-4 top-11 md:top-10 lg:w-fit-content cursor-pointer lg:right-4  lg:top-11 text-red-600'
              src={eyeIcon}
              alt="eyeIcon"
            />
          </div>
          <div className='text-center'>
            <button 
              className='w-full bg-secondary text-white font-mont font-bold py-2.5 px-11 text-[14px] lg:text-[18px] rounded-lg cursor-pointer'
              type='submit'
            >
              Login
            </button>
            <Link to="/auth/register">
              <p className='py-3 font-mont underline text-[14px] lg:text-[16px]'>¿Aún no tenés cuenta? Registrate</p>
            </Link>
          </div>
        </form>
      </AuthLayout>
    </>
  )
}
