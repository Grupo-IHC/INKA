import React, { useState } from 'react';
import wsp from '../../shared/assets/icon_wsp.png'; // Asegúrate de proporcionar la ruta correcta a tu imagen
import cerrar from '../../shared/assets/cerrar_icon.png';

export const Wsp = () => {
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  const handleWhatsApp = () => {
    setShowWhatsApp(true);
    // const phoneNumber = '928420504'; // Reemplaza con tu número de teléfono
    // const message = encodeURIComponent('TUMENSAJE'); // Reemplaza con tu mensaje predefinido
    // window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const CloseWhatsApp = () => {
    setShowWhatsApp(false);
  };

  return (
    <div>       
        <button className='btn-wsp' >
          <img src={wsp} alt="Contactar por WhatsApp" className="w-8/12" onClick={handleWhatsApp}  />
        </button>
        {showWhatsApp && (
          <div className='domino flex flex-col  items-center  fixed bottom-4 right-4 w-[250px] h-[300px]  bg-white border-2 border-green-500 rounded-md pt-2 '>
            <div className='flex justify-between w-[235px] h-[30px] rounded-md bg-white border-2 border-green-500 pl-2'>
                <p>Whatsapp</p>
                <button className=' pl-2 h-[25px] '>
                  <img src={cerrar} alt="Cerrar pestaña wsp" className="h-[25px] w-[25px]" onClick={CloseWhatsApp} />
                </button>
            </div>
            <div className='flex w-[234px] h-[240px] rounded-md bg-black mt-[10px] border-2 border-green-500'>

            </div>
          </div>
        )}
    </div>
  );
};
