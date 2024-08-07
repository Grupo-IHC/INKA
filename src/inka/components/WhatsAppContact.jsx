export const WhatsAppContact = () => {
  

  const sendMessage = () => {
    const whatsappNumber = '51928420504';
    const encodedMessage = encodeURIComponent("Buenas tardes, quisiera información sobre sus productos.");
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <button className='btn-wsp  bottom-4 right-4 w-[60px] h-[60px] xl:w-[90px] xl:h-[90px] ' >
      <img src="https://aws-sellos.s3.amazonaws.com/Imagenes+WEBP/icon_wsp.webp" alt="Contactar por WhatsApp" className="w-7/12" onClick={sendMessage} />
    </button>
  );
};
