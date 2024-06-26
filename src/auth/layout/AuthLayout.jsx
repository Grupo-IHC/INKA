import { useNavigate } from 'react-router-dom';

export const AuthLayout = ({children, title = ""}) => {

  const navigate = useNavigate();

  return (
    <div 
      className={`min-h-screen w-full flex justify-center items-center ${title==="INICIAR SESION" ? "lg:justify-end lg:bg-login lg:bg-left-center" : "lg:justify-start lg:bg-register lg:bg-center"} lg:bg-cover lg:bg-no-repeat`}
    >
      <div className={`lg:h-screen lg:flex lg:items-center ${title==="INICIAR SESION" ? "lg:justify-center lg:bg-waveLogin lg:bg-center-left" : "lg:justify-start lg:bg-waveRegister lg:bg-right"} lg:w-[700px] lg:bg-no-repeat lg:bg-cover 2xl:w-[1000px]`}>
        <div className={`border-black p-6 rounded-2xl max-w-[300px] md:min-w-[400px] ${title==="INICIAR SESION" ? "lg:ml-[25%] 2xl:ml-[15%]" : "lg:ml-[8%] 2xl:ml-[15%]"} 2xl:min-w-[500px]`}>
          {
            title ==="INICIAR SESION" &&
            <div className='cursor-pointer flex items-center justify-start gap-x-[10px] xl:mb-[20px]' onClick={() => navigate("/")}>
              <i className="fa-solid fa-arrow-left text-[20px] text-tertiary"></i>
              <span className='text-tertiary font-bold xl:text-[18px]'>Regresar</span>
            </div>
          }
          <h1 className="font-stick 2xl:text-[40px] lg:text-[25px] text-center py-4">{title}</h1>
          {children}
        </div>
      </div>
    </div>
  )
}
