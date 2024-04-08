import { AuthLayout } from "../layout/AuthLayout";
import eyeIcon from "../../shared/assets/eye.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useAuthStore } from '../../hooks/useAuthStore';
import { Loader } from "../../inka/components/Loader";
import { MessageRegister } from "../layout/MessageRegister";

const formValidations = {
  nroDocument: [(value) => value.length === 8,'El DNI debe tener 8 caracteres.'],
  firstName: [(value) => value.length > 0,'El nombre es requerido.'],
  lastName: [(value) => value.length > 0,'El apellido es requerido.'],
  email: [(value) => value.includes("@"),'El email debe tener un @.'],
  password: [(value) => value.length >= 6,'La contraseña debe tener al menos 6 caracteres.']
};

export const RegisterPage = () => {

  const {registerUser} = useAuthStore();

  const {onInputChange, formState, onReset, nroDocument, firstName, secondName, lastName, secondLastName, email, password, nroDocumentValid, firstNameValid, lastNameValid, emailValid, passwordValid, isFormValid} = useForm({
    nroDocument: '',
    firstName: '',
    secondName: '',
    lastName: '',
    secondLastName: '',
    email: '',
    password: ''
  }, formValidations);

  const [valueEye, setvalueEye] = useState(false);
  const [formSubmitted, setFormSubmited] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [valueMessage, setvalueMessage] = useState({
    status: '',
    message: '',
  })

  const showPassword = () => {
    setvalueEye(!valueEye);
  }

  const onSubmit = async(e) => {
    e.preventDefault();
    setFormSubmited(true);
    if (!isFormValid) return;
    const dataSend = {
      email,
      password,
      first_name: firstName,
      second_name: secondName,
      last_name : lastName,
      second_last_name: secondLastName,
      document_number: nroDocument
    }

    setLoading(true);
    try {
      const {status, msg} = await registerUser(dataSend);
      setLoading(false);
      setShowMessage(true);
      setvalueMessage({ status: status, message: msg });
    } catch (error) {
      console.log(error);
    }
  }

  const closeMessageRegister = () => {
    setShowMessage(false);
  }

  return (
    <>
      {loading && <Loader />}
      {showMessage && <MessageRegister status={valueMessage.status} message={valueMessage.message} onClose={closeMessageRegister}/>}
      <AuthLayout title="Register">
        <form onSubmit={onSubmit} className="grid grid-cols-12 gap-x-4">
          <div className='flex justify-between pb-8 flex-col relative col-span-12'>
            <label className={`font-mont font-bold text-xl py-1 ${(formSubmitted && !!emailValid)? "text-red-600" : ""}`}     htmlFor="email">Email</label>
            <input
              value={email}
              name="email"
              className={`w-full bg-white py-2.5 px-4 rounded-lg outline-none ${(formSubmitted && !!emailValid)? "border-2    border-red-600" : "border-2 border-transparent"}`}
              type="text" 
              onChange={onInputChange} 
            />
            {(formSubmitted && !!emailValid) && <p className="font-mont font-semibold text-sm text-red-600 absolute bottom-1">  {emailValid}</p>}
          </div>
          <div className="col-span-6">
            <div className='flex justify-between pb-8 flex-col relative'>
              <label className={`font-mont font-bold text-xl py-1 ${(formSubmitted && !!firstNameValid)? "text-red-600" : ""}`}     htmlFor="firstName">Primer Nombre</label>
              <input
                value={firstName}
                name="firstName"
                className={`w-full bg-white py-2.5 px-4 rounded-lg outline-none ${(formSubmitted && !!firstNameValid)? "border-2    border-red-600" : "border-2 border-transparent"}`}
                type="text"
                onChange={onInputChange} 
              />
              {(formSubmitted && !!firstNameValid) && <p className="font-mont font-semibold text-sm text-red-600 absolute bottom-1">    {firstNameValid}</p>}
            </div>
            <div className='flex justify-between pb-8 flex-col relative'>
              <label className={`font-mont font-bold text-xl py-1`} htmlFor="secondName">Segundo nombre</label>
              <input
                value={secondName}
                name="secondName"
                className={`w-full bg-white py-2.5 px-4 rounded-lg outline-none border-2 border-transparent`}
                type="text"
                onChange={onInputChange} 
              />
            </div>
            <div className='flex justify-between pb-8 flex-col relative'>
              <label className={`font-mont font-bold text-xl py-1 ${(formSubmitted && !!lastNameValid)? "text-red-600" : ""}`}    htmlFor="lastName">Apellido Paterno</label>
              <input
                value={lastName}
                name="lastName"
                className={`w-full bg-white py-2.5 px-4 rounded-lg outline-none ${(formSubmitted && !! lastNameValid)? "border-2    border-red-600" : "border-2 border-transparent"}`}
                type="text"
                onChange={onInputChange} 
              />
              {(formSubmitted && !!lastNameValid) && <p className="font-mont font-semibold text-sm text-red-600 absolute bottom-1"> {lastNameValid}</p>}
            </div>
          </div>
          <div className="col-span-6">
            <div className='flex justify-between pb-8 flex-col relative'>
              <label className={`font-mont font-bold text-xl py-1`} htmlFor="secondName">Apellido materno</label>
              <input
                value={secondLastName}
                name="secondLastName"
                className={`w-full bg-white py-2.5 px-4 rounded-lg outline-none border-2 border-transparent`}
                type="text"
                onChange={onInputChange} 
              />
            </div>        
            <div className='flex justify-between pb-8 flex-col relative'>
              <label className={`font-mont font-bold text-xl py-1 ${(formSubmitted && !!nroDocumentValid)? "text-red-600" : ""}`}     htmlFor="firstName">Documento</label>
              <input
                value={nroDocument}
                name="nroDocument"
                className={`w-full bg-white py-2.5 px-4 rounded-lg outline-none ${(formSubmitted && !!nroDocumentValid)? "border-2    border-red-600" : "border-2 border-transparent"}`}
                type="text"
                onChange={onInputChange} 
              />
              {(formSubmitted && !!nroDocumentValid) && <p className="font-mont font-semibold text-sm text-red-600 absolute bottom-1">    {nroDocumentValid}</p>}
            </div>
            <div className='flex justify-between pb-8 flex-col relative'>
              <label className={`font-mont font-bold text-xl py-1 ${(formSubmitted && !!passwordValid)? "text-red-600" : ""}`}    htmlFor="password">Contraseña</label>
              <input
                value={password}
                name="password"
                className={`w-full bg-white py-2.5 px-4 rounded-lg outline-none ${(formSubmitted && !!passwordValid)? "border-2     border-red-600" : "border-2 border-transparent"}`}
                type={valueEye ? 'text' : 'password'}
                onChange={onInputChange} 
              />
              <img
                className="absolute cursor-pointer right-4 top-12 text-red-600"
                src={eyeIcon}
                alt="eyeIcon"
                onClick={showPassword}
              />
              {(formSubmitted && !!passwordValid) && <p className="font-mont font-semibold text-sm text-red-600 absolute -bottom-4">  {passwordValid}</p>}
            </div>
          </div>     
          <div className='text-center col-span-12 mt-6'>
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
    </>
  )
}
