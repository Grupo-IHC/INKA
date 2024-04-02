import { Link } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import eyeIcon from "../../shared/assets/eye.svg";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../store/auth/Providers';
import { login, logout } from '../../store/auth/authSlice';

export const LoginPage = () => {

  const dispatch = useDispatch();

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
    // dispatch(checkingAuthentication(formState));
    const{ok, data} = await loginUser({username: email, password});
    if(ok) {
      dispatch(login(data.user));
    } else {
      dispatch(logout());
    }
  }

  return (
    <AuthLayout title="Login"> 
      <form onSubmit={onSubmit}>
        <div className='flex justify-between pb-8 flex-col'>
          <label className='font-mont font-bold text-xl py-1' htmlFor="email">Email</label>
          <input
            className='w-full bg-white py-2.5 px-4 rounded-lg'
            type="text"
            name='email'
            value={email} 
            onChange={onInputChange}
          />
        </div>
        <div className='flex justify-between pb-8 flex-col relative'>
          <label className='font-mont font-bold text-xl py-1' htmlFor="password">Contraseña</label>
          <input
            className='w-full bg-white py-2.5 px-4 rounded-lg'
            type={valueEye ? 'text' : 'password'}
            name='password'
            value={password}
            onChange={onInputChange}
          />
          <img
            onClick={showPassword}
            className='absolute cursor-pointer right-4 top-12 text-red-600'
            src={eyeIcon}
            alt="eyeIcon"
          />
        </div>
        <div className='text-center'>
          <button 
            className='w-full bg-secondary text-white font-mont font-bold text-xl py-2.5 px-11 rounded-lg cursor-pointer'
            type='submit'
          >
            Login
          </button>
          <Link to="/auth/register">
            <p className='py-3 font-mont underline'>¿Aún no tenés cuenta? Registrate</p>
          </Link>
        </div>
      </form>
    </AuthLayout>
  )
}
