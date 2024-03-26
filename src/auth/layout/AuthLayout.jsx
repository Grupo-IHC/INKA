
export const AuthLayout = ({children, title = ""}) => {
  return (
    <div className='min-h-screen bg-login bg-no-repeat bg-cover flex justify-center items-center'>
      <div className="w-96 bg-primary bg-opacity-75 p-3 rounded-md">
        <h1 className="font-mont font-bold text-3xl	text-center">{title}</h1>
        {children}
      </div>
    </div>
  )
}
