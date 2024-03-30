import sealAutomaticImg from '../../../shared/assets/Automatico.png';
import sealWoodImg from '../../../shared/assets/Madera.png';


export const ProductsPage = () => {
  return (
    <section className="section-3">
      <div className="container mx-auto py-9 flex flex-col gap-y-16">
        <div className="seal_automatics_container flex gap-x-56">
          <img className='rounded-xl' src={sealAutomaticImg} alt="SealAutomatic" />
          <div className='flex flex-col justify-between'>
            <h3 className='text-4xl'>Sellos Automaticos</h3>
            <p className='text-2xl'>Los sellos automáticos son la solución eficiente y moderna para simplificar tus tareas. Diseñados para comodidad y rapidez, estos sellos ofrecen una forma precisa y sin esfuerzo de dejar tu huella en documentos y correspondencia.</p>
            <div className='text-end'>
              <button className='btn-send-2'>
                Ver más
              </button>
            </div>
          </div>
        </div>
        <div className="seal_automatics_container flex gap-x-56">
          <div className='flex flex-col justify-between'>
            <h3 className='text-4xl'>Sellos Madera</h3>
            <p className='text-2xl'>Los sellos de madera son una fusión perfecta de tradición y personalización. Confeccionados con madera de calidad, estos sellos capturan tu estilo único y aportan un toque de encanto artesanal</p>
            <div className='text-end'>
              <button className='btn-send-2'>
                Ver más
              </button>
            </div>
          </div>
          <img className='rounded-xl' src={sealWoodImg} alt="SealAutomatic" />
        </div>
      </div>
    </section>
  )
}
