import { AuthLayout } from "../layout/AuthLayout";
import eyeIcon from "../../shared/assets/eye.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

const formValidations = {
  name: [(value) => value.length > 0,'El nombre es requerido.'],
  email: [(value) => value.includes("@"),'El email debe tener un @.'],
  password: [(value) => value.length >= 6,'La contraseña debe tener al menos 6 caracteres.']
};

export const RegisterPage = () => {

  const {onInputChange, formState, onReset, name, email, password, emailValid, nameValid, passwordValid, isFormValid} = useForm({
    name: '',
    email: '',
    password: ''
  }, formValidations);

  const [valueEye, setvalueEye] = useState(false);
  const [formSubmitted, setFormSubmited] = useState(false);

  const showPassword = () => {
    setvalueEye(!valueEye);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmited(true);
    if (!isFormValid) return;
    console.log(formState);
    onReset();
  }

  return (
    <AuthLayout title="Register">
      <form onSubmit={onSubmit}>
        <div className='flex justify-between pb-8 flex-col relative'>
          <label className={`font-mont font-bold text-xl py-1 ${(formSubmitted && !!nameValid)? "text-red-600" : ""}`} htmlFor="name">Nombre</label>
          <input
            value={name}
            name="name"
            className={`w-full bg-white py-2.5 px-4 rounded-lg outline-none ${(formSubmitted && !!nameValid)? "border-2 border-red-600" : "border-2 border-transparent"}`}
            type="text"
            onChange={onInputChange} 
          />
          {(formSubmitted && !!nameValid) && <p className="font-mont font-semibold text-red-600 absolute bottom-1">{nameValid}</p>}
        </div>
        <div className='flex justify-between pb-8 flex-col relative'>
          <label className={`font-mont font-bold text-xl py-1 ${(formSubmitted && !!emailValid)? "text-red-600" : ""}`}  htmlFor="email">Email</label>
          <input
            value={email}
            name="email"
            className={`w-full bg-white py-2.5 px-4 rounded-lg outline-none ${(formSubmitted && !!emailValid)? "border-2 border-red-600" : "border-2 border-transparent"}`}
            type="text" 
            onChange={onInputChange} 
          />
          {(formSubmitted && !!emailValid) && <p className="font-mont font-semibold text-red-600 absolute bottom-1">{emailValid}</p>}
        </div>
        <div className='flex justify-between pb-8 flex-col relative'>
          <label className={`font-mont font-bold text-xl py-1 ${(formSubmitted && !!passwordValid)? "text-red-600" : ""}`} htmlFor="password">Contraseña</label>
          <input
            value={password}
            name="password"
            className={`w-full bg-white py-2.5 px-4 rounded-lg outline-none ${(formSubmitted && !!passwordValid)? "border-2 border-red-600" : "border-2 border-transparent"}`}
            type={valueEye ? 'text' : 'password'}
            onChange={onInputChange} 
          />
          <img
            className="absolute cursor-pointer right-4 top-12 text-red-600"
            src={eyeIcon}
            alt="eyeIcon"
            onClick={showPassword}
          />
          {(formSubmitted && !!passwordValid) && <p className="font-mont font-semibold text-red-600 absolute bottom-1">{passwordValid}</p>}
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
