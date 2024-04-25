import React, { useState } from 'react';
import wsp from '../../shared/assets/icon_wsp.png';

export const Wsp = () => {
  
  const sendMessage = () => {
    const whatsappNumber = '51928420504';
    const encodedMessage = encodeURIComponent("Buenas tardes, quisiera información sobre sus productos.");
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div>       
        <button className='btn-wsp stamp_wsp bottom-4 right-4 w-[50px] h-[50px] xl:w-[70px] xl:h-[70px]  ' >
          <img src={wsp} alt="Contactar por WhatsApp" className="w-7/12" onClick={sendMessage} />
        </button>
    </div>
  );
};
