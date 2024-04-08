import stamp from '../../shared/assets/stamp.svg';

export const Loader = () => {
  return (
    <div className="loader-container flex items-center justify-center min-h-screen z-50 fixed w-full inset-0 bg-[#fff]">
      <span className='loader'></span>
      <img className='stamp' src={stamp} alt="" />
    </div>
  )
}
