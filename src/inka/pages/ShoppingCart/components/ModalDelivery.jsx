import { useState } from "react";
import { useForm } from "../../../../hooks/useForm";
import { Modal } from "../../../components/Modal"

const formValidations = {
  district: [(value) => value !== '0','Seleccione un distrito.'],
  address: [(value) => value.length > 0,'Ingrese una dirección.'],
  contact: [(value) => value.length > 0,'Ingrese el nombre del contacto.'],
  nroDocument: [(value) => value.length === 8,'El DNI debe tener 8 caracteres.'],
  phone: [(value) => value.length === 9,'El número de telefono debe tener 9 digitos.'],
};

export const ModalDelivery = ({onClose, priceDelivery, contact:contactInfo}) => {

  const {onInputChange, district, address, contact, nroDocument, phone, districtValid, addressValid, contactValid, nroDocumentValid, phoneValid, isFormValid} = useForm({
    district: '0',
    address: '',
    contact: '',
    nroDocument: '',
    phone: ''
  }, formValidations)

  const [formSubmitted, setFormSubmited] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmited(true);
    if (!isFormValid) return;
    priceDelivery(20);
    contactInfo({
    contact,
    contact_dni : nroDocument,
    address,})
    onClose();
    
  }

  return (
    <Modal onClose={onClose}>
      <h1 className="font-mont font-bold text-lg lg:text-3xl text-center py-4 border-b-2 border-[#000]">Entrega de pedido</h1>
      <form onSubmit={onSubmit} className="mt-4">
        <div className='flex justify-between pb-5 flex-col relative'>
          <label className={`labelInput ${(formSubmitted && !!districtValid)? "text-red-600" : ""}`} htmlFor="district">Distrito:</label>
          <select 
            name="district"
            className={`inputClass ${(formSubmitted && !!districtValid)? "border-2 border-red-600" : "border-2 border-transparent"}`}
            value={district}
            onChange={onInputChange}
          >
            <option value="0" >Seleccione un distrito</option>
            <option value="1" >Chorrillos</option>
            <option value="2" >Surco</option>
          </select>
          {formSubmitted && !!districtValid && <p className="pErrorCLass">{districtValid}</p>}
        </div>
        <div className='flex justify-between pb-5 flex-col relative'>
          <label className={`labelInput ${(formSubmitted && !!addressValid)? "text-red-600" : ""}`} htmlFor="address">Dirección: </label>
          <input 
            type="text" 
            name="address"
            className={`inputClass ${(formSubmitted && !!addressValid)? "border-2 border-red-600" : "border-2 border-transparent"}`}
            value={address}
            onChange={onInputChange}
          />
          {formSubmitted && !!addressValid && <p className="pErrorCLass">{addressValid}</p>}
        </div>
        <div className='flex justify-between pb-5 flex-col relative'>
          <label className={`labelInput ${(formSubmitted && !!contactValid)? "text-red-600" : ""}`} htmlFor="contact">Contacto: </label>
          <input 
            type="text" 
            name="contact"
            className={`inputClass ${(formSubmitted && !!contactValid)? "border-2 border-red-600" : "border-2 border-transparent"}`}
            value={contact}
            onChange={onInputChange}
          />
          {formSubmitted && !!contactValid && <p className="pErrorCLass">{contactValid}</p>}
        </div>
        <div className='flex justify-between pb-5 flex-col relative'>
          <label className={`labelInput ${(formSubmitted && !!nroDocumentValid)? "text-red-600" : ""}`} htmlFor="nroDocument">Nro. Documento: </label>
          <input 
            type="text" 
            name="nroDocument"
            pattern="[0-9]*"
            title="Ingrese solo números"
            className={`inputClass ${(formSubmitted && !!nroDocumentValid)? "border-2 border-red-600" : "border-2 border-transparent"}`}
            value={nroDocument}
            onChange={onInputChange}
          />
          {formSubmitted && !!nroDocumentValid && <p className="pErrorCLass">{nroDocumentValid}</p>}
        </div>
        <div className='flex justify-between pb-5 flex-col relative'>
          <label className={`labelInput ${(formSubmitted && !!phoneValid)? "text-red-600" : ""}`} htmlFor="phone">Telefono: </label>
          <input 
            type="text" 
            pattern="[0-9]*"
            name="phone"
            className={`inputClass ${(formSubmitted && !!phoneValid)? "border-2 border-red-600" : "border-2 border-transparent"}`}
            value={phone}
            title="Ingrese solo números"
            onChange={onInputChange}
          />
          {formSubmitted && !!phoneValid && <p className="pErrorCLass">{phoneValid}</p>}
        </div>
        <div className="flex justify-between mt-4">
           <button className="btn-send-2" type="submit">
            Aceptar
           </button>
           <button className="btn-send-2" onClick={onClose}>
            Cancelar
           </button>
        </div>
      </form>
    </Modal>
  )
}
