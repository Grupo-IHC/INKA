import {useNavigate } from 'react-router-dom';
import sealAutomaticImg from '../../../shared/assets/Automatico.png';
import sealWoodImg from '../../../shared/assets/Madera.png';
import tintaIgm from '../../../shared/assets/tinta.png';
import tamponImg from '../../../shared/assets/tampon.png';
import { useInkaStore } from '../../../hooks/useInkaStore';
import { useEffect, useState } from 'react';
import { Loader } from '../../components/Loader';


export const ProductsPage = () => {

  const {getTypeSeals, loading} = useInkaStore();
  const navigate = useNavigate();

  const [productsType, setProductsType] = useState([]);
  const [valueBreakpoint, setValueBreakpoint] = useState(false)
  
  const clickSeeMore = (name) => {
    navigate(`/productos/${name}`)
  }

  useEffect(() => {
    const getTypes = async() => {
      const {data} = await getTypeSeals();
      setProductsType(data);
    }
    getTypes();
  },[])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setValueMenuMobile(true);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
    {loading && <Loader />}
    <section className="section-3 pt-[67px] 2xl:pt-[100px]">
      <div className="container mx-auto px-[15px] py-[15px] 2xl:px-0 flex flex-col">
        {
          productsType.map((product,index) => (
            <div key={index} className={`${index + 1} flex flex-col lg:flex-row max-h-[480px] md:items-center`}>
              <img  
                src={product.name === 'Tinta para sellos' ? tintaIgm : (product.name === 'Tampón para sellos') ? tamponImg :    (product.name === 'Sellos de Madera' ? sealWoodImg : sealAutomaticImg)} alt="SealAutomatic" className='md:w-[50%]  lg:w-[35%] 2xl:w-[25%]' />
              <div className='flex flex-col gap-y-4 md:w-full'>
                <h3 className='text-[16px] font-bold md:text-[20px]'>{product.name}</h3>
                <p className='text-[14px] md:text-[18px]'>{product.description}</p>
                <div className='text-end'>
                  <button 
                    className='btn-send-2'
                    onClick={() => clickSeeMore(product.id)}
                  >
                  Ver más
                  </button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
    </>
  )
}
