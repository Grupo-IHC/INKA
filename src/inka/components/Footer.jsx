import logoInkaFooter from '../../shared/assets/logoFooter.svg';
import homeVector from '../../shared/assets/homeVector.svg';
import emailVector from '../../shared/assets/emailVector.svg';
import fbIcon from '../../shared/assets/fbIcon.svg';
import igIcon from '../../shared/assets/igIcon.svg';
import ytIcon from '../../shared/assets/youtubeIcon.svg';

export const Footer = () => {
  return (
    <footer>
      <div className='container mx-auto px-[15px] py-[15px]'>
        <div className='flex flex-col items-center gap-y-[12px] lg:flex-row lg:justify-around'>
          <img className='w-[20%] lg:w-[10%] 2xl:w-[5%]' src={logoInkaFooter} alt="LogoInka" />
          <div className='flex items-center w-full lg:w-auto'>
            <img className='w-[5%] 2xl:w-[10%]' src={homeVector} alt="Home" />
            <span className='font-inka font-semibold text-justify text-[12px] lg:text-md ml-2 w-full 2xl:text-[14px]'>
              Jr. Maximo Gorbitz 889 Zona D
            </span>
          </div>
          <div className='flex items-center w-full lg:w-auto'>
            <img className='w-[5%] 2xl:w-[10%]' src={emailVector} alt="Email" />
            <span className='font-inka font-semibold text-[12px] lg:text-md ml-2 2xl:text-[14px]'>
             sellosinka@gmail.com
            </span>
          </div>
          <div className='icons flex items-center justify-center gap-x-4 w-full lg:w-auto'>
            <a href="https://www.facebook.com" target='blank'>
              <img className='w-[45%] 2xl:w-[60%]' src={fbIcon} alt="Facebook" />
            </a>
            <a href="https://instagram.com" target='blank'>
              <img className='w-[45%] 2xl:w-[60%]' src={igIcon} alt="Instagram" />
            </a>
            <a href="https://www.youtube.com" target='blank'>
              <img className='w-[45%] 2xl:w-[60%]' src={ytIcon} alt="Youtube" />
            </a>
          </div>
        </div>
        <div className='text-center'>
          <small  className='text-[50%] 2xl:text-[12px]' >
            Copyright © INKA SAC. Todos los derechos reservados.
          </small>
        </div>
      </div>
    </footer>
  )
}
