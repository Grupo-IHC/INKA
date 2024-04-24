import { Link } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import eyeIcon from "../../shared/assets/eye.svg";
import showEyeIcon from "../../shared/assets/showEyeIcon.svg";
import { useState } from 'react';
import { useAuthStore } from '../../hooks/useAuthStore';
import { Loader } from '../../inka/components/Loader';
import {useNavigate } from 'react-router-dom';

export const LoginPage = () => {

  const navigate = useNavigate();
  const {startLogin, status} = useAuthStore();

  const {onInputChange, document, password} = useForm({
    document: '',
    password: ''
  })

  const [valueEye, setvalueEye] = useState(false);
 
  const showPassword = () => {
    setvalueEye(!valueEye);
  }

  const onSubmit = async(e) => {
    e.preventDefault();
    try {
    const response = await startLogin({username: document, password});
    if (response) navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {status === 'checking' && <Loader />}
      <AuthLayout title="INICIAR SESION"> 
        <form onSubmit={onSubmit} className='mt-[40px]'>
          <div className='flex justify-between flex-col'>
            <label className='font-mont font-bold text-[14px] lg:text-[18px] py-1' htmlFor="document">Numero de Documento</label>
            <input
              className='w-full bg-primary py-2 px-2 lg:py-2.5 lg:px-4 rounded-lg text-[14px]'
              type="text"
              name='document'
              value={document} 
              onChange={onInputChange}
            />
          </div>
          <div className='flex justify-between flex-col relative mt-[20px]'>
            <label className='font-mont font-bold text-[14px] lg:text-[18px] py-1' htmlFor="password">Contraseña</label>
            <input
              className='w-full bg-primary py-2 px-2 lg:py-2.5 lg:px-4 rounded-lg text-[14px]'
              type={valueEye ? 'text' : 'password'}
              name='password'
              value={password}
              onChange={onInputChange}
            />
            <img
              onClick={showPassword}
              className='absolute cursor-pointer right-3 top-10 lg:top-12'
              src={valueEye ? showEyeIcon : eyeIcon}
              alt="eyeIcon"
            />
          </div>
          <Link to="/auth/restore-password">
            <p className='py-3 font-mont underline text-[14px] lg:text-[16px] text-center m-[40px]'>Si olvidaste tu contraseña, haz click aqui</p>
          </Link>
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
