import back from '../../shared/assets/FondoLogin.png';

export const AuthLayout = ({children, title = ""}) => {
  return (
    <div 
      className="min-h-screen w-full flex justify-center items-center bg-login bg-no-repeat bg-cover"
    >
      <div className="bg-primary bg-opacity-75 p-6 rounded-2xl max-w-[300px] md:min-w-[400px] lg:min-w-[550px]">
        <h1 className="font-mont font-bold text-[20px] lg:text-[25px] text-center py-4">{title}</h1>
        {children}
      </div>
    </div>
  )
}
