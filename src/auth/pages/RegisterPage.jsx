import { AuthLayout } from "../layout/AuthLayout";
import eyeIcon from "../../shared/assets/eye.svg";
import showEyeIcon from "../../shared/assets/showEyeIcon.svg";
import { useState } from "react";
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
  password: [(value) => value.length >= 6,'La contraseña debe tener al menos 6 caracteres.'],
};

export const RegisterPage = () => {

  const {registerUser} = useAuthStore();

  const {onInputChange, formState, onReset, nroDocument, firstName, lastName, email, password, repeatPassword, nroDocumentValid, firstNameValid, lastNameValid, emailValid, passwordValid, isFormValid} = useForm({
    nroDocument: '',
    firstName: '',
    secondName: '',
    lastName: '',
    secondLastName: '',
    email: '',
    password: '',
    repeatPassword:''
  }, formValidations);

  const [valueEye, setvalueEye] = useState(false);
  const [valueEyeRepeat, setValueEyeRepeat] = useState(false);
  const [formSubmitted, setFormSubmited] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [valueMessage, setvalueMessage] = useState({
    status: '',
    message: '',
  })

  const onSubmit = async(e) => {
    e.preventDefault();
    setFormSubmited(true);
    if (!isFormValid || (password !== repeatPassword)) return;
    const dataSend = {
      email,
      password,
      first_name: firstName,
      last_name : lastName,
      document_number: nroDocument
    }
    setLoading(true);
    try {
      const {status, msg} = await registerUser(dataSend);
      setLoading(false);
      setShowMessage(true);
      setvalueMessage({ status: status, message: msg });
    } catch (error) {
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
        <form onSubmit={onSubmit} className="">
          <div className='flex justify-between flex-col pb-5 relative'>
            <label className={`labelInput ${(formSubmitted && !!emailValid)? "text-red-600" : ""}`} htmlFor="email">Email</label>
            <input
              value={email}
              name="email"
              className={`inputClass ${(formSubmitted && !!emailValid)? "border-2 border-red-600" : "border-2 border-transparent"}`}
              type="text" 
              onChange={onInputChange} 
            />
            {(formSubmitted && !!emailValid) && <p className="pErrorCLass">{emailValid}</p>}
          </div>
          <div className='flex justify-between pb-5 flex-col relative'>
            <label className={`labelInput ${(formSubmitted && !!nroDocumentValid)? "text-red-600": ""}`} htmlFor="firstName">Nro. Documento</label>
            <input
              value={nroDocument}
              name="nroDocument"
              className={`inputClass ${(formSubmitted && !!nroDocumentValid)? "border-2 border-red-600" : "border-2 border-transparent"}`}
              type="text"
              onChange={onInputChange} 
            />
            {(formSubmitted && !!nroDocumentValid) && <p className="pErrorCLass">{nroDocumentValid}</p>}
          </div>
          <div className='flex justify-between pb-5 flex-col relative'>
            <label className={`labelInput ${(formSubmitted && !!firstNameValid)? "text-red-600" : ""}`}    htmlFor="firstName">Nombres</label>
            <input
              value={firstName}
              name="firstName"
              className={`inputClass ${(formSubmitted && !!firstNameValid)? "border-2 border-red-600" : "border-2 border-transparent"}`}
              type="text"
              onChange={onInputChange} 
            />
            {(formSubmitted && !!firstNameValid) && <p className="pErrorCLass">{firstNameValid}</p>}
          </div>
          <div className='flex justify-between pb-5 flex-col relative'>
            <label className={`labelInput ${(formSubmitted && !!lastNameValid)? "text-red-600" : ""}`}   htmlFor="lastName">Apellidos</label>
            <input
              value={lastName}
              name="lastName"
              className={`inputClass ${(formSubmitted && !! lastNameValid)? "border-2 border-red-600" : "border-2 border-transparent"}`}
              type="text"
              onChange={onInputChange} 
            />
            {(formSubmitted && !!lastNameValid) && <p className="pErrorCLass">{lastNameValid}</p>}
          </div>
          <div className='flex justify-between pb-5 flex-col relative'>
            <label className={`labelInput ${(formSubmitted && !!passwordValid)? "text-red-600" : ""}`}    htmlFor="password">Contraseña</label>
            <input
              value={password}
              name="password"
              className={`inputClass ${(formSubmitted && !!passwordValid)? "border-2 border-red-600" : "border-2 border-transparent"}`}
              type={valueEye ? 'text' : 'password'}
              onChange={onInputChange} 
            />
            <img
              className="absolute cursor-pointer right-4 top-10 lg:top-12 text-red-600"
              src={valueEye ? showEyeIcon : eyeIcon}
              alt="eyeIcon"
              onClick={() => setvalueEye(!valueEye)}
            />
            {(formSubmitted && !!passwordValid) && <p className="pErrorCLass">{passwordValid}</p>}
          </div>
          <div className='flex justify-between pb-5 flex-col relative'>
            <label className={`labelInput ${(formSubmitted && (password !== repeatPassword))? "text-red-600" : ""}`}    htmlFor="repeatPassword">Repite la contrseña </label>
            <input
              value={repeatPassword}
              name="repeatPassword"
              className={`inputClass ${(formSubmitted && (password !== repeatPassword))? "border-2 border-red-600" : "border-2 border-transparent"}`}
              type={valueEyeRepeat ? 'text' : 'password'}
              onChange={onInputChange} 
            />
            <img
              className="absolute cursor-pointer right-4 top-10 lg:top-12 text-red-600"
              src={valueEyeRepeat ? showEyeIcon : eyeIcon}
              alt="eyeIcon"
              onClick={() => setValueEyeRepeat(!valueEyeRepeat)}
            />
            {(formSubmitted && (password !== repeatPassword)) && <p className="pErrorCLass">Las contraseñas no coinciden.</p>}
          </div>
          <div className='text-center col-span-12 mt-6'>
            <button 
              className='w-full bg-secondary text-white font-mont font-bold py-2.5 px-11 text-[14px] lg:text-[18px] rounded-lg cursor-pointer'
              type="submit"
            >
              Registrar
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
