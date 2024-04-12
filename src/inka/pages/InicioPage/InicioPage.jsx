import sealWoodImg from '../../../shared/assets/sealOneInicio.png';
import sealAutomaticImg from '../../../shared/assets/sealTwoInicio.png';
import inkaBack2 from '../../../shared/assets/inkaBack2.png';
import { useLocationInicio } from '../../../hooks/useLocationInicio';
import { useEffect } from 'react';

export const InicioPage = () => {

  const {isScrolled, scrollPosition} = useLocationInicio();

  const containerStyle = {
    transform: `translate3d(0, ${scrollPosition * 0.20}px, 0)`,
    opacity: 1 - scrollPosition / 400
  };

  return (
    <>   
      <section className='section-1 h-[600px] 2xl:h-screen bg-mobile bg-cover'>
        <div className='container flex flex-col justify-center px-[15px] mx-auto text-white h-full relative lg:py-3.5 lg:px-16 2xl:px-0'>
          <div className='title text-center'>
            <h2 className='font-stick text-[30px] lg:text-4xl 2xl:text-6xl font-light' style={containerStyle}>Negocios & Soluciones</h2>
            <h1 className={`font-pro text-[60px] lg:text-7xl 2xl:text-9xl font-bold ${isScrolled ? '' : ''}`} style={containerStyle}  >INKA</h1>
          </div>
          <p className='absolute left-[0] bottom-[15%] font-inika font-bold text-center lg:text-lg 2xl:text-2xl absolute lg:bottom-10 2xl:bottom-40 lg:left-14 2xl:left-1' style={containerStyle}> Empresa con una rica historia en la industria de sellos personalizados en Lima, Perú.</p>
        </div>
      </section>
      <section className='section-2 bg-white min-h-[230px] bg-section2 bg-cover'>
        <div className='container mx-auto px-[30px] py-[15px] lg:py-16 lg:px-16 2xl:py-20 2xl:px-0'>
            <h2 className='text-center font-stick font-bold text-secondary text-[15px] lg:text-3xl 2xl:text-5xl'>DEJA TU  HUELLA EN CADA PAGINA</h2>
            <p className='text-justify font-inika text-black font-light text-[13px] mt-[15px] lg:text-lg 2xl:text-xl'>Nuestros sellos son mucho más que simples marcas en papel; son expresiones de tu individualidad y estilo. Con una variedad de diseños y opciones de personalización, puedes dejar tu huella única en cada página que toques.</p>
        </div>
      </section>
      <section className='section-3 bg-white'>
        <div className='container mx-auto px-[30px] py-[30px] flex justify-center flex-col gap-y-[30px]'>
            <div className='sealWood flex justify-center gap-x-[40px] lg:flex-col gap-y-4 2xl:gap-y-10'>
              <div className='max-w-[200px]'>
                <h3 className='font-pro font-semibold text-black text-[18px] lg:text-xl 2xl:text-3xl'>SELLOS DE MADERA</h3>
                <p className='text-black font-inika font-light text-[14px] leg:text-lg 2xl:text-xl'>Los sellos de madera son una fusión perfecta  de tradición y personalización</p>
              </div>
              <img src={sealWoodImg} alt="sealWoodImg" className='w-3/12' />
            </div>
            <div className='sealAutomaic flex justify-center gap-x-[40px] lg:flex-col gap-y-4 2xl:gap-y-10'>
              <img src={sealAutomaticImg} alt="sealAutomaticImg" className='w-3/12' />
              <div className='max-w-[200px]'>
                <h3 className='font-pro font-semibold text-black text-[18px] lg:text-xl 2xl:text-3xl'>SELLOS AUTOMATICOS</h3>
                <p className='text-black font-inika font-light text-[14px] lg:text-lg 2xl:text-xl'>Los sellos automáticos son la solución eficiente y moderna para simplificar tus tareas.</p>
              </div>
            </div>
          </div>
      </section>
      <section className='section-4  bg-section4 bg-cover bg-center'>
        <div className='container mx-auto px-[30px] py-[30px] h-[100%] justify-end flex flex-col gap-y-6 2xl:gap-y-14'>
          <h2 className='text-center font-stick font-semibold font-light text-secondary text-[15px] lg:text-3xl 2xl:text-5xl'>SOBRE NOSOTROS</h2>
          <p className='text-justify text-black font-inika font-light text-[70%] lg:text-base 2xl:text-xl'>Somos una empresa con una larga historia en la industria de sellos personalizados en Lima, Perú. Con 15 años de experiencia, hemos sido un pilar en la comunidad empresarial, brindando soluciones de calidad y confianza. Siempre esforzandonos a crecer y evolucionar, adaptándonos a las cambiantes necesidades de nuestros clientes y manteniendo nuestro compromiso con la excelencia en cada sello que producimos. ​</p>
          </div>
      </section>
    </>
  )
}

