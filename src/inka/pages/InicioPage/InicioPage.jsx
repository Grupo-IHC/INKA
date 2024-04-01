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
      <section className='section-1 h-[600px] 2xl:h-screen'>
        <div className='container mx-auto text-white h-full py-3.5 relative px-16 2xl:px-0'>
          <h2 className='absolute left-[30%] top-1/4 font-stick text-4xl 2xl:text-6xl font-light' style={containerStyle}>Negocios & Soluciones</h2>
          <h1 className={`font-pro absolute left-[40%] top-1/3 text-7xl 2xl:text-9xl font-bold ${isScrolled ? '' : ''}`} style={containerStyle}>INKA</h1>
          <p className='font-inika font-bold text-lg 2xl:text-2xl absolute bottom-10 2xl:bottom-40 left-14 2xl:left-1' style={containerStyle}> Empresa con una rica historia en la industria de sellos personalizados en Lima, Perú.</p>
        </div>
      </section>
      <section className='section-2 bg-inicio2 bg-no-repeat bg-center-center bg-cover bg-white relative'>
        <div className='container mx-auto text-white py-16 2xl:py-20 px-16 2xl:px-0'>
          <div className='section-2-1'>
            <h2 className='text-center font-stick font-light text-secondary text-3xl 2xl:text-5xl'>DEJA TU  HUELLA EN CADA PAGINA</h2>
            <p className='text-center font-inika text-black font-light text-lg pt-4 pb-20 2xl:text-xl 2xl:pt-20 2xl:pb-40'>Nuestros sellos son mucho más que simples marcas en papel; son expresiones de tu individualidad y estilo. <br/> Con una variedad de diseños y opciones de personalización, puedes dejar tu huella única en cada página<br/> que toques.</p>
          </div>
          <div className='section-2-2 flex justify-around 2xl:justify-center 2xl:gap-x-32 pt-20 pb-20 2xl:pt-20'>
            <div className='sealWood flex flex-col items-center gap-y-4 2xl:gap-y-10'>
              <h3 className='font-pro font-semibold text-black text-xl 2xl:text-3xl'>SELLOS DE MADERA</h3>
              <p className='text-black font-inika font-light text-lg 2xl:text-xl'>Los sellos de madera son una fusión <br/> perfecta de tradición y personalización</p>
              <div className='w-8/12 2xl:w-11/12'>
                <img src={sealWoodImg} alt="sealWoodImg" />
              </div>
            </div>
            <div className='sealAutomaic flex flex-col items-center gap-y-4 2xl:gap-y-10'>
              <div className='w-8/12 2xl:w-11/12'>
                <img src={sealAutomaticImg} alt="sealAutomaticImg" />
              </div>
              <h3 className='font-pro font-semibold text-black text-xl 2xl:text-3xl'>SELLOS AUTOMATICOS</h3>
              <p className='text-black font-inika font-light text-lg 2xl:text-xl'>Los sellos automáticos son la solución<br/> eficiente y moderna para simplificar tus<br/> tareas.</p>
            </div>
          </div>
          <div className='section-2-3 flex flex-col gap-y-6 mt-52 2xl:gap-y-14'>
            <h2 className='text-center font-stick font-light text-secondary text-3xl 2xl:text-5xl'>SOBRE NOSOTROS</h2>
            <p className='text-center text-black font-inika font-light text-base 2xl:text-xl'>Negocios & Soluciones INKA S.A.C. es una empresa con una rica historia en la industria de sellos personalizados en Lima, Perú. Con 15 años de experiencia, hemos sido un pilar en la comunidad empresarial, brindando soluciones de calidad y confianza a lo largo de nuestra trayectoria. Desde nuestros humildes comienzos, nos hemos esforzado por crecer y evolucionar, adaptándonos a las cambiantes necesidades de nuestros clientes y manteniendo nuestro compromiso con la excelencia en cada sello que producimos. Nuestra historia es un testimonio de dedicación, innovación y la pasión por servir a la comunidad, y esperamos continuar esta tradición durante muchos años más.​</p>
          </div>
        </div>
      </section>
    </>
  )
}
