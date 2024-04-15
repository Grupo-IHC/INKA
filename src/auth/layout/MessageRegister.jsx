import checkIcon from '../../shared/assets/checkIcon.svg';
import errorIcon from '../../shared/assets/xIcon.svg';
import {useNavigate } from 'react-router-dom';


export const MessageRegister = ({status, message,onClose}) => {

  const navigate = useNavigate();

  const closeModal = () => {
    onClose();
    if(status !== 'ERROR') {
      navigate('/auth/login');
    }
  }

  return (
    <div 
      className="modal cursor-pointer min-h-screen w-full flex justify-center items-center bg-[#000] bg-opacity-75 fixed inset-0 z-50"
      onClick={onClose}
    >
      <div className="cursor-default bg-white p-6 rounded-2xl max-w-[300px] lg:max-w-[560px] flex flex-col items-center gap-y-4">
        <img src={status !== 'ERROR' ? checkIcon : errorIcon} className='w-[80px]' alt="Icon" />
        <p className='font-mont font-semibold text-[14px] lg:text-[18px] text-center'>{message}</p>
        <button 
          className={`font-mont font-bold text-[18px] cursor-pointer ${status !== 'ERROR' ? 'bg-[#8DC670]' : 'bg-[#FF4C61]'} w-full text-white py-1 rounded-2xl`}
          onClick={closeModal}
        >
          OK
        </button>
      </div>
    </div>
  )
}
