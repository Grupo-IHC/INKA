import { useState } from 'react';
import { useForm } from '../../../hooks/useForm';
import { Loader } from '../../../inka/components/Loader';
import { useInkaStore } from '../../../hooks/useInkaStore';

const formValidations = {
  correo: [(value) => value.length > 0,'Ingrese un correo.'],
  nombres: [(value) => value.length > 0,'Ingrese nombre y apellidos.'],
  asunto: [(value) => value.length > 0,'Ingrese un asunto.'],
  message: [(value) => value.length > 0,'Escriba un mensaje.'],
};

export const ContactanosPage = () => {

  const { ContactSend } = useInkaStore();

  const {onInputChange, formState, asunto,correo,nombres, message, isFormValid,correoValid,nombresValid, asuntoValid, messageValid,setFormState}  = useForm({
    asunto: '',
    message: '',
    correo: '',
    nombres: ''
  }, formValidations);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

    
  const onSubmit = async(e) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) return;
    
    const contactSend = {
      name:nombres,
      email:correo,
      mail_subject:asunto,
      message:message
    }

    setLoading(true);
    await ContactSend(contactSend);
    setLoading(false);
    setFormState({
      asunto: '',
      message: '',
      correo: '',
      nombres: ''
    })
    setFormSubmitted(false);
  }


  return (
    <>
    {loading&&<Loader />}
      <section className="home-4">
        <div className="container mx-auto" >
          <div className="md:grid grid-cols-2 mt-5 ml-5 mr-5 2xl:mb-10" >
            <h1 className="font-bold text-center text-xl m-4 md:text-left md:m-0 md:ml-4  lg:text-2xl xl:text-4xl">PONTE EN CONTACTO <br></br> CON NUESTRO EQUIPO</h1>
            <p className="text-xs text-justify sm:text-xs lg:text-sm  xl:text-base">Si tienes alguna pregunta, inquietud o queja, no dudes en ponerte en contacto con nosotros. Nuestro equipo de atención al cliente está disponible para brindarte asistencia y resolver cualquier problema que puedas tener. Tu satisfacción es nuestra prioridad.</p>
          </div>
          <div className="m-6 mb-10 lg:flex justify-between xl:justify-start gap-x-16 2xl:gap-x-24 ">
            <form onSubmit={onSubmit} className='lg:w-7/12'>
              <div className='flex justify-between pb-5 flex-col relative'>
                <label className={`font-mont font-bold py-1 text-sm md:text-lg 2xl:text-2xl ${(formSubmitted && !!correoValid)? "text-red-600" : ""}`} htmlFor="correo">Correo Electrónico</label>
                <input
                  value={correo}
                  name="correo"
                  className={`rounded-lg bg-primary outline-none ${(formSubmitted && !!correoValid)? "border-2 border-red-600" : "border-2 border-transparent"} text-lg p-2`}
                  type="text" 
                  onChange={onInputChange} 
                  placeholder="Correo Electrónico" 
                />
                {(formSubmitted && !!correoValid) && <p className="pErrorCLass">{correoValid}</p>}
              </div>

              <div className='flex flex-col md:flex-row md:justify-between pb-1 relative'>
                  <div className='flex justify-between pb-5 flex-col relative md:w-5/12 '>
                    <label className={`font-mont font-bold py-1 text-sm md:text-lg 2xl:text-2xl ${(formSubmitted && !!asuntoValid)? "text-red-600" : ""}`} htmlFor="asunto">Asunto</label>
                    <input
                      value={asunto}
                      name="asunto"
                      className={`rounded-lg bg-primary outline-none ${(formSubmitted && !!asuntoValid)? "border-2 border-red-600" : "border-2 border-transparent"} text-lg p-2`}
                      type="text" 
                      onChange={onInputChange} 
                      placeholder="Tema del mensaje" 
                    />
                    {(formSubmitted && !!asuntoValid) && <p className="pErrorCLass">{asuntoValid}</p>}
                  </div>
                  <div className='flex justify-between pb-5 flex-col relative md:w-6/12'>
                      <label className={`font-mont font-bold py-1 text-sm md:text-lg 2xl:text-2xl ${(formSubmitted && !!nombresValid)? "text-red-600" : ""}`} htmlFor="nombres">Nombre y Apellido</label>
                      <input
                        value={nombres}
                        name="nombres"
                        className={`rounded-lg bg-primary outline-none ${(formSubmitted && !!nombresValid)?"border-2 border-red-600" : "border-2 border-transparent"} text-lg p-2`} 
                        type="text" 
                        onChange={onInputChange} 
                        placeholder="Nombre y Apellido" 
                      />
                      {(formSubmitted && !!nombresValid) && <p className="pErrorCLass">{nombresValid}</p>}
                  </div>
              </div>
              <div className='flex justify-between pb-5 flex-col relative mb-5'>
                <label className={`font-mont font-bold py-1 text-sm md:text-lg 2xl:text-2xl ${(formSubmitted && !!messageValid)? "text-red-600" : ""}`} htmlFor="message">Mensaje</label>
                <textarea 
                  name="message" 
                  cols="30" rows="3"
                  className={`rounded-lg bg-primary outline-none ${(formSubmitted && !!messageValid)? "border-2 border-red-600" : "border-2 border-transparent"} text-lg p-2`}
                  onChange={onInputChange} 
                  value={message}
                  placeholder="Mensaje" 
                  style={{ resize: 'none' }}
                >
                  value={message}
                </textarea>
                {(formSubmitted && !!messageValid) && <p className="pErrorCLass">{messageValid}</p>}
              </div>
              <div className="w-full flex justify-center lg:justify-start">
                <button 
                    className='btn-send mb-5 lg:m-0'
                    type="submit"
                >
                  Enviar correo
                </button>
              </div>
            </form>
            <div className="sm:w-full lg:w-6/12"><iframe className="full" width="100%" height="100%" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Lima,Per%C3%BA+(Mi%20nombre%20de%20egocios)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/car-satnav-gps/">Car Navigation Systems</a></iframe></div>
          </div>
          <div className="pb-10 flex flex-col items-center  md:flex-row md:justify-center w-full space-y-4 md:space-y-0 md:space-x-4 md:px-2 lg:space-x-20 lg:px-32 xl:px-68">
            <div className="py-4 bg-[#F2F2F2] flex justify-center items-center flex-col p-1 w-8/12 shadow-md">
              <img className="h-7 mb-2" src="https://aws-sellos.s3.amazonaws.com/Imagenes+WEBP/UBI.webp" alt="UBICACION" />              <p className="font-bold text-sm sm:text-base xl:text-lg" >UBICACION</p>
              <p className="text-xs sm:text-sm xl:text-sm" >Av. Sol a Marte Zona “D”</p>
            </div>
            <div className="py-4 bg-[#7B6960] text-white  flex justify-center items-center flex-col p-1  w-8/12 shadow-md">
              <img className="h-7 mb-2" src="https://aws-sellos.s3.amazonaws.com/Imagenes+WEBP/MSG.webp" alt="MSG" />
              <p className="font-bold text-sm sm:text-base xl:text-lg">CORREO</p>
              <p className="text-xs sm:text-sm xl:text-sm">sellosinka@gmail.com</p> 
            </div>
            <div className="py-4 bg-[#F2F2F2] flex justify-center items-center flex-col p-1  w-8/12 shadow-md">
              <img className="h-7 mb-2" src="https://aws-sellos.s3.amazonaws.com/Imagenes+WEBP/RING.webp" alt="RING" />
              <p className="font-bold text-sm sm:text-base xl:text-lg">TELEFONO</p>
              <p className="text-xs sm:text-sm xl:text-sm">+51 987654321</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
