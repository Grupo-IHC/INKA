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
    <section className="section-3 bg-products bg-center bg-no-repeat bg-cover">
      <div className="container mx-auto py-9 px-10 2xl:px-0 flex flex-col gap-y-16">
        {
          productsType.map((product,key) => (
            <div className={`${key + 1} flex max-h-[339px]`}>
              { key % 2 !== 0 ? 
               <>
                 <div className='flex flex-col gap-y-4 2xl:gap-y-14'>
                  <h3 className='text-[20px] 2xl:text-[30px]'>{product.name}</h3>
                  <p className='text-[18px] 2xltext-2xl'>{product.description}</p>
                  <div className='text-end'>
                    <button 
                      className='btn-send-2'
                      onClick={() => clickSeeMore('automaticos')}
                    >
                      Ver más
                    </button>
                  </div>
                 </div>
                 <img  
                  src={product.name === 'Tinta para sellos' ? tintaIgm : (product.name === 'Tampón para sellos') ? tamponImg : (product.name === 'Sellos de Madera' ? sealWoodImg : sealAutomaticImg)} alt="SealAutomatic" />
               </>
               :
               <>
                <img  
                  src={product.name === 'Tinta para sellos' ? tintaIgm : (product.name === 'Tampón para sellos') ? tamponImg : (product.name === 'Sellos de Madera' ? sealWoodImg : sealAutomaticImg)} alt="SealAutomatic" />
                <div className='flex flex-col gap-y-4 2xl:gap-y-14'>
                <h3 className='text-[20px] 2xl:text-[30px]'>{product.name}</h3>
                <p className='text-[18px] 2xltext-2xl'>{product.description}</p>
                <div className='text-end'>
                  <button 
                    className='btn-send-2'
                    onClick={() => clickSeeMore('automaticos')}
                  >
                    Ver más
                  </button>
                </div>
              </div>
               </>
              }
            </div>
          ))
        }
      </div>
    </section>
    </>
  )
}
