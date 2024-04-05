import { useState } from "react";
import { useParams } from "react-router-dom"
import { Carrousel } from "./Carrousel";

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

  const [indexLi, setIndexLi] = useState(0);

  const clickIndexLi = (index) => {
    setIndexLi(index);
    console.log(index);
  }
  
  return (
    <section className={`section-3-seal-${id}`}>
      <div className="container mx-auto py-9 px-10 2xl:px-0 flex flex-col">
        <h1 className="font-mont font-ligth text-[30px]">Sellos {id.charAt(0).toUpperCase() + id.slice(1)}</h1>
        <p className="font-mont text-[16px] mt-[20px] mb-[50px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat ipsum numquam explicabo qui sequi unde non aliquam illum nemo? Nesciunt velit illum hic sunt. Ab et officia possimus similique repellat.</p>
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
  )
}
