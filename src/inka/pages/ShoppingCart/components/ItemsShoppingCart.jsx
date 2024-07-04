import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react"

import { closeModal, openModal, selectTypeModal } from "../../../../store/modal/modalSlice";

import arrowDown from '../../../../shared/assets/arrowDown.svg';
import arrowRigth from '../../../../shared/assets/arrowRIgth.svg';
import lessIcon from '/src/shared/assets/lessIcon.svg';
import plusIcon from '/src/shared/assets/plusIcon.svg';
import deleteIcon from '/src/shared/assets/deleteIcon.svg';
import { Modal } from "../../../components/Modal";
import { aumentQuantity, decrementQuantity, deleteProduct } from "../../../../store/product/shoppingCartSlice";

export const ItemsShoppingCart = () => {

  const [showTableProduct, setShowTableProduct] = useState(true);

  const [productImage, setProductImage] = useState('');

  const {cartItems} = useSelector(state => state.shoppingCart);

  const {modalIsOpen, typeModal} = useSelector(state => state.modal);

  const dispatch = useDispatch();
  
  const toggleShowTableProduct = () => {
    setShowTableProduct(!showTableProduct);
  }

  const showDesign = (id) => {
    if(cartItems[id].design) {
      dispatch(openModal());
      dispatch(selectTypeModal('show-design'));
      setProductImage(cartItems[id].design);
    }
    return;
  }

  const deleteItem = (id) => {
    dispatch(deleteProduct({id}));
  }

  const addItem = (id) => {
    dispatch(aumentQuantity({id}));
  }

  const decrementItem = (id) => {
    dispatch(decrementQuantity({id}));
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setShowTableProduct(true);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  

  return (
    <>
    {
      modalIsOpen && typeModal==='show-design' && (
        <Modal>
          <i 
            className="fa-solid fa-xmark text-[20px] text-end mb-2"
            onClick={() => dispatch(closeModal())}
          ></i>
          <img src={productImage} alt="seal-img"/>
        </Modal>
      )
    }
    <div className="flex-1">
      <div className="col-span-1 py-[15px] px-[10px] bg-secondary rounded-lg flex items-center justify-between lg:hidden">
        <h3 className='text-white font-bold'>PRODUCTOS</h3>
        <img 
          src={showTableProduct ? arrowDown : arrowRigth} 
          alt="arrow-icon" 
          onClick={toggleShowTableProduct}
        />
      </div>
      {
        showTableProduct && 
        (
          cartItems.length > 0 ? 
          (
            <>
              <div className="Header-table hidden lg:grid lg:grid-cols-12 2xl:grid-cols-11 lg:bg-[#D9D9D9] lg:p-[10px] lg:flex-1">
                <span className="col-span-4 2xl:col-span-3 text-center">PRODUCTO</span>
                <span className="col-span-2 text-center">DISEÑO</span>
                <span className="col-span-2 text-center">CANTIDAD</span>
                <span className="col-span-2 text-center">PRECIO</span>
                <span className="col-span-2 text-center">TOTAL</span>
              </div>
              <div className={`body-table animate__animated ${showTableProduct ? 'animate__fadeInDown' : 'animate__fadeOutLeftBig'} bg-[#FFFFFF] lg:flex-1`}>
                {
                  cartItems.map((item, index) => (
                    <div key={index} className="grid grid-cols-2 p-[8px] rounded-lg border-2 gap-x-2 mt-3 lg:grid-cols-12 lg:p-[15px] 2xl:grid-cols-11 relative">
                      <div className="col-span-1 flex flex-col justify-between items-center lg:flex-row lg:col-span-4 2xl:col-span-3 lg:gap-x-2">
                        <img src={deleteIcon} alt="delete-icon" width={18} className="absolute top-2 right-2 lg:relative lg:top-0 lg:right-0 cursor-pointer" onClick={() => deleteItem(item.id)} />
                        <img src={item.img} alt="seal-img" className="w-[120px] lg:w-[85px] xl:w-[100px]" />
                        <div className="flex gap-x-2 max-w-full items-center mt-2 lg:hidden">
                          <img src={lessIcon} alt="less-icon" width={25} className="cursor-pointer" onClick={() => decrementItem(item.id)}/>
                          <input 
                            type="text" 
                            className="flex-1 min-w-0 border-2 border-gray rounded-lg text-center" 
                            disabled={true}
                            value={item.quantity}
                          />
                          <img src={plusIcon} alt="plus-icon" width={25} className="cursor-pointer" onClick={() =>addItem(item.id) }/>
                        </div>
                        <div className="hidden lg:block lg:flex-1">
                          <h3 className="font-semibold text-[14px] text-[#FF7000] lg:text-[16px]">{item.name}</h3>
                          <div className="flex items-center justify-between lg:justify-start">
                            <span className='text-[12px] xl:text-[14px]'>
                              COLOR: {item.color}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-1 flex flex-col gap-y-2 justify-between lg:hidden">
                        <h3 className="font-semibold text-[14px] text-[#FF7000]">{item.name}</h3>
                        <div className="flex items-center justify-between">
                          <span className='text-[12px] font-bold'>
                            COLOR: 
                          </span>
                          <span className="text-[16px]">
                            {item.color}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className='text-[12px] font-bold'>
                            PRECIO UNI.: 
                          </span>
                          <span className="text-[16px]">
                            S/ {item.price.toFixed(2)}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className='text-[12px] font-bold'>
                            TOTAL: 
                          </span>
                          <span className="text-[16px]">
                            S/ {item.total.toFixed(2)}
                          </span>
                        </div>
                        <button
                          type="button"
                          className="bg-secondary text-white rounded-lg px-2 py-1 mt-2 w-full"
                          onClick={() => showDesign(index)}
                        >
                          {item.design ? 'VER DISEÑO' : 'NO HAY DISEÑO'}
                        </button>
                      </div>
                      <div className="hidden lg:flex lg:col-span-2 lg:p-2 lg:justify-center lg:items-center">
                        {
                          item.design ? 
                          <img src={item.design} alt="design-img" className="max-h-[93px] min-h-[93px]" /> : <span className="rounded-2xl bg-[#D1C8C1] p-[10px] text-[#7A3906] font-bold text-center text-[12px] xl:max-w-[100px] 2xl:text-[16px] 2xl:max-w-[144px]">NO HAY DISEÑO</span>
                        }
                      </div>
                      <div className="hidden lg:flex lg:gap-x-2 lg:items-center lg:col-span-2 lg:p-2">
                        <img src={lessIcon} alt="less-icon" width={25} className="cursor-pointer" onClick={() => decrementItem(item.id)}/>
                        <input 
                          type="text" 
                          className="flex-1 min-w-0 border-2 border-gray rounded-lg text-center lg:h-min" 
                          disabled={true}
                          value={item.quantity}
                        />
                        <img src={plusIcon} alt="plus-icon" width={25} className="cursor-pointer" onClick={() => addItem(item.id)}/>
                      </div>
                      <span className="hidden lg:flex lg:justify-center lg:col-span-2 text-center items-center font-bold text-[16px]">S/ {item.price.toFixed(2)}</span>
                      <span className="hidden lg:flex lg:justify-center lg:col-span-2 text-center items-center font-bold text-[16px]">S/ {item.total.toFixed(2)}</span>
                    </div>
                  ))
                }
              </div>
            </>
          ) : null
        )
      }
    </div>
    </>
  )
}
