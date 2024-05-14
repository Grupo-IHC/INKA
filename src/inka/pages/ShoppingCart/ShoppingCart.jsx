import deleteIcon from '../../../shared/assets/deleteIcon.svg';
import colorIcon from '../../../shared/assets/colorIcon.svg';
import arrowRigth from '../../../shared/assets/arrowRIgth.svg';
import arrowDown from '../../../shared/assets/arrowDown.svg';
import lessIcon from '../../../shared/assets/lessIcon.svg';
import plusIcon from '../../../shared/assets/plusIcon.svg';
import iconCheck from '../../../shared/assets/iconCheck.svg';
import visaAndMast from '../../../shared/assets/visaAndMasLogo.png';
import plinAndYape from '../../../shared/assets/plinAndYapeIcon.png';
import { useState } from 'react';
import { ModalDelivery } from './components/ModalDelivery';

import 'animate.css';
import { useDispatch, useSelector } from 'react-redux';
import { aumentQuantity, decrementQuantity, deleteProduct, restartShoppingCart } from '../../../store/product/shoppingCartSlice';
import { Modal } from '../../components/Modal';
import { ModalRetiro } from './components/ModalRetiro';
import { useInkaStore } from '../../../hooks/useInkaStore';
import { useAuthStore } from '../../../hooks/useAuthStore';
import { useNavigate } from 'react-router-dom';

