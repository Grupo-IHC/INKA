import { useState } from 'react'
import { LayoutExplorerSeals } from './components/LayoutExplorerSeals';

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

export const ExplorarPage = () => {

  const [indexLi, setIndexLi] = useState(0);

  const clickIndexLi = (index) => {
    setIndexLi(index);
    console.log(index);
  }
 
  return (
    <section className='section-2'>
      <div className='container mx-auto py-9 px-10 2xl:px-0'>
        <div className='acordion'>
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
        <LayoutExplorerSeals/>
      </div>
    </section>
  )
}
