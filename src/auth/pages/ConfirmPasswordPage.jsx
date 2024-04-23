import React from "react";

export const ConfirmPasswordPage = () => {
  return (
    <>
      <div className=" h-[100vh] w-[100%] grid grid-cols-1 lg:grid-cols-2 bg-white">
        <div className="hidden lg:flex lg:bg-cover lg:bg-register"></div>
        <div className="flex flex-col justify-center items-center container mx-auto px-14 sm:px-16 md:px-20 lg:px-8">
          <form
            action=""
            className="flex flex-col justify-start relative gap-4 bg-[#D5D6D9] w-full max-w-lg py-12 px-8 rounded-3xl h-fit shadow-lg shadow-gray-600/40"
          >
            <div className="pb-4 text-start">
              <h1 className="text-3xl font-bold pb-10">
                Validar código de seguridad
              </h1>
              <p className="text-lg">
                Hemos enviado un código al correo registrado example@data.com.pe
              </p>
            </div>
            <div className="flex flex-row justify-between items-center pt-3 pb-8">
              
              <input type="text" className="bg-white text-6xl text-center outline-none h-20 w-[20%] rounded-2xl " ></input>
              <input type="text" className="bg-white text-6xl text-center outline-none h-20 w-[20%] rounded-2xl " ></input>
              <input type="text" className="bg-white text-6xl text-center outline-none h-20 w-[20%] rounded-2xl " ></input>
              <input type="text" className="bg-white text-6xl text-center outline-none h-20 w-[20%] rounded-2xl " ></input>
              
              {/* <label className="pb-7 text-lg font-bold">
                Correo electrónico
              </label>
              <input
                className="h-10 rounded-full ps-4 text-lg outline-none"
                type="email"
                placeholder="Ingrese su correo"
              /> */}
            </div>
            <div className="flex flex-col self-center text-[#1D1D1D] gap-4 mb-8">
              <div className="flex gap-2 justify-between">
                <span>¿No recibiste el código?</span>
                <a
                  className="text-[#1D1D1D] font-semibold no-underline hover:underline "
                  title="Create Account"
                >
                  Reenviar
                </a>
              </div>
            </div>
            <button className="bg-secondary text-white font-medium p-2 rounded-2xl m-auto w-32 mt-2">
              Continuar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
