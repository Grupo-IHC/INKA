import React, { useState } from 'react';
import wsp from '../../shared/assets/icon_wsp.png';
import cerrar from '../../shared/assets/cerrar_icon.png';
import send from '../../shared/assets/send.png';
import inkaLogoMobile from '../../shared/assets/logoFooter.svg';

export const Wsp = () => {
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [message, setMessage] = useState('');

  const handleWhatsApp = () => {
    setShowWhatsApp(true);
  };

  const closeWhatsApp = () => {
    setShowWhatsApp(false);
  };

  const sendMessage = () => {
    const whatsappNumber = '51928420504';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div>       
        <button className='btn-wsp lg:bottom-4 lg:right-4 lg:w-[50px] h-[50px]' >
          <img src={wsp} alt="Contactar por WhatsApp" className="w-8/12" onClick={handleWhatsApp}  />
        </button>
        {showWhatsApp && (
          <div className='domino flex flex-col items-center fixed bottom-4 right-4 w-[250px] h-[230px] bg-white border-2 border-green-500 rounded-md pt-2'>
            <div className='flex justify-between w-[235px] h-[30px] rounded-md bg-white border-2 border-green-500 pl-2'>
                <p>Whatsapp</p>
                <button className='pl-2 h-[25px]' onClick={closeWhatsApp}>
                  <img src={cerrar} alt="Cerrar pestaña wsp" className="h-[25px] w-[25px]" />
                </button>
            </div>
            <div className='flex flex-col w-[234px] h-[170px] rounded-md bg-white mt-[10px] border-2 border-green-500'>
              <div className="flex justify-between w-[220px] h-[50px]  m-1"> 
                <div className='flex items-center  justify-center w-[50px] h-[50px] bg-white rounded-full border-2 border-green-500'>
                  <img src={inkaLogoMobile} alt="Logo Inka"/>
                </div>
                <div className='flex w-[160px] h-[60px] bg-white border-2 rounded-md border-green-500'>
                  <p className='pl-1'>Hola ¿Con qué le puedo ayudar?</p>
                </div>
              </div>
              <div className="flex justify-between items-center w-[220px] h-[50px]  m-1 pt-14"> 
                <div className='flex w-[180px] h-[60px] bg-white border-2 rounded-md border-green-500'>
                  <textarea value={message} onChange={(e) => setMessage(e.target.value)} className='m-px pl-1 rounded-md outline-none w-full break-all resize-none custom-scrollbar' placeholder="Escribe tu mensaje"></textarea>
                </div>
                <div className='flex items-center justify-center w-[30px] h-[30px] bg-white rounded-full border-4 border-green-500'>
                  <button className='btn-wsp w-[30px] h-[30px]' onClick={sendMessage}>
                    <img src={send} alt="Logo Inka" className='w-[20px] h-[20px]'/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
    </div>
  );
};
