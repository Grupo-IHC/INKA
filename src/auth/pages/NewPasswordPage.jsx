import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { useSelector } from "react-redux";
import { useAuthStore } from "../../hooks/useAuthStore";
import { useNavigate } from "react-router-dom";

const formValidations = {
  password: [(value) => value.length >= 6,'La contraseña debe tener al menos 6 caracteres.'],
};

export const NewPasswordPage = () => {

  const {onInputChange, password, confirmPassword, isFormValid, passwordValid, formState} = useForm({password:'', confirmPassword:''}, formValidations);

  const [formSubmitted, setFormSubmited] = useState(false);

  const email = localStorage.getItem('email');

  const {changePassword} = useAuthStore();

  const navigate = useNavigate();

  const onSubmit = async(e) => {
    e.preventDefault();
    setFormSubmited(true);
    if (!isFormValid || (password !== confirmPassword)) return;

    await changePassword({email, new_password:password});
    
    formState.password = '';
    formState.confirmPassword = '';

    setTimeout(() => {
      navigate('/auth/login');
    }, 15000);
  }

  return (
    <>
      <div className=" h-[100vh] w-[100%] grid grid-cols-1 lg:grid-cols-2 bg-white">
        <div className="hidden lg:flex lg:bg-cover lg:bg-register"></div>
        <div className="flex flex-col justify-center items-center container mx-auto px-10 sm:px-16 md:px-20 lg:px-8">
          <form
            onSubmit={onSubmit}
            className="flex flex-col justify-start relative gap-4 bg-[#D5D6D9] w-full max-w-lg py-5 md:py-7 lg:py-9 px-4 lg:px-8 rounded-3xl h-fit shadow-lg shadow-gray-600/40"
          >
            <div className="pb-1 lg:pb-2 text-start">
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold pb-3 lg:pb-7">
                Restablecer contraseña
              </h1>
              <p className="text-xs sm:text-sm md:text-md lg:text-lg">
                Estás a un paso, escribe tu nueva contraseña
              </p>
            </div>
            <div className="flex flex-col pb-2 lg:pb-5 relative">
              <label className={`labelInput ${(formSubmitted && !!passwordValid)? "text-red-600" : ""}`}>
                Nueva contraseña
              </label>
              <input
                className={`inputClass !bg-white ${(formSubmitted && !!passwordValid)? "border-2 border-red-600" : "border-2 border-transparent"}`}
                type="password"
                name="password"
                value={password}
                onChange={onInputChange}
                placeholder="Ingrese su nueva contraseña"
              />
              {(formSubmitted && !!passwordValid) && <p className="pErrorCLass">{passwordValid}</p>}
            </div>
            <div className="flex flex-col pb-2 lg:pb-5 relative">
              <label className={`labelInput ${(formSubmitted && (password !== confirmPassword))? "text-red-600" : ""}`}>
                Repetir contraseña
              </label>
              <input
                className={`inputClass !bg-white ${(formSubmitted && (password !== confirmPassword))? "border-2 border-red-600" : "border-2 border-transparent"}`}
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={onInputChange}
                placeholder="Confirme su nueva contraseña"
              />
              {(formSubmitted && (password !== confirmPassword)) && <p className="pErrorCLass">Las contraseñas no coinciden.</p>}
            </div>
            <button className="text-xs sm:text-sm md:text-md lg:text-lg bg-secondary text-white font-medium p-3 md:p-3 rounded-2xl m-auto w-40 md:w-52 mb-1 md:mb-0" type="submit">
              Cambiar contraseña
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
