import React from "react";

export const ShoppingHistoryPage = () => {
  return (
    <>
      <div className="bg-slate-700 py-5 px-2.5">
        <h1 className="text-2xl font-bold">
            Mis compras
            <i class="ps-3 text-2xl fa-solid fa-bag-shopping"></i>
        </h1>
      </div>
      <div className="flex flex-col px-2.5">
        <div className="bg-black px-2 py-2 rounded-xl">
            <h3 className="text-sm py-1.5 text-white">Código de Transacción: KLA154DA45AS</h3>
            <h3 className="text-sm py-1.5 text-white">Fecha de Compra: 15/02/23</h3>
            <h3 className="text-sm py-1.5 text-white">Tipo de Venta: Delivery</h3>
            <h3 className="text-sm py-1.5 text-white">Dirección: AAHH Machu Picchu Mz. X Lote 99 Dpto 1 - Villa El Salvador </h3>
            <h3 className="text-sm py-1.5 text-white">Método de pago: YAPE </h3>

            <table className="text-white w-full">
                <thead className="text-sm ">
                    <tr>
                        <th className="py-2 font-medium">Producto</th>
                        <th className="py-2 font-medium">Color</th>
                        <th className="py-2 font-medium">Precio</th>
                        <th className="py-2 font-medium">Cantidad</th>
                        <th className="py-2 font-medium">Importe</th>
                    </tr>
                </thead>
                <tbody className="text-sm text-center">
                    <tr>
                        <td className="py-1.5">Sello Layconsa xd</td>
                        <td className="py-1.5">🏳️‍🌈</td>
                        <td className="py-1.5">5.8</td>
                        <td className="py-1.5">5</td>
                        <td className="py-1.5">29</td>
                    </tr>
                    <tr>
                        <td className="py-1.5">Sello Layconsa xd</td>
                        <td className="py-1.5">🏳️‍🌈</td>
                        <td className="py-1.5">5.8</td>
                        <td className="py-1.5">5</td>
                        <td className="py-1.5">29</td>
                    </tr>
                    <tr>
                        <td className="py-1.5">Sello Layconsa xd</td>
                        <td className="py-1.5">🏳️‍🌈</td>
                        <td className="py-1.5">5.8</td>
                        <td className="py-1.5">5</td>
                        <td className="py-1.5">29</td>
                    </tr>
                    <tr>
                        <td className="py-1.5">Sello Layconsa xd</td>
                        <td className="py-1.5">🏳️‍🌈</td>
                        <td className="py-1.5">5.8</td>
                        <td className="py-1.5">5</td>
                        <td className="py-1.5">29</td>
                    </tr>
                    <tr>
                        <td className="py-1.5">Sello Layconsa xd</td>
                        <td className="py-1.5">🏳️‍🌈</td>
                        <td className="py-1.5">5.8</td>
                        <td className="py-1.5">5</td>
                        <td className="py-1.5">29</td>
                    </tr>
                </tbody>
            </table>
            {/* <div className="bg-red-600">

                <h3>Producto: Sello Layconsa xd</h3>
                <h3>Color: 🏳️‍🌈</h3>
                <h3>Precio: 5.8</h3>
                <h3>Cantidad: 5</h3>
                <h3>Importe: 29</h3>
            </div> */}
        </div>
      </div>
    </>
  );
};
