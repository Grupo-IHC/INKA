import logoInkaFooter from '../../shared/assets/logoFooter.svg';
import homeVector from '../../shared/assets/homeVector.svg';
import emailVector from '../../shared/assets/emailVector.svg';
import fbIcon from '../../shared/assets/fbIcon.svg';
import igIcon from '../../shared/assets/igIcon.svg';
import ytIcon from '../../shared/assets/youtubeIcon.svg';

export const Footer = () => {
  return (
    <footer>
      <div className='container mx-auto px-[15px] py-[8px]'>
        <div className='flex flex-col items-center gap-y-[12px] lg:flex-row lg:justify-center'>
          <img className='w-3/12' src={logoInkaFooter} alt="LogoInka" />
          <div className='flex items-center w-full'>
            <img className='w-[30px]' src={homeVector} alt="Home" />
            <span className='font-inka font-semibold text-justify text-[12px] lg:text-md ml-2 w-full'>
              Jr. Maximo Gorbitz 889 Zona D
            </span>
          </div>
          <div className='flex items-center w-full'>
            <img className='w-[30px]' src={emailVector} alt="Email" />
            <span className='font-inka font-semibold text-[12px] lg:text-md ml-2'>
             sellosinka@gmail.com
            </span>
          </div>
          <div className='icons flex items-center justify-center gap-x-4 w-full'>
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
          <small className='text-[12px]'>
            Copyright © INKA SAC. Todos los derechos reservados.
          </small>
        </div>
      </div>
    </footer>
  )
}
