import { Modal } from "../../../components/Modal"

export const ModalDelivery = ({onClose}) => {

  const onSubmit = (e) => {
    e.preventDefault();
    onClose();
  }

  return (
    <Modal title="Entrega de pedido">
      <form onSubmit={onSubmit} className="mt-9">
        <div className='flex items-center justify-between pb-8'>
          <label className='font-mont font-bold text-xl py-1' htmlFor="distrito">Distrito:</label>
          <select 
            name="distrito"
            className='bg-[#D1C8C1] py-2.5 px-4 rounded-lg min-w-[300px]'
          >
            <option value="0" selected>Seleccione un distrito</option>
            <option value="1" selected>Chorrillos</option>
            <option value="2" selected>Surco</option>
          </select>
        </div>
        <div className='flex items-center justify-between pb-8'>
          <label className='font-mont font-bold text-xl py-1' htmlFor="direccion">Dirección: </label>
          <input 
            type="text" 
            name="direccion"
            className='bg-[#D1C8C1] py-2.5 px-4 rounded-lg min-w-[300px]'
          />
        </div>
        <div className='flex items-center justify-between pb-8'>
          <label className='font-mont font-bold text-xl py-1' htmlFor="recepcion">Recepcionista: </label>
          <input 
            type="text" 
            name="recepcion"
            className='bg-[#D1C8C1] py-2.5 px-4 rounded-lg min-w-[300px]'
          />
        </div>
        <div className='flex items-center justify-between pb-8'>
          <label className='font-mont font-bold text-xl py-1' htmlFor="documento">Nro. Documento: </label>
          <input 
            type="text" 
            name="documento"
            className='bg-[#D1C8C1] py-2.5 px-4 rounded-lg min-w-[300px]'
          />
        </div>
        <div className='flex items-center justify-between pb-8'>
          <label className='font-mont font-bold text-xl py-1' htmlFor="telefono">Telefono: </label>
          <input 
            type="text" 
            name="telefono"
            className='bg-[#D1C8C1] py-2.5 px-4 rounded-lg min-w-[300px]'
          />
        </div>
        <div className="flex justify-around mt-4">
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
