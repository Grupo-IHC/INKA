import back from '../../shared/assets/FondoLogin.png';

export const AuthLayout = ({children, title = "", type =''}) => {
  return (
    <div 
      className={`min-h-screen w-full flex justify-center items-center ${type === 'modal' ? 'bg-[#000] bg-opacity-75 fixed z-50' : 'bg-login bg-no-repeat bg-cover'}`}
    >
      <div className="bg-primary bg-opacity-75 p-6 rounded-2xl" style={{minWidth: "550px"}}>
        <h1 className="font-mont font-bold text-3xl	text-center py-4">{title}</h1>
        {children}
      </div>
    </div>
  )
}
