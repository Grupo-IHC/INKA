import plantilla from '../../../../shared/assets/plantilla2.png';


export const LayoutExplorerSeals = () => {
  return (
    <div className="py-7 px-4 rounded-lg grid grid-cols-4 gap-x-20 gap-y-10">
      <div className="grid-cols-1 bg-transparent border-2 rounded-3xl p-4 gap-y-5 flex flex-col">
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
