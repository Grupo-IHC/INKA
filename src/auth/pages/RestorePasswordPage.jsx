import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../hooks/useAuthStore";
import { useForm } from "../../hooks/useForm";
import { Loader } from "../../inka/components/Loader";
import { useDispatch } from "react-redux";
import  {restorePassword as restore}  from "../../store/auth/authSlice"

export const RestorePasswordPage = () => {

  const {onInputChange, email} = useForm({email:''});
  const {loading, restorePassword} = useAuthStore();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async(e) => {
    e.preventDefault();
    if(email === '') return;
    try {
      const {status} = await restorePassword(email);
      if (status === 'OK') {
        navigate('/auth/new-password');
        dispatch(restore(email));
      } 
    } catch (error) {
      throw new error;
    }
  }

  return (
    <>
      {loading && <Loader />}
      <div className=" h-[100vh] w-[100%] grid grid-cols-1 lg:grid-cols-2 bg-white">
        <div className="hidden lg:flex lg:bg-cover lg:bg-register"></div>
        <div className="flex flex-col justify-center items-center container mx-auto px-10 sm:px-16 md:px-20 lg:px-8">
          <form
            onSubmit={onSubmit}
            className="flex flex-col justify-start relative gap-4 bg-[#D5D6D9] w-full max-w-lg py-6 md:py-7 lg:py-9 px-4 lg:px-8 rounded-3xl h-fit shadow-lg shadow-gray-600/40"
          >
            <div className="pb-2 md:pb-4 text-start">
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold pb-3 lg:pb-7">
                Olvidaste tu contraseña
              </h1>
              <p className="text-xs sm:text-sm md:text-md lg:text-lg">
                Para restablecer su contraseña, ingrese su correo electrónico
              </p>
            </div>
            <div className="flex flex-col pb-2 lg:pb-2">
              <label className="pb-3 md:pb-5 text-xs sm:text-sm md:text-md lg:text-lg font-bold">
                Correo electrónico
              </label>
              <input
                className="h-8 lg:h-10 rounded-full ps-3 md:ps-4 text-xs sm:text-sm md:text-md lg:text-lg outline-none"
                type="email"
                placeholder="Ingrese su correo"
                name="email"
                value={email}
                onChange={onInputChange}
              />
            </div>
            <button 
              className="bg-secondary text-white text-xs sm:text-sm md:text-md lg:text-lg font-medium p-2 rounded-2xl m-auto w-32 mb-0 lg:mb-8"
              type="submit"
            >
              Continuar
            </button>
            <div className="flex flex-col self-center text-[#1D1D1D] gap-4 mt-2">
              <div className="flex text-xs sm:text-sm md:text-md lg:text-lg gap-2 justify-between">
                <span>Don't have an account?</span>
                <a
                  className="text-[#1D1D1D] font-semibold no-underline hover:underline "
                  title="Create Account"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
