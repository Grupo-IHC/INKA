import { useState } from 'react';
import { useForm } from '../../../hooks/useForm';
import contactImg from '../../../shared/assets/contactanosImg.png';
import UBI from '../../../shared/assets/UBI.png';
import RING from '../../../shared/assets/RING.png';
import MSG from '../../../shared/assets/MSG.png';

const formValidations = {
  asunto: [(value) => value.length > 0,'Ingrese un asunto.'],
  message: [(value) => value.length > 0,'Escriba un mensaje.'],
};

export const ContactanosPage = () => {

  const {onInputChange, formState, asunto, message, isFormValid, asuntoValid, messageValid}  = useForm({
    asunto: '',
    message: ''
  }, formValidations);

  const [formSubmitted, setFormSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) return;
    console.log(formState);
  }


  return (
    <section className="home-4">
      <div className="container mx-auto" >
        <div className=" m-5 sm: m-5 md:grid grid-cols-2 mt-5 ml-5 mr-5 2xl:mb-10" >
          <h1 className="font-bold text-center text-xl m-4 md:text-left text-2xl lg:text-2xl xl:text-4xl">PONTE EN CONTACTO <br></br> CON NUESTRO EQUIPO</h1>
          <p className="text-xs text-justify sm:text-sm xl:text-xl">Si tienes alguna pregunta, inquietud o queja, no dudes en ponerte en contacto con nosotros. Nuestro equipo de atención al cliente está disponible para brindarte asistencia y resolver cualquier problema que puedas tener. Tu satisfacción es nuestra prioridad.</p>
        </div>
        <div className="m-6 mb-10 lg:flex justify-between xl:justify-start gap-x-16 2xl:gap-x-24 ">
          <form onSubmit={onSubmit} className='lg:w-7/12'>
            <div className='flex justify-between pb-1 flex-col relative'>
              <label className={`font-mont font-bold py-1 text-sm md:text-lg 2xl:text-2xl${(formSubmitted && !!asuntoValid)? "text-red-600" : ""}`} htmlFor="asunto">Correo Electrónico</label>
              <input
                value={asunto}
                name="asunto"
                className={`bg-[#E8DFDB] rounded-lg bg-primary outline-none ${(formSubmitted && !!asuntoValid)? "border-2 border-red-600" : "border-2 border-transparent"}`}
                type="text" 
                onChange={onInputChange} 
              />
              {(formSubmitted && !!asuntoValid) && <p className="font-mont absolute bottom-1">{asuntoValid}</p>}
            </div>
            <div className='flex flex-col md:flex-row md:justify-between pb-1 relative'>
                <div className='flex justify-between pb-1 flex-col relative md:w-5/12 '>
                  <label className={`font-mont font-bold py-1 text-sm md:text-lg 2xl:text-2xl${(formSubmitted && !!asuntoValid)? "text-red-600" : ""}`} htmlFor="asunto">Asunto</label>
                  <input
                    value={asunto}
                    name="asunto"
                    className={`bg-[#E8DFDB] rounded-lg bg-primary outline-none ${(formSubmitted && !!asuntoValid)? "border-2 border-red-600" : "border-2 border-transparent"}`}
                    type="text" 
                    onChange={onInputChange} 
                  />
                  {(formSubmitted && !!asuntoValid) && <p className="font-mont absolute bottom-1">{asuntoValid}</p>}
                </div>
                <div className='flex justify-between pb-1 flex-col relative md:w-6/12'>
                <label className={`font-mont font-bold py-1 text-sm md:text-lg 2xl:text-2xl ${(formSubmitted && !!asuntoValid)? "text-red-600" : ""}`} htmlFor="asunto">Nombre y Apellido</label>
                <input
                  value={asunto}
                  name="asunto"
                  className={`bg-[#E8DFDB] rounded-lg bg-primary outline-none ${(formSubmitted && !!asuntoValid)? "border-2 border-red-600" : "border-2 border-transparent"}`}
                  type="text" 
                  onChange={onInputChange} 
                />
                {(formSubmitted && !!asuntoValid) && <p className="font-mont absolute bottom-1">{asuntoValid}</p>}
                </div>
            </div>
            <div className='flex justify-between pb-1 flex-col relative mb-5'>
              <label className={`font-mont font-bold py-1 text-sm md:text-lg 2xl:text-2xl${(formSubmitted && !!messageValid)? "text-red-600" : ""}`} htmlFor="message">Mensaje</label>
              <textarea 
                name="message" 
                cols="30" rows="3"
                className={`bg-[#E8DFDB] rounded-lg bg-primary outline-none ${(formSubmitted && !!messageValid)? "border-2 border-red-600" : "border-2 border-transparent"}`}
                onChange={onInputChange} 
                value={message}
              >
                value={message}
              </textarea>
              {(formSubmitted && !!messageValid) && <p className="font-mont absolute bottom-1">    {messageValid}</p>}
            </div>
            <button 
                className='w-full bg-secondary text-white font-mont font-bold text-xl py-2.5 px-11 rounded-lg cursor-pointer mb-5'
                type="submit"
            >
              Enviar correo
            </button>
          </form>
          <div class="sm:w-full lg:w-6/12"><iframe class="full" width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=es&amp;q=Les%20Rambles,%201%20Barcelona,%20Spain+(Mi%20nombre%20de%20egocios)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/car-satnav-gps/">Car Navigation Systems</a></iframe></div>
        </div>
        <div class="pb-10 flex flex-col items-center  md:flex-row md:justify-center w-full space-y-4 md:space-y-0 md:space-x-4 md:px-2 ">
          <div class="bg-[#F2F2F2] flex justify-center items-center flex-col p-1 w-8/12 shadow-md">
            <img src={UBI} alt="UBICACION" />
            <p class="text-sm sm:text-lg xl:text-2xl" >UBICACION</p>
            <p class="text-xs sm:text-sm xl:text-xl" >Av. Sol a Marte Zona “D”</p>
          </div>
          <div class="bg-[#7B6960] text-white  flex justify-center items-center flex-col p-1  w-8/12 shadow-md">
            <img src={MSG} alt="MSG" />
            <p class="text-sm sm:text-lg xl:text-2xl">CORREO</p>
            <p class="text-xs sm:text-sm xl:text-xl">sellosinka@gmail.com</p> 
          </div>
          <div class="bg-[#F2F2F2] flex justify-center items-center flex-col p-1  w-8/12 shadow-md">
            <img src={RING} alt="RING" />
            <p class="text-sm sm:text-lg xl:text-2xl">TELEFONO</p>
            <p class="text-xs sm:text-sm xl:text-xl">+51 987654321</p>
          </div>
        </div>
      </div>
    </section>
  )
}
