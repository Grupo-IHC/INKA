import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ModalDelivery } from "./ModalDelivery";
import { ModalRetiro } from "./ModalRetiro";
import { openModal, selectTypeModal } from "../../../../store/modal/modalSlice";
import { restartShoppingCart, saveMethodPayment } from "../../../../store/product/shoppingCartSlice";
import { savingData } from "../../../hellpers/savingData";
import { useInkaStore } from '../../../../hooks/useInkaStore';


import arrowDown from "/src/shared/assets/arrowDown.svg";
import arrowRigth from "/src/shared/assets/arrowRIgth.svg";
import iconCheck from "/src/shared/assets/iconCheck.svg";
import visaAndMast from '/src/shared/assets/visaAndMasLogo.png';
import plinAndYape from '/src/shared/assets/plinAndYapeIcon.png';

export const ResumenTable = () => {
  const [showResumen, setShowResumen] = useState(true);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectPayment, setSelectPayment] = useState('')
  const [typeDelivery, setTypeDelivery] = useState('');

  const {payCartShopping, loading} = useInkaStore();

  const dispatch = useDispatch();

  const { cartItems, cartTotalQuantity, cartTotalAmount, contact, delivery } = useSelector(
    (state) => state.shoppingCart
  );

  const {id} = useSelector(state => state.auth);

  const {contactName} = contact;

  const {modalIsOpen, typeModal} = useSelector(state => state.modal);

  const toggleShowTableResumen = () => {
    setShowResumen(!showResumen);
  };

  const handleOption = (option) => {
    setSelectedOption(option);
    setTypeDelivery(option);
    dispatch(openModal());
    dispatch(selectTypeModal('delivery'))
  };

  const selectMethodPayment = (method) => {
    dispatch(saveMethodPayment(method));
    setSelectPayment(method);
  }

  const payShopping = async() => {
    dispatch(selectTypeModal('response-payShopping'))
    const data = savingData(cartItems, cartTotalQuantity, cartTotalAmount, delivery, contact, id);
    await payCartShopping(data);
    dispatch(restartShoppingCart())
  }

  return (
    <>
    {
      modalIsOpen && typeModal==='delivery' && (
        typeDelivery === 'delivery' ? 
        <ModalDelivery /> : 
        <ModalRetiro />
      )
    }
    <div className="flex flex-col gap-y-3 lg:w-72 xl:w-96">
      <div className="col-span-1 py-[15px] px-[10px] bg-secondary rounded-lg flex items-center justify-between lg:hidden">
        <h3 className="text-white font-bold">PRODUCTOS</h3>
        <img
          src={showResumen ? arrowDown : arrowRigth}
          alt="arrow-icon"
          onClick={toggleShowTableResumen}
        />
      </div>
      {showResumen && (
        <div className="rounded-lg bg-[#D1C8C1] max-h-[650px] p-[15px] 2xl:max-h-[900px]">
          <h2 className="text-center font-mont text-[18px] 2xl:text-[25px] pb-[10px] border-b-2 border-[#5A5A5A]">
            Resumen de pedidos
          </h2>
          <button
            className={`mt-[10px] font-mont text-[16px] 2xl:text-[20px] flex items-center justify-between w-full py-[7px] px-[15px] rounded-2xl ${
              selectedOption === "retiro"
                ? "bg-[#31241E] text-white"
                : "bg-white text-black"
            }`}
            type="button"
            onClick={() => handleOption("retiro")}
          >
            Retiro en tienda
            <img src={iconCheck} alt="iconCheck" />
          </button>
          <button
            className={`mt-[10px] font-mont text-[16px] 2xl:text-[20px] flex items-center justify-between w-full py-[7px] px-[15px] rounded-2xl ${
              selectedOption === "delivery"
                ? "bg-[#31241E] text-white"
                : "bg-white text-black"
            }`}
            type="button"
            onClick={() => handleOption("delivery")}
          >
            Delivery
            <img src={iconCheck} alt="iconCheck" />
          </button>
          <div className="my-[30px]  2xl:px-[15px] flex flex-col gap-y-5">
            <div className="flex justify-between">
              <span className="font-semibold text-[16px] 2xl:text-[20px]">
                Articulos
              </span>
              <span className="font-semibold text-[16px] 2xl:text-[20px]">
                {cartTotalQuantity}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-[16px] 2xl:text-[20px]">
                Delivery
              </span>
              <span className='font-semibold text-[16px] 2xl:text-[20px]'>s/ {delivery}</span>
            </div>
            <div className="flex justify-between pb-[10px] border-b-2 border-[#5A5A5A]">
              <span className="font-semibold text-[16px] 2xl:text-[20px]">
                Subtotal
              </span>
              <span className="font-semibold text-[16px] 2xl:text-[20px]">
                S/ {cartTotalAmount}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-[16px] 2xl:text-[20px]">
                Total
              </span>
              <span className="font-semibold text-[16px] 2xl:text-[20px]">
                s/ {cartTotalAmount + delivery}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <h2 className="text-[16px] 2xl:text-[22px] font-semibold">
              Metodo de Pago:{" "}
            </h2>
            <button
              className={`mt-[10px] text-[16px] 2xl:text-[20px] flex items-center justify-between w-full py-[7px] px-[15px] rounded-2xl max-h-[45px] ${
                selectPayment === "tarjeta"
                  ? "bg-[#31241E] text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => selectMethodPayment("tarjeta")}
            >
              <div className="flex items-center gap-x-2">
                <span className="font-mont">Tarjetas</span>
                <img src={visaAndMast} className="w-[40%]" alt="tarjetas" />
              </div>
              <img src={iconCheck} alt="iconCheck" />
            </button>
            <button
              className={`mt-[10px] text-[16px] 2xl:text-[20px] flex items-center justify-between w-full py-[7px] px-[15px] rounded-2xl max-h-[45px] ${
                selectPayment === "billetera"
                  ? "bg-[#31241E] text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => selectMethodPayment("billetera")}
            >
              <div className="flex items-center gap-x-2">
                <span className="font-mont">Billeteras</span>
                <img src={plinAndYape} className="w-[35%]" alt="billeteras" />
              </div>
              <img src={iconCheck} alt="iconCheck" />
            </button>
          </div>
          <div className="flex justify-between mt-[30px]">
            <button
              className={`btn-send-2 disabled:opacity-75`}
              onClick={payShopping}
              disabled={!selectPayment || cartTotalQuantity === 0 || !contactName || !id || loading}
            >
              Pagar
            </button>
            <button className="btn-send-2">Volver</button>
          </div>
        </div>
      )}
    </div>
    </>
  );
};
