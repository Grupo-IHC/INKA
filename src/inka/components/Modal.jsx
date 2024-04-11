import React from 'react'

export const Modal = ({children, title=''}) => {
  return (
    <div 
      className={`modal cursor-pointer h-screen w-full flex justify-center items-center bg-[#000] bg-opacity-75 fixed inset-0 z-30`}
    >
      <div className="bg-white p-6 rounded-2xl min-w-[550px]">
        <h1 className="font-mont font-bold text-3xl	text-center py-4 border-b-2 border-[#000]">{title}</h1>
        {children}
      </div>
    </div>
  )
}
