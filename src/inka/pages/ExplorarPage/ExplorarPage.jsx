import React, { useState } from 'react'
import { LayoutExplorerSeals } from './components/LayoutExplorerSeals';
import arrowRigthIcon from '../../../shared/assets/arrowRigthIcon.png';
import arrowDownIcon from '../../../shared/assets/arrowDownIcon.png';

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

  const [indexLi, setIndexLi] = useState('');
  const [valueAcordion, setValueAcordion] = useState(false)

  const clickIndexLi = (index) => {
    setIndexLi(index);
    console.log(index);
  }

  const clickArrow = () => {
    setValueAcordion(!valueAcordion);
  }
 
  return (
    <section className='section-2'>
      <div className='container mx-auto py-9 flex justify-between'>
        <div className='acordion w-96'>
          <button 
            className='w-full text-start flex items-center justify-between px-4 py-2 bg-primary'
            onClick={clickArrow} 
          >
            <span className='font-bold text-2xl'>Categoría</span>
            <img 
              src={valueAcordion ? arrowRigthIcon : arrowDownIcon} 
              alt="arrow"
            />
          </button>
          {
            valueAcordion && (
              <ul className='bg-primary'>
              {
                categorySeals.map((category) => (
                  <li
                    key={category.id}
                    className={`font-bold px-4 py-2 border-b border-white cursor-pointer ${indexLi === category.id ? 'text-cuaternary'  : ''}`}
                    onClick={() => clickIndexLi(category.id)}
                  >
                    {category.name}
                  </li>
                ))
              }
              </ul>
            )
          }
        </div>
        <LayoutExplorerSeals/>
      </div>
    </section>
  )
}
