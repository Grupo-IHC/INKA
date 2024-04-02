import back from '../../shared/assets/FondoLogin.png';

export const AuthLayout = ({children, title = ""}) => {
  return (
    <div 
      className='min-h-screen bg-login bg-no-repeat bg-cover flex justify-center items-center'
    >
      <div className="bg-primary bg-opacity-75 p-6 rounded-2xl" style={{minWidth: "550px"}}>
        <h1 className="font-mont font-bold text-3xl	text-center py-4">{title}</h1>
        {children}
      </div>
    </div>
  )
}
