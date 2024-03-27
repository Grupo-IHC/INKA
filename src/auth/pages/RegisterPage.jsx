import { AuthLayout } from "../layout/AuthLayout";
import eyeIcon from "../../shared/assets/eye.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

export const RegisterPage = () => {

  const {onInputChange, formState, onReset, name, email, password} = useForm({
    name: '',
    email: '',
    password: ''
  });

  const [valueEye, setvalueEye] = useState(false);

  const showPassword = () => {
    setvalueEye(!valueEye);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    onReset();
  }

  return (
    <AuthLayout title="Register">
      <form onSubmit={onSubmit}>
        <div className='flex justify-between pb-8 flex-col'>
          <label className='font-mont font-bold text-xl py-1' htmlFor="name">Nombre</label>
          <input
            value={name}
            name="name"
            className='w-full bg-white py-2.5 px-4 rounded-lg'
            type="text"
            onChange={onInputChange} 
          />
        </div>
        <div className='flex justify-between pb-8 flex-col'>
          <label className='font-mont font-bold text-xl py-1' htmlFor="email">Email</label>
          <input
            value={email}
            name="email"
            className='w-full bg-white py-2.5 px-4 rounded-lg'
            type="text" 
            onChange={onInputChange} 
          />
        </div>
        <div className='flex justify-between pb-8 flex-col relative'>
          <label className='font-mont font-bold text-xl py-1' htmlFor="password">Contraseña</label>
          <input
            value={password}
            name="password"
            className='w-full bg-white py-2.5 px-4 rounded-lg'
            type={valueEye ? 'text' : 'password'}
            onChange={onInputChange} 
          />
          <img
            className="absolute cursor-pointer right-4 top-12 text-red-600"
            src={eyeIcon}
            alt="eyeIcon"
            onClick={showPassword}
          />
        </div>
        <div className='text-center'>
          <button 
            className='w-full bg-secondary text-white font-mont font-bold text-xl py-2.5 px-11 rounded-lg cursor-pointer'
            type="submit"
          >
            Crear cuenta
          </button>
          <Link to="/auth/login">
            <p className='py-3 font-mont underline'>¿Ya tienes una cuenta? Iniciar Sesion</p>
          </Link>
        </div>
      </form>
    </AuthLayout>
  )
}
