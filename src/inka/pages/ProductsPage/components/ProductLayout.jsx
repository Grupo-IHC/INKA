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
  }
]


export const ProductLayout = () => {
  const {id} =  useParams();

  const {loading, getTypeSealsById} = useInkaStore();

  const [indexLi, setIndexLi] = useState(0);
  const [productById, setProductById] = useState([])

  const clickIndexLi = (index) => {
    setIndexLi(index);
    console.log(index);
  }

  useEffect(() => {
    const getProductById = async() => {
      const {data} = await getTypeSealsById(id)
      setProductById(data);
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
          <ul className='flex gap-x-2'>
            <li 
              className={`font-bold px-4 py-2 border-b border-white cursor-pointer rounded-3xl border-none ${indexLi === 0 ?'text-white bg-secondary'  : ''}`}
              onClick={() => clickIndexLi(0)}
            >
              TODOS
            </li>
            {
              categorySeals.map((category) => (
                <li
                  key={category.id}
                  className={`font-bold px-4 py-2 border-b border-white cursor-pointer rounded-3xl border-none ${indexLi === category.id ?'text-white bg-secondary'  : ''}`}
                  onClick={() => clickIndexLi(category.id)}
                >
                  {category.name}
                </li>
              ))
            }
          </ul>
        </div>
        <Carrousel />
      </div>
    </section>
    </>
  )
}


