import ImageGallery from 'react-image-gallery'
import { galleryImages } from '../../../core/galleryImages'
import "react-image-gallery/styles/css/image-gallery.css";

import inicioImg1 from '../../../shared/assets/InicioN1.png';
import inicioImg2 from '../../../shared/assets/InicioN2.png';

export const InicioPage = () => {
  return (
    <>   
      <section className='carrousel'>
        <ImageGallery 
          items={galleryImages}
          showPlayButton={false} 
          showThumbnails={false}
          showFullscreenButton={false}
          showBullets={true}
          autoPlay={true}
          slideInterval={2000}
        />
      </section>
      <section className='home-1 bg-primary'>
        <div className='container mx-auto py-9 flex justify-between'>
          <div className='flex flex-col justify-center'>
            <h1 className='text-secondary font-bold text-2xl py-4'>INKA - DEJA TU  HUELLA EN CADA PAGINA</h1>
            <p className='text-2xl'>Nuestros sellos son mucho más que simples marcas <br/> en papel; son expresiones de tu individualidad y estilo.<br/> Con una variedad de diseños y opciones de<br/> personalización, puedes dejar tu huella única en cada<br/> página que toques.</p>
          </div>
          <div className='flex gap-x-14'>
            <img src={inicioImg1} alt="inicioImg1" />
            <img src={inicioImg2} alt="inicioImg2" />
          </div>
        </div>
      </section>
    </>
  )
}
