import React from "react";

export const ConfirmPasswordPage = () => {
  return (
    <>
      <div className=" h-[100vh] w-[100%] grid grid-cols-1 lg:grid-cols-2 bg-white">
        <div className="hidden lg:flex lg:bg-cover lg:bg-register"></div>
        <div className="flex flex-col justify-center items-center container mx-auto px-10 sm:px-16 md:px-20 lg:px-8">
          <form
            action=""
            className="flex flex-col justify-start relative gap-4 bg-[#D5D6D9] w-full max-w-lg py-6 md:py-7 lg:py-9 px-4 lg:px-8 rounded-3xl h-fit shadow-lg shadow-gray-600/40"
          >
            <div className="pb-2 lg:pb-3 text-start">
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold pb-3 lg:pb-7">
                Validar código de seguridad
              </h1>
              <p className="text-xs sm:text-sm md:text-md lg:text-lg">
                Hemos enviado un código al correo registrado example@data.com.pe
              </p>
            </div>
            <div className="flex flex-row justify-evenly lg:justify-between items-center pb-2 md:pb-4 lg:pb-10">
              
              <input type="text" className="bg-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center outline-none h-12 sm:h-16 lg:h-20 w-[14%] sm:w-[15%] md:w-[16%] lg:w-[20%] rounded-xl sm:rounded-2xl " ></input>
              <input type="text" className="bg-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center outline-none h-12 sm:h-16 lg:h-20 w-[14%] sm:w-[15%] md:w-[16%] lg:w-[20%] rounded-xl sm:rounded-2xl " ></input>
              <input type="text" className="bg-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center outline-none h-12 sm:h-16 lg:h-20 w-[14%] sm:w-[15%] md:w-[16%] lg:w-[20%] rounded-xl sm:rounded-2xl " ></input>
              <input type="text" className="bg-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center outline-none h-12 sm:h-16 lg:h-20 w-[14%] sm:w-[15%] md:w-[16%] lg:w-[20%] rounded-xl sm:rounded-2xl " ></input>
              
              {/* <label className="pb-7 text-lg font-bold">
                Correo electrónico
              </label>
              <input
                className="h-10 rounded-full ps-4 text-lg outline-none"
                type="email"
                placeholder="Ingrese su correo"
              /> */}
            </div>
            <div className="flex flex-col self-center text-[#1D1D1D] gap-4 mb-3 lg:mb-8">
              <div className="flex gap-2 text-xs sm:text-sm md:text-md lg:text-lg justify-between">
                <span>¿No recibiste el código?</span>
                <a
                  className="text-[#1D1D1D] font-semibold no-underline hover:underline "
                  title="Create Account"
                >
                  Reenviar
                </a>
              </div>
            </div>
            <button className="bg-secondary text-white text-sm md:text-lg font-medium p-2 rounded-2xl m-auto w-32 mt-0 md:mt-2">
              Continuar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
