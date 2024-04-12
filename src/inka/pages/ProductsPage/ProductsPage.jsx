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
    console.log(productsType);
  }, [productsType])

  return (
    <>
    {loading && <Loader />}
    <section className="section-3 bg-products bg-center bg-no-repeat bg-cover pt-[67px] 2xl:pt-[100px]">
      <div className="container mx-auto px-[15px] py-[15px] 2xl:px-0 flex flex-col">
        {
          productsType.map((product,index) => (
            <div key={index} className={`${index + 1} flex flex-col lg:flex-row max-h-[480px] md:items-center`}>
              {/* { (index + 1) % 2 === 0 ? 
               <>
                 <div className='flex flex-col gap-y-4 2xl:gap-y-14'>
                  <h3 className='text-[20px] 2xl:text-[30px]'>{product.name}</h3>
                  <p className='text-[18px] 2xltext-2xl'>{product.description}</p>
                  <div className='text-end'>
                    <button 
                      className='btn-send-2'
                      onClick={() => clickSeeMore(product.id)}
                    >
                      Ver más
                    </button>
                  </div>
                 </div>
                 <img  
                  src={product.name === 'Tinta para sellos' ? tintaIgm : (product.name === 'Tampón para sellos') ? tamponImg : (product.name === 'Sellos de Madera' ? sealWoodImg : sealAutomaticImg)} alt="SealAutomatic"\ />
               </>
               : */}
               <>
                <img  
                  src={product.name === 'Tinta para sellos' ? tintaIgm : (product.name === 'Tampón para sellos') ? tamponImg : (product.name === 'Sellos de Madera' ? sealWoodImg : sealAutomaticImg)} alt="SealAutomatic" className='md:w-[50%]' />
                <div className='flex flex-col gap-y-4 2xl:gap-y-14 md:w-full'>
                <h3 className='text-[16px] font-bold 2xl:text-[30px]'>{product.name}</h3>
                <p className='text-[14px] 2xltext-2xl'>{product.description}</p>
                <div className='text-end'>
                  <button 
                    className='btn-send-2'
                    onClick={() => clickSeeMore(product.id)}
                  >
                    Ver más
                  </button>
                </div>
              </div>
               </>
              {/* } */}
            </div>
          ))
        }
      </div>
    </section>
    </>
  )
}
