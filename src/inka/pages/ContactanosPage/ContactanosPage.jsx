import { useState } from 'react';
import { useForm } from '../../../hooks/useForm';
import contactImg from '../../../shared/assets/contactanosImg.png';

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
      <div className="container mx-auto">
        <h3 className="font-bold">Contáctanos</h3>
        <p className="">Si tienes alguna pregunta, inquietud o queja, no dudes en ponerte en contacto con nosotros. Nuestro equipo de atención al cliente está disponible para brindarte asistencia y resolver cualquier problema que puedas tener. Tu satisfacción es nuestra prioridad.</p>
        <div className="flex">
          <form onSubmit={onSubmit} className=''>
            <div className='flex relative'>
              <label className={`font-mont  ${(formSubmitted && !!asuntoValid)? "text-red-600" : ""}`} htmlFor="asunto">Asunto</label>
              <input
                value={asunto}
                name="asunto"
                className={` bg-primary outline-none ${(formSubmitted && !!asuntoValid)? "border-2 border-red-600" : "border-2 border-transparent"}`}
                type="text" 
                onChange={onInputChange} 
              />
              {(formSubmitted && !!asuntoValid) && <p className="font-mont absolute bottom-1">{asuntoValid}</p>}
            </div>
            <div className='flex relative'>
              <label className={`font-mont ${(formSubmitted && !!messageValid)? "text-red-600" : ""}`} htmlFor="message">Mensaje</label>
              <textarea 
                name="message" 
                cols="30" rows="8"
                className={`bg-primary outline-none ${(formSubmitted && !!messageValid)? "border-2     border-red-600" : "border-2 border-transparent"}`}
                onChange={onInputChange} 
                value={message}
              >
                value={message}
              </textarea>
              {(formSubmitted && !!messageValid) && <p className="font-mont absolute bottom-1">    {messageValid}</p>}
            </div>
            <button 
                className='bg-secondary text-white font-mont font-bold text-xl py-2.5 px-11 rounded-lg cursor-pointer'
                type="submit"
            >
              Enviar consulta
            </button>
          </form>
          <img src={contactImg} alt="contactanosImg" />
        </div>
      </div>
    </section>
  )
}
