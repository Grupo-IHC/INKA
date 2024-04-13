import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Carrousel } from "./Carrousel";
import { useInkaStore } from "../../../../hooks/useInkaStore";
import { Loader } from "../../../components/Loader";

const categorySeals = [
  {
    id: 1,
    name: 'Sellos Profesionales',
  },
  {
    id: 2,
    name: 'Sellos Fechadores',
  },
  {
    id: 3,
    name: 'Sellos Circulares',
  },
]


export const ProductLayout = () => {
  const {id} =  useParams();

  const {loading, getTypeSealsById, getProductFilterByCategory} = useInkaStore();

  const [indexLi, setIndexLi] = useState(0);
  const [productById, setProductById] = useState([])
  const [categoryById, setCategoryById] = useState([])
  const [listProductByCategory, setListProductByCategory] = useState([]);

  const clickIndexLi = async(index, categoryId) => {
    setIndexLi(index);
    if (index === 0) {
      const {product} =  await getTypeSealsById(id)
      setListProductByCategory(product);
    }else {
      const product =  await getProductFilterByCategory(id,categoryId);
      setListProductByCategory(product);
    }
  }

  useEffect(() => {
    const getProductById = async() => {
      const {type, category, product} = await getTypeSealsById(id)
      setProductById(type);
      setCategoryById(category);
      setListProductByCategory(product);
    }
    getProductById();
  }, [])
  
  return (
    <>
    {loading && <Loader />}
    <section className={`section-3-seal-${id}`}>
      <div className="container mx-auto py-9 px-10 2xl:px-0 flex flex-col">
        <h1 className="font-mont font-ligth text-[30px]">{productById.name}</h1>
        <p className="font-mont text-[16px] mt-[20px] mb-[50px]">{productById.description}</p>
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
        <Carrousel product={listProductByCategory} />
      </div>
    </section>
    </>
  )
}


