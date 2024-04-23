import React from 'react'

export const NewPasswordPage = () => {
  return (
    <>
              <div className=" h-[100vh] w-[100%] grid grid-cols-1 lg:grid-cols-2 bg-white">
        <div className="hidden lg:flex lg:bg-cover lg:bg-register"></div>
        <div className="flex flex-col justify-center items-center container mx-auto px-10 sm:px-16 md:px-20 lg:px-8">
          <form
            action=""
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
            <div className="flex flex-col pb-2 lg:pb-2">
              <label className="text-xs sm:text-sm md:text-md lg:text-lg pb-3 md:pb-3 font-bold">
                Nueva contraseña
              </label>
              <input
                className="text-xs sm:text-sm md:text-md lg:text-lg h-8 md:h-10 rounded-full ps-3 md:ps-4 outline-none"
                type="password"
                placeholder="Ingrese su correo"
              />
            </div>
            <div className="flex flex-col pb-2 lg:pb-3">
              <label className="text-xs sm:text-sm md:text-md lg:text-lg pb-3 md:pb-3 font-bold">
                Repetir contraseña
              </label>
              <input
                className="text-xs sm:text-sm md:text-md lg:text-lg h-8 lg:h-10 rounded-full ps-3 md:ps-4 outline-none"
                type="password"
                placeholder="Ingrese su correo"
              />
            </div>
            <button className="text-xs sm:text-sm md:text-md lg:text-lg bg-secondary text-white font-medium p-3 md:p-3 rounded-2xl m-auto w-40 md:w-52 mb-1 md:mb-0">
              Cambiar contraseña
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
