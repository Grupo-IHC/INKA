import plantilla from '../../../../shared/assets/plantillaP1.png';


export const LayoutExplorerSeals = () => {
  return (
    <div className="py-7 px-4 bg-primary rounded-lg w-8/12 grid grid-cols-3 gap-x-4 gap-y-4">
      <div className="grid-cols-1 bg-white rounded-lg p-4 flex flex-col gap-y-5">
        <img className='w-full' src={plantilla} alt="plantilla" />
        <div>
          <p className='font-pro text-lg'>SELLO 4911</p>
          <p className='font-pro font-bold text-tertiary'>41 x 24 mm</p>
        </div>
        <div className='text-center'>
          <button className='btn-send'>
            DESCARGAR
          </button>
        </div>
      </div>
      
    </div>
  )
}
