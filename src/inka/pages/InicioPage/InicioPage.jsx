import sealWoodImg from '../../../shared/assets/sealOneInicio.png';
import sealAutomaticImg from '../../../shared/assets/sealTwoInicio.png';
import { useLocationInicio } from '../../../hooks/useLocationInicio';

export const InicioPage = () => {

  const {isScrolled, scrollPosition} = useLocationInicio();

  const containerStyle = {
    transform: `translate3d(0, ${scrollPosition * 0.20}px, 0)`,
    opacity: 1 - scrollPosition / 400
  };

  return (
    <>   
      <section className='section-1 h-[667px] 2xl:h-screen bg-mobile lg:bg-inicio  bg-cover'>
        <div className='container flex flex-col justify-center px-[15px] mx-auto text-white h-full relative lg:py-3.5 lg:px-16 2xl:px-0'>
          <div className='title text-center'>
            <h2 className='font-stick text-[30px] lg:text-4xl 2xl:text-6xl font-light' style={containerStyle}>Negocios & Soluciones</h2>
            <h1 className={`font-pro text-[60px] lg:text-7xl 2xl:text-9xl font-bold ${isScrolled ? '' : ''}`} style={containerStyle}  >INKA</h1>
          </div>
          <p className='absolute left-[0] bottom-[11%] md:left-[2%] font-inika font-bold text-center lg:text-lg 2xl:text-2xl absolute lg:bottom-10 lg:left-14 2xl:left-1' style={containerStyle}> Empresa con una rica historia en la industria de sellos personalizados en Lima, Perú.</p>
        </div>
      </section>
      <section className='section-2 bg-white h-[320px] md:h-[250px] bg-section2 bg-cover md:bg-no-repeat 2xl:h-[350px] 2xl:bg-center'>
        <div className='container mx-auto px-[30px] py-[30px] md:py-[30px] 2xl:h-[70%] 2xl:w-[50%] 2xl:flex 2xl:flex-col 2xl:justify-center'>
            <h2 className='text-center font-stick font-bold text-secondary text-[16px] md:text-[18px] lg:text-[20px]'>DEJA TU  HUELLA EN CADA PAGINA</h2>
            <p className='text-justify font-inika text-black font-light text-[14px] mt-[15px] text-[16px] lg:text-[18px] lg:text-center'>Nuestros sellos son mucho más que simples marcas en papel; son expresiones de tu individualidad y estilo. Con una variedad de diseños y opciones de personalización, puedes dejar tu huella única en cada página que toques.</p>
        </div>
      </section>
      <section className='section-3 bg-white'>
        <div className='container mx-auto px-[30px] py-[30px] flex justify-center flex-col gap-y-[30px] lg:flex-row'>
            <div className='sealWood flex justify-center gap-x-[40px] gap-y-4 md:gap-x-[100px] lg:flex-col lg:items-center'>
              <div className='flex flex-col justify-center max-w-[200px] lg:max-w-[350px]'>
                <h3 className='font-pro font-semibold text-black text-[18px] lg:text-xl lg:text-center'>SELLOS DE MADERA</h3>
                <p className='text-black font-inika font-light text-[14px] lg:text-[18px]  '>Los sellos de madera son una fusión perfecta  de tradición y personalización</p>
              </div>
              <img src={sealWoodImg} alt="sealWoodImg" className='w-3/12 lg:w-[50%]' />
            </div>
            <div className='sealAutomaic flex justify-center gap-x-[40px] gap-y-4 md:gap-x-[100px] lg:items-center lg:flex-col'>
              <img src={sealAutomaticImg} alt="sealAutomaticImg" className='w-3/12 lg:w-[50%]' />
              <div className='flex flex-col justify-center max-w-[200px] lg:max-w-[350px]'>
                <h3 className='font-pro font-semibold text-black text-[18px] lg:text-xl lg:text-center'>SELLOS AUTOMATICOS</h3>
                <p className='text-black font-inika font-light text-[14px] lg:text-lg'>Los sellos automáticos son la solución eficiente y moderna para simplificar tus tareas.</p>
              </div>
            </div>
          </div>
      </section>
      <section className='section-4 bg-section4 h-[400px] bg-cover bg-top md:h-[400px]'>
        <div className='container mx-auto px-[30px] py-[30px] justify-end h-[93%] md:h-[80%] md:justify-end flex flex-col 2xl:w-[70%]'>
          <div className='flex flex-col gap-y-[25px]'>
            <h2 className='text-center font-stick font-semibold font-light text-secondary text-[15px] lg:text-[20px]'>SOBRE   NOSOTROS</h2>
            <p className='text-justify text-black font-inika font-light text-[14px] lg:text-[18px]'>Somos una empresa con una larga historia en la industria de sellos personalizados en Lima, Perú. Con 15 años de experiencia, hemos sido un  pilar en la comunidad empresarial, brindando soluciones de calidad y confianza. Siempre esforzandonos a crecer y evolucionar, adaptándonos a las cambiantes necesidades de nuestros clientes y manteniendo nuestro compromiso con la   excelencia en cada sello que producimos. ​</p>
          </div>
        </div>
      </section>
    </>
  )
}

