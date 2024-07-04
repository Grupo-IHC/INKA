
import 'animate.css';
import { useSelector } from 'react-redux';
import { ItemsShoppingCart } from './components/ItemsShoppingCart';
import { ResumenTable } from './components/ResumenTable';

export const ShoppingCart = () => {

  const {cartItems} = useSelector(state => state.shoppingCart);


  return (
    <section className="shoppingCart">
      <div className="container mx-auto gap-y-5 lg:gap-y-0 p-[15px] xl:p-[30px] gap-x-4 flex flex-col lg:flex-row">
        {
          cartItems.length > 0 ? 
          (
            <>
              <ItemsShoppingCart/>
              <ResumenTable/>
            </>
          ): 
          <div className='w-full h-[700px] p-[15px] flex flex-col items-center justify-center gap-y-3'>
            <i className="fa-solid fa-cart-plus text-[150px]"></i>
            <h3 className='text-tertiary font-bold text-[20px]'>Tu listado esta vacío</h3>
            <p className='text-center'>Comienza tu primera venta agregando productos a tu carrito de compras.</p>
          </div>
        }
      </div>
    </section>
  )
}

