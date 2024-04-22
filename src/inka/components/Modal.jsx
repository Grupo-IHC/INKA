import React from 'react'

export const Modal = ({children, onClose}) => {
  const handleContentClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div 
      className={`modal cursor-pointer h-screen w-full flex justify-center items-center bg-[#000] bg-opacity-75 fixed inset-0 z-40`}
      onClick={onClose}
    >
      <div 
        className="bg-white p-6 rounded-2xl min-w-[300px] max-w-[310px] md:min-w-[500px] md:max-w-[600px] lg:min-w-[550px] flex flex-col justify-center"
        onClick={handleContentClick}
      >
        {children}
      </div>
    </div>
  )
}
