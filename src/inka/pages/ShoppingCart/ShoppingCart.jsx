import deleteIcon from '../../../shared/assets/deleteIcon.svg';
import imgProduct from '../../../shared/assets/shopingCartProduct.png';
import tintaIcon from '../../../shared/assets/tintaIcon.svg';
import colorIcon from '../../../shared/assets/colorIcon.svg';
import disenioShopping from '../../../shared/assets/disenioShoppingCart.png';
import lessIcon from '../../../shared/assets/lessIcon.svg';
import plusIcon from '../../../shared/assets/plusIcon.svg';
import iconCheck from '../../../shared/assets/iconCheck.svg';
import visaAndMast from '../../../shared/assets/visaAndMasLogo.png';
import plinAndYape from '../../../shared/assets/plinAndYapeIcon.png';

export const ShoppingCart = () => {
  return (
    <section className="shoppingCart">
      <div className="container mx-auto py-9 px-10 2xl:px-0 grid grid-cols-12 gap-x-4">
        <div className="col-span-9 2xl:col-span-8">
          <div className="table w-full bg-[#D9D9D9] py-[10px] px-[10px]">
            <div className="grid grid-cols-12 ">
              <div className="col-span-4 2xl:col-span-4">
                <p>PRODUCTO</p>
              </div>
              <div className="col-span-2 2xl:col-span-2 text-center">
                <p>DISEÑO</p>
              </div>
              <div className="col-span-2 2xl:col-span-2 text-center">
                <p>CANTIDAD</p>
              </div>
              <div className="col-span-2 2xl:col-span-2 text-center">
                <p>PRECIO</p>
              </div>
              <div className="col-span-2 2xl:col-span-2 text-center">
                <p>TOTAL</p>
              </div>
            </div>
          </div>
          <div className="products w-full max-h-[700px] overflow-y-auto	">
            {/* Iterar */}
            <div className="grid grid-cols-12 px-[10px] py-[20px] border-b-2">
              <div className="col-span-4 2xl:col-span-4">
                <div className='grid grid-cols-12'>
                  <div className='col-span-1 flex items-center'>
                    <img src={deleteIcon} className='cursor-pointer' alt="deleteIcon" />
                  </div>  
                  <div className='col-span-4 flex justify-center'>
                    <img src={imgProduct} alt="deleteIcon" />
                  </div> 
                  <div className='col-span-7 flex flex-col justify-center gap-y-4'>
                    <p className='font-mont font-semibold text-[14px] 2xl:text-[16px] text-[#FF7000]'>Sellos 4910</p>
                    <div className='flex items-center gap-x-2'>
                      <span className='font-mont text-[12px] 2xl:text-[14px]'>
                        Color de TINTA : 
                      </span>
                      <img src={tintaIcon} className='w-1/12 2xl:w-auto' alt="tintaIcon" />
                    </div>
                    <div className='flex items-center gap-x-2'>
                      <span className='font-mont text-[12px] 2xl:text-[14px]'>
                        Color de SELLO : 
                      </span>
                      <img src={colorIcon} className='w-2/12 2xl:w-auto' alt="colorIcon" />
                    </div>
                  </div> 
                </div>
              </div>
              <div className="col-span-2 flex justify-center">
                <img src={disenioShopping} className='w-10/12 2xl:w-auto' alt="" />
              </div>
              <div className="col-span-2 2xl:col-span-2 flex items-center justify-center gap-x-2">
                <img src={lessIcon} className='w-2/12 cursor-pointer 2xl:w-auto' alt="less" />
                <input className='max-w-[40px] 2xl:max-w-[50px] text-center' type="text" />
                <img src={plusIcon} className='w-2/12 cursor-pointer 2xl:w-auto' alt="less" />
              </div>
              <div className="col-span-2 2xl:col-span-2 flex justify-center items-center">
                <p className='font-bold font-mont text-[16px] 2xl:text-[18px]'>S/ 15.00</p>
              </div>
              <div className="col-span-2 2xl:col-span-2 flex justify-center items-center">
                <p className='font-bold font-mont text-[16px] 2xl:text-[18px]'>S/ 30.00</p>
              </div>
            </div>         
          </div>
        </div>
        <div className='col-span-3 bg-[#D1C8C1] max-h-[650px] p-[15px]'>
          <h2 className='text-center font-mont text-[18px] 2xl:text-[25px] pb-[10px] border-b-2 border-[#5A5A5A]'>Resumen de pedidos</h2>
          <button className='mt-[10px] text-[16px] 2xl:text-[20px] bg-white flex items-center justify-between w-full py-[7px] px-[15px] rounded-2xl'>
            Retiro en tienda
            <img src={iconCheck} className='w-[15%] 2xl:w-auto' alt="iconCheck" />
          </button>
          <button className='mt-[10px] text-[16px] 2xl:text-[20px] bg-white flex items-center justify-between w-full py-[7px] px-[15px] rounded-2xl'>
            Delivery
            <img src={iconCheck} className='w-[15%] 2xl:w-auto' alt="iconCheck" />
          </button>
          <div className='my-[30px]  2xl:px-[15px] flex flex-col gap-y-5'>
            <div className='flex justify-between'>
              <span className='font-semibold text-[16px] 2xl:text-[20px]'>Articulos</span>
              <span className='font-semibold text-[16px] 2xl:text-[20px]'>2</span>
              <span className='font-semibold text-[16px] 2xl:text-[20px]'>s/ 40.00</span>
            </div>
            <div className='flex justify-between pb-[10px] border-b-2 border-[#5A5A5A]'>
              <span className='font-semibold text-[16px] 2xl:text-[20px]'>Delivery</span>
              <span className='font-semibold text-[16px] 2xl:text-[20px]'>s/ 3.70</span>
            </div>
            <div className='flex justify-between'>
              <span className='font-semibold text-[16px] 2xl:text-[20px]'>Total</span>
              <span className='font-semibold text-[16px] 2xl:text-[20px]'>s/ 43.70</span>
            </div>
          </div>
          <div className='flex flex-col gap-y-2'>
            <h2 className='text-[16px] 2xl:text-[22px] font-semibold'>Metodo de Pago: </h2>
            <button className='mt-[10px] text-[16px] 2xl:text-[20px] bg-white flex items-center justify-between w-full py-[7px] px-[15px] rounded-2xl'>
              <div className='flex gap-x-2 2xl:gap-x-4'>
                <h3>Tarjetas</h3>
                <img src={visaAndMast} className='w-5/12' alt="tarjetas" />
              </div>
              <img src={iconCheck} className='w-[15%] 2xl:w-auto' alt="iconCheck" />
            </button>
            <button className='mt-[10px] text-[16px] 2xl:text-[20px] bg-white flex items-center justify-between w-full py-[7px] px-[15px] rounded-2xl'>
              <div className='flex 2xl:gap-x-4 items-center'>
                <h3>Billteteras</h3>
                <img src={plinAndYape} className='w-5/12' alt="billeteras" />
              </div>
              <img src={iconCheck} className='w-[15%] 2xl:w-auto' alt="iconCheck" />
            </button>
          </div>
          <div className='flex justify-around mt-[30px]'>
            <button className='btn-send-2'>
              Pagar
            </button>
            <button className='btn-send-2'>
              Volver
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

