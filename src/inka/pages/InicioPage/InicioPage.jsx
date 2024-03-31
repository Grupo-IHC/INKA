import ImageGallery from 'react-image-gallery'
import { galleryImages } from '../../../core/galleryImages'
import "react-image-gallery/styles/css/image-gallery.css";



export const InicioPage = () => {
  return (
    <>   
      <section className='start h-[800px] 2xl:h-screen'>
        <div className='container mx-auto text-white h-full py-3.5 relative flex flex-col items-center justify-center px-16 2xl:px-0'>
          <h2 className='font-stick text-4xl 2xl:text-6xl font-light'>Negocios & Soluciones</h2>
          <h1 className='font-pro text-7xl 2xl:text-9xl font-bold'>INKA</h1>
          <p className='font-inika font-bold text-lg 2xl:text-2xl absolute bottom-24 left-14 2xl:left-1'> Empresa con una rica historia en la industria de sellos personalizados en Lima, Perú.</p>
        </div>
      </section>
      <section className='home-1 bg-primary'>
        <div>
          Holaaaaaaaaaa
        </div>
      </section>
    </>
  )
}
