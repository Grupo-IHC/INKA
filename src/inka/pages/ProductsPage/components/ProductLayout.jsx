import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Carrousel } from "./Carrousel";
import { useInkaStore } from "../../../../hooks/useInkaStore";
import { Loader } from "../../../components/Loader";

export const ProductLayout = () => {
  const {id} =  useParams();

  const {loading, getTypeSealsById} = useInkaStore();

  const [indexLi, setIndexLi] = useState(0);
  const [productById, setProductById] = useState([]);
  const [categoryById, setCategoryById] = useState([]);
  const [categoryByIndex, setCategoryByIndex] = useState('');

  const clickIndexLi = (index, category='') => {
    setIndexLi(index);  
    setCategoryByIndex(category);
  }

  useEffect(() => {
    const getProductById = async() => {
      const {type, category, product} = await getTypeSealsById(id)
      setProductById(type);
      setCategoryById(category);
    }
    getProductById();
  }, [])
  
  return (
    <>
    {loading && <Loader />}
    <section className={`section-3-seal-${id}`}>
      <div className="container mx-auto py-9 px-10 2xl:px-0 flex flex-col">
        <h1 className="font-mont font-ligth text-[30px]">{productById.name}</h1>
        <p className="font-mont text-[16px] mt-[20px] mb-[50px] text-justify">{productById.description}</p>
        <div className='acordion mb-[50px]'>
          <ul className='flex items-center flex-col flex-wrap max-h-[120px] md:max-h-[80px] lg:flex-row'>
            <li 
              className={`font-bold text-[12px] border-b py-[10px] px-[15px] border-white cursor-pointer rounded-2xl border-none 2xl:text-[16px] ${indexLi === 0 ?'text-white bg-secondary' : ''}`}
              onClick={() => clickIndexLi(0)}
            >
              Todos
            </li>
            {
              categoryById.map((category, index) => (
                <li
                  key={index + 1}
                  className={`font-bold text-[12px] border-b py-[10px] px-[15px] border-white cursor-pointer rounded-2xl border-none 2xl:text-[16px] ${indexLi === index + 1 ?'text-white bg-secondary'  : ''}`}
                  onClick={() => clickIndexLi(index + 1, category.id)}
                >
                  {category.name}
                </li>
              ))
            }
          </ul>
        </div>
        <Carrousel typeProduct={id} category={categoryByIndex} />
      </div>
    </section>
    </>
  )
}


