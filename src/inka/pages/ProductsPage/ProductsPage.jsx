import {useNavigate } from 'react-router-dom';
import sealAutomaticImg from '../../../shared/assets/Automatico.png';
import sealWoodImg from '../../../shared/assets/Madera.png';


export const ProductsPage = () => {

  const navigate = useNavigate();
  
  const clickSeeMore = (name) => {
    navigate(`/productos/${name}`)
  }

  return (
    <section className="section-3">
      <div className="container mx-auto py-9 px-10 2xl:px-0 flex flex-col gap-y-16">
        <div className="seal_automatics_container flex gap-x-10 2xl:gap-x-56">
          <img className='rounded-xl w-5/12' src={sealAutomaticImg} alt="SealAutomatic" />
          <div className='flex flex-col gap-y-4 2xl:gap-y-14'>
            <h3 className='text-[20px] 2xl:text-[30px]'>Sellos Automaticos</h3>
            <p className='text-[18px] 2xltext-2xl'>Los sellos automáticos son la solución eficiente y moderna para simplificar tus tareas. Diseñados para comodidad y rapidez, estos sellos ofrecen una forma precisa y sin esfuerzo de dejar tu huella en documentos y correspondencia.</p>
            <div className='text-end'>
              <button 
                className='btn-send-2'
                onClick={() => clickSeeMore('automaticos')}
              >
                Ver más
              </button>
            </div>
          </div>
        </div>
        <div className="seal_automatics_container flex gap-x-10 2xl:gap-x-56">
          <div className='flex flex-col gap-y-4 2xl:gap-y-14'>
            <h3 className='text-[20px] 2xl:text-[30px]'>Sellos Madera</h3>
            <p className='text-[18px] 2xltext-2xl'>Los sellos de madera son una fusión perfecta de tradición y personalización. Confeccionados con madera de calidad, estos sellos capturan tu estilo único y aportan un toque de encanto artesanal</p>
            <div className='text-end'>
              <button
               className='btn-send-2'
               onClick={() => clickSeeMore('madera')}
              >
                Ver más
              </button>
            </div>
          </div>
          <img className='rounded-xl w-5/12' src={sealWoodImg} alt="SealAutomatic" />
        </div>
      </div>
    </section>
  )
}
