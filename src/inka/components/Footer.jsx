import logoInkaFooter from '../../shared/assets/logoFooter.svg';
import homeVector from '../../shared/assets/homeVector.svg';
import emailVector from '../../shared/assets/emailVector.svg';
import fbIcon from '../../shared/assets/fbIcon.svg';
import igIcon from '../../shared/assets/igIcon.svg';
import ytIcon from '../../shared/assets/youtubeIcon.svg';

export const Footer = () => {
  return (
    <footer>
      <div className='container mx-auto py-5 px-16 2xl:py-5 2xl:px-0'>
        <div className='flex justify-between'>
          <img className='w-1/12 2xl:w-[80px]' src={logoInkaFooter} alt="LogoInka" />
          <div className='flex items-center'>
            <img className='w-1/12' src={homeVector} alt="Home" />
            <span className='font-inka font-semibold text-md ml-2 w-full'>
              Jr. Maximo Gorbitz 889 Zona D
            </span>
          </div>
          <div className='flex items-center'>
            <img className='w-1/12' src={emailVector} alt="Email" />
            <span className='font-inka font-semibold text-md ml-2'>
             sellosinka@gmail.com
            </span>
          </div>
          <div className='icons flex items-center gap-x-4'>
            <a href="https://www.youtube.com/watch?v=XVOBVbm3FJg" target='blank'>
              <img className='w-8/12' src={fbIcon} alt="Facebook" />
            </a>
            <a href="https://www.youtube.com/watch?v=XVOBVbm3FJg" target='blank'>
              <img className='w-8/12' src={igIcon} alt="Instagram" />
            </a>
            <a href="https://www.youtube.com/watch?v=XVOBVbm3FJg" target='blank'>
              <img className='w-8/12' src={ytIcon} alt="Youtube" />
            </a>
          </div>
        </div>
        <div className='text-center'>
          <small>
            Copyright © INKA SAC. Todos los derechos reservados.
          </small>
        </div>
      </div>
    </footer>
  )
}
