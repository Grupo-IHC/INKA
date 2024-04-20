import { Modal } from "../../../components/Modal"

export const ModalDelivery = ({onClose}) => {

  const onSubmit = (e) => {
    e.preventDefault();
    onClose();
  }

  return (
    <Modal onClose={onClose}>
      <h1 className="font-mont font-bold text-lg lg:text-3xl	text-center py-4 border-b-2 border-[#000]">Entrega de pedido</h1>
      <form onSubmit={onSubmit} className="mt-4">
        <div className='flex justify-between pb-5 flex-col relative lg:flex-row'>
          <label className='labelInput' htmlFor="distrito">Distrito:</label>
          <select 
            name="distrito"
            className='inputClass'
          >
            <option value="0" selected>Seleccione un distrito</option>
            <option value="1" selected>Chorrillos</option>
            <option value="2" selected>Surco</option>
          </select>
        </div>
        <div className='flex justify-between pb-5 flex-col relative lg:flex-row'>
          <label className='labelInput' htmlFor="direccion">Dirección: </label>
          <input 
            type="text" 
            name="direccion"
            className='inputClass'
          />
        </div>
        <div className='flex justify-between pb-5 flex-col relative lg:flex-row'>
          <label className='labelInput' htmlFor="recepcion">Recepcionista: </label>
          <input 
            type="text" 
            name="recepcion"
            className='inputClass'
          />
        </div>
        <div className='flex justify-between pb-5 flex-col relative lg:flex-row'>
          <label className='labelInput' htmlFor="documento">Nro. Documento: </label>
          <input 
            type="text" 
            name="documento"
            className='inputClass'
          />
        </div>
        <div className='flex justify-between pb-5 flex-col relative lg:flex-row'>
          <label className='labelInput' htmlFor="telefono">Telefono: </label>
          <input 
            type="text" 
            name="telefono"
            className='inputClass'
          />
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