export const ShoppingCart = () => {

  const {cartItems, cartTotalQuantity, cartTotalAmount} = useSelector(state => state.shoppingCart);
  const {id, status} = useAuthStore();
  const {payCartShopping} = useInkaStore();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState('');
  const [selectPayment, setSelectPayment] = useState('')
  const [showModalDelivery, setShowModalDelivery] = useState(false);
  const [showModalRetiro, setShowModalRetiro] = useState(false);
  const [showProducts, setShowProducts] = useState(true);
  const [showResumen, setShowResumen] = useState(true);
  const [showDesingMobile, setShowDesingMobile] = useState(false);
  const [index, setIndex] = useState('');
  const [priceDelivery, setPriceDelivery] = useState(0);
  const [infoContact, setInfoContact] = useState({
    contact : '',
    contact_dni : '',
    address: '',
  })

  const handleOption = (option) => {
    setSelectedOption(option);
    if(option === 'delivery') {
      setShowModalDelivery(true);
    } else {
      setShowModalRetiro(true);
    }
  }

  const onClose = () => {
    setShowDesingMobile(false);
  }

  const emptyListProducts = () => {
    return(
      <div className='w-full h-[500px] p-[15px] flex flex-col items-center justify-center gap-y-3'>
        <i className="fa-solid fa-cart-plus text-[150px]"></i>
        <h3 className='text-tertiary font-bold text-[20px]'>Tu listado esta vacío</h3>
        <p className='text-center'>Comienza tu primera venta agregando productos a tu carrito de compras.</p>
      </div>
    )
  }

  const DesingMobile = () => {
    return(
      <Modal onClose={onClose}>
        <img src={cartItems[index].design} alt="designMobile" />
      </Modal>
    )
  }

  const onCloseModalDelivery = () => {
    setShowModalDelivery(false);
  }

  const onCloseModalRetiro = () => {
    setShowModalRetiro(false);
  }

  const handleClickDesignMobile = (index) => {
    setShowDesingMobile(true);
    setIndex(index);
  }

  const payShopping = async() => {

    if(status === "not-authenticated") {
      navigate("/auth/login")
      return;
    };

    const data = {
      order_detail: cartItems.map(item => ({
        product: item.id,
        design_image: item.design,
        price: item.total,
        quantity: item.quantity,
      })),
      client: id,
      price_total: cartTotalAmount+priceDelivery,
      address: infoContact.address,
      contact: infoContact.contact,
      contact_dni: infoContact.contact_dni,
      quantity: cartTotalQuantity,
      type_delivery: selectedOption === 'delivery' ? 'bbb7dafa-45f6-4ec3-87d7-520624f58770' : '0c209139-9381-4a4e-b4de-7b9135c3006d',
      method_payment: selectPayment === 'tarjeta' ? 'caa5ad1e-5c83-440b-a232-80fb6b01f28c' : '918121ee-551b-4618-b0c9-0f9cf46898ec',
    }

    try {
      const response = await payCartShopping(data);
      if(response) {
        dispatch(restartShoppingCart())
      }
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      {showModalDelivery && <ModalDelivery onClose={onCloseModalDelivery} priceDelivery={setPriceDelivery} contact={setInfoContact} />}
      {showModalRetiro && <ModalRetiro onClose={onCloseModalRetiro} contact={setInfoContact} />}
      {showDesingMobile && DesingMobile()}
      <section className="shoppingCart lg:grow lg:flex lg:items-center">
        <div className="container mx-auto gap-y-5 lg:gap-y-0 p-[15px] 2xl:px-0 grid grid-cols-12 gap-x-4">
          <div className="col-span-12 lg:col-span-8 flex flex-col gap-y-2 lg:block">
            <div className="table hidden lg:block w-full bg-[#D9D9D9] py-[10px] px-[10px]">
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
            <div className="products-desktop hidden lg:block w-full max-h-[700px] overflow-y-auto	">
            {/* Iterar */}
              {
                cartItems.map((product, index) => (
                <div key={index} className="grid grid-cols-12 px-[10px] py-[20px] border-b-2">
                  <div className="col-span-4 2xl:col-span-4">
                    <div className='grid grid-cols-12'>
                      <div className='col-span-1 flex items-center'>
                        <img 
                          src={deleteIcon} 
                          className='cursor-pointer' 
                          alt="deleteIcon" 
                          onClick={() => dispatch(deleteProduct(cartItems[index]))} />
                      </div>  
                      <div className='col-span-5 flex justify-center'>
                        <img src={product.img} alt="deleteIcon" />
                      </div> 
                      <div className='col-span-6 flex flex-col justify-center gap-y-4'>
                        <p className='font-mont font-semibold text-[14px] 2xl:text-[16px] text-[#FF7000]'>{product.name}</p>
                        <div className='flex items-center gap-x-2'>
                          <span className='font-mont text-[12px] 2xl:text-[14px]'>
                            Color: 
                          </span>
                          <span className='font-mont text-[12px] 2xl:text-[14px]'>
                            {product.color} 
                          </span>
                          {/* <img src={colorIcon} className='w-2/12 2xl:w-auto' alt="colorIcon" /> */}
                        </div>
                      </div> 
                    </div>
                  </div>
                  <div className="col-span-2 flex justify-center items-center">
                    {
                      product.design 
                      ? <img src={product.design} alt="" /> 
                      : <span className='rounded-2xl bg-[#D1C8C1] p-[10px] text-[#7A3906] font-bold text-center text-[12px] xl:max-w-[100px] 2xl:text-[16px] 2xl:max-w-[144px]'>
                          NO HAY DISEÑO
                        </span> 
                    }
                  </div>
                  <div className="col-span-2 2xl:col-span-2 flex items-center justify-center gap-x-2">
                    <img 
                      src={lessIcon} 
                      className='w-2/12 cursor-pointer 2xl:w-auto' 
                      alt="less" 
                      onClick={() => dispatch(decrementQuantity(cartItems[index]))}
                    />
                    <input 
                      name="quantity"
                      className='max-w-[40px] border-2 border-black rounded-lg text-center' 
                      type="number" 
                      inputMode="numeric" 
                      maxLength="3" 
                      value={product.quantity}
                      disabled={true}
                    />
                    <img 
                      src={plusIcon} 
                      className='w-2/12 cursor-pointer 2xl:w-auto' 
                      alt="less" 
                      onClick={() => dispatch(aumentQuantity(cartItems[index]))}
                    />
                  </div>
                  <div className="col-span-2 2xl:col-span-2 flex justify-center items-center">
                    <p className='font-bold font-mont text-[16px] 2xl:text-[18px]'>S/ {(product.price).toFixed(2)}</p>
                  </div>
                  <div className="col-span-2 2xl:col-span-2 flex justify-center items-center">
                    <p className='font-bold font-mont text-[16px] 2xl:text-[18px]'>S/ {(product.total).toFixed(2)}</p>
                  </div>
                </div>
                ))
              }         
            </div>
            <div className='py-[15px] px-[10px] bg-secondary rounded-lg flex items-center justify-between lg:hidden'>
              <h3 className='text-white font-bold'>PRODUCTOS</h3>
              <img src={showProducts ? arrowDown : arrowRigth} 
                alt="arrow" 
                onClick={() => setShowProducts(!showProducts)}
              />
            </div>
            {
              showProducts &&
                (cartItems.length === 0 ?
                  emptyListProducts()
                  :
                  <div className='products-mobile w-full flex flex-col gap-y-3 max-h-[700px] overflow-y-auto lg:hidden'>
                    { 
                      cartItems.map((item, index) => (
                        <div key={index} className='grid grid-cols-12 border-2 rounded-2xl p-[15px] gap-x-4 relative'>
                          <img src={deleteIcon} alt="deleteIcon" className='absolute right-2 top-2' onClick={() => dispatch(deleteProduct(cartItems[index]))} />
                          <div className='col-span-5 flex flex-col justify-end items-center gap-y-10'>
                            <img src={item.img} alt="ProductImage" className='md:w-[50%]' />
                            <div className="flex items-center justify-center gap-x-2">
                              <img src={lessIcon} 
                                className='cursor-pointer' 
                                alt="less" 
                                onClick={() => dispatch(decrementQuantity(cartItems[index]))}
                                // onClick={decrementQuantity}
                              />
                              <input 
                                name="quantity"
                                className='max-w-[40px] border-2 border-black rounded-lg text-center' 
                                type="number" 
                                inputMode="numeric" 
                                maxLength="3" 
                                value={item.quantity}
                                disabled={true}
                              />
                              <img src={plusIcon} 
                                className='cursor-pointer' 
                                alt="less" 
                                onClick={() => dispatch(aumentQuantity(cartItems[index]))}
                              />
                            </div>
                          </div>
                          <div className='col-span-7 gap-y-3 flex flex-col justify-between'>
                            <p className='font-semibold text-[14px] text-[#FF7000]'>Sellos 4910</p>
                            <div className='flex items-center justify-between gap-x-2'>
                              <span className='text-[12px] font-bold'>
                                COLOR: 
                              </span>
                              {/* <img src={colorIcon} className='' alt="colorIcon" /> */}
                              <span>
                                {item.color}
                              </span>
                            </div>
                            <div className='flex items-center justify-between gap-x-2'>
                              <span className='text-[12px] font-bold'>
                                PRECIO UNI.: 
                              </span>
                              <span className='text-[16px]'>
                                S/ {(item.price.toFixed(2))}
                              </span>
                            </div>
                            <div className='flex items-center justify-between gap-x-2'>
                              <span className='text-[12px] font-bold'>
                                TOTAL: 
                              </span>
                              <span className='text-[16px]'>
                                S/ {(item.total).toFixed(2)}
                              </span>
                            </div>
                            {
                              item.design 
                              ? 
                              <button 
                              className='bg-secondary text-white text-[12px] font-mont font-bold rounded-2xl cursor-pointer py-[10px]'
                              onClick={() => handleClickDesignMobile(index)}
                              >
                                DISEÑO
                              </button>
                              : <span className='rounded-2xl bg-secondary py-[10px] text-white font-bold text-center text-[12px] xl:text-[16px] xl:max-w-[144px]'>
                                  NO HAY DISEÑO
                                </span> 
                            }
                          </div>
                        </div>
                      ))
                    }
                  </div>
                )
            }
          </div>
          <div className='col-span-12 lg:col-span-4 flex flex-col lg:block gap-y-2'>
            <div className='py-[15px] px-[10px] bg-secondary rounded-lg flex items-center justify-between lg:hidden'>
              <h3 className='text-white font-bold'>RESUMEN</h3>
              <img src={showResumen ? arrowDown : arrowRigth} 
                alt="arrow" 
                onClick={() => setShowResumen(!showResumen)}
              />
            </div>
            {
              showResumen &&
              <div className='rounded-2xl bg-[#D1C8C1] max-h-[650px] p-[15px] 2xl:max-h-[800px]'>
                <h2 className='text-center font-mont text-[18px] 2xl:text-[25px] pb-[10px] border-b-2 border-[#5A5A5A]'>Resumen de pedidos</h2>
                <button 
                  className={`mt-[10px] font-mont text-[16px] 2xl:text-[20px] flex items-center justify-between w-full py-[7px] px-[15px] rounded-2xl ${selectedOption === 'retiro' ? 'bg-[#31241E] text-white' : 'bg-white text-black'}`}
                  onClick={() => {handleOption('retiro'), setPriceDelivery(0)}}
                >
                  Retiro en tienda
                  <img src={iconCheck} alt="iconCheck" />
                </button>
                <button 
                  className={`mt-[10px] font-mont text-[16px] 2xl:text-[20px] flex items-center justify-between w-full py-[7px] px-[15px] rounded-2xl ${selectedOption === 'delivery' ? 'bg-[#31241E] text-white' : 'bg-white text-black'}`}
                  onClick={() => handleOption('delivery')}
                 >
                  Delivery
                  <img src={iconCheck} alt="iconCheck" />
                </button>
                <div className='my-[30px]  2xl:px-[15px] flex flex-col gap-y-5'>
                  <div className='flex justify-between'>
                    <span className='font-semibold text-[16px] 2xl:text-[20px]'>Articulos</span>
                    <span className='font-semibold text-[16px] 2xl:text-[20px]'>{cartTotalQuantity}</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='font-semibold text-[16px] 2xl:text-[20px]'>Delivery</span>
                    <span className='font-semibold text-[16px] 2xl:text-[20px]'>s/ {priceDelivery}</span>
                  </div>
                  <div className='flex justify-between pb-[10px] border-b-2 border-[#5A5A5A]'>
                    <span className='font-semibold text-[16px] 2xl:text-[20px]'>Subtotal</span>
                    <span className='font-semibold text-[16px] 2xl:text-[20px]'>S/ {cartTotalAmount}</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='font-semibold text-[16px] 2xl:text-[20px]'>Total</span>
                    <span className='font-semibold text-[16px] 2xl:text-[20px]'>s/ {cartTotalAmount+priceDelivery}</span>
                  </div>
                </div>
                <div className='flex flex-col gap-y-2'>
                  <h2 className='text-[16px] 2xl:text-[22px] font-semibold'>Metodo de Pago: </h2>
                  <button 
                  className={`mt-[10px] text-[16px] 2xl:text-[20px] flex items-center justify-between w-full py-[7px] px-[15px] rounded-2xl max-h-[45px] ${selectPayment === 'tarjeta' ? 'bg-[#31241E] text-white' : 'bg-white text-black'}` }
                  onClick={() => setSelectPayment('tarjeta')}>
                    <div className='flex items-center gap-x-2'>
                      <span className='font-mont'>Tarjetas</span>
                      <img src={visaAndMast} className='w-[40%]' alt="tarjetas" />
                    </div>
                    <img src={iconCheck} alt="iconCheck" />
                  </button>
                  <button 
                  className={`mt-[10px] text-[16px] 2xl:text-[20px] flex items-center justify-between w-full py-[7px] px-[15px] rounded-2xl max-h-[45px] ${selectPayment === 'billetera' ? 'bg-[#31241E] text-white' : 'bg-white text-black'}`}
                  onClick={() => setSelectPayment('billetera')}>
                    <div className='flex items-center gap-x-2'>
                      <span className='font-mont'>Billeteras</span>
                      <img src={plinAndYape} className='w-[35%]' alt="billeteras" />
                    </div>
                    <img src={iconCheck} alt="iconCheck" />
                  </button>
                </div>
                <div className='flex justify-between mt-[30px]'>
                  <button 
                    className={`btn-send-2 disabled:opacity-75`}
                    onClick={payShopping}
                    disabled={(cartItems.length === 0 || selectedOption === '' || selectPayment === '' ) ? true : false}
                  >
                    Pagar
                  </button>
                  <button className='btn-send-2'>
                    Volver
                  </button>
                </div>
              </div>
            }
          </div>
        </div>
      </section>
    </>
  )
}

