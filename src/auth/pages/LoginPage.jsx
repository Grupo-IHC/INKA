import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
  return (
    <AuthLayout title="Login"> 
      <form>
        <div className='flex justify-between mt-6 items-center'>
          <label className='font-mont font-bold text-xl' htmlFor="email">Email</label>
          <input
            className='w-max bg-white py-2.5 px-4 rounded-lg'
            type="text" 
          />
        </div>
        <div className='flex justify-between mt-6 items-center'>
          <label className='font-mont font-bold text-xl' htmlFor="password">Contraseña</label>
          <input
            className='w-max bg-white py-2.5 px-4 rounded-lg'
            type="text" 
          />
        </div>
        <div className='mt-6 text-center'>
          <button className='bg-secondary text-white font-mont font-bold text-xl py-2.5 px-11 rounded-lg cursor-pointer'>
            Login
          </button>
        </div>
      </form>
    </AuthLayout>
  )
}
