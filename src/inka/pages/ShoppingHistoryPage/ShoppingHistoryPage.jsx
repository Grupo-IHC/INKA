import React from "react";

export const ShoppingHistoryPage = () => {
    return (
        <>
            <div className="py-5 px-2.5">
                <h1 className="text-2xl font-bold">
                    Mis compras
                    <i className="ps-3 text-2xl fa-solid fa-bag-shopping"></i>
                </h1>
            </div>
            <div className="flex flex-col px-2.5">
                <div className="bg-green-600 px-2 py-2 rounded-xl">
                    <h3 className="text-sm py-1.5 text-white">Código de Transacción: KLA154DA45AS</h3>
                    <h3 className="text-sm py-1.5 text-white">Fecha de Compra: 15/02/23</h3>
                    <h3 className="text-sm py-1.5 text-white">Tipo de Venta: Delivery</h3>
                    <h3 className="text-sm py-1.5 text-white">Dirección: AAHH Machu Picchu Mz. X Lote 99 Dpto 1 - Villa El Salvador </h3>
                    <h3 className="text-sm py-1.5 text-white">Método de pago: YAPE </h3>
                    <div className="flex justify-center items-center flex-col">
                        <table className="text-white w-[700px]">
                            <thead className="text-sm ">
                                <tr>
                                    <th className="py-2 font-medium hidden md:block"></th>
                                    <th className="py-2 font-medium">Producto</th>
                                    <th className="py-2 font-medium">Color</th>
                                    <th className="py-2 font-medium">Precio</th>
                                    <th className="py-2 font-medium">Cantidad</th>
                                    <th className="py-2 font-medium">Importe</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm text-center">
                                <tr>
                                    <td className="py-1.5 hidden md:block">
                                        <img className="w-24" src="src/shared/assets/InicioN1.png" alt="" />
                                    </td>
                                    <td className="py-1.5">Sello Layconsa xd</td>
                                    <td className="py-1.5">🏳️‍🌈</td>
                                    <td className="py-1.5">5.8</td>
                                    <td className="py-1.5">5</td>
                                    <td className="py-1.5">29</td>
                                </tr>
                                <tr>
                                    <td className="py-1.5 hidden md:block">
                                        <img className="w-24" src="src/shared/assets/InicioN1.png" alt="" />
                                    </td>
                                    <td className="py-1.5">Sello Layconsa xd</td>
                                    <td className="py-1.5">🏳️‍🌈</td>
                                    <td className="py-1.5">5.8</td>
                                    <td className="py-1.5">5</td>
                                    <td className="py-1.5">29</td>
                                </tr>
                                <tr>
                                    <td className="py-1.5 hidden md:block">
                                        <img className="w-24" src="src/shared/assets/InicioN1.png" alt="" />
                                    </td>
                                    <td className="py-1.5">Sello Layconsa xd</td>
                                    <td className="py-1.5">🏳️‍🌈</td>
                                    <td className="py-1.5">5.8</td>
                                    <td className="py-1.5">5</td>
                                    <td className="py-1.5">29</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="flex flex-col w-full text-sm">
                            <div className="w-full flex flex-row">
                                <div className="basis-3/4 flex justify-end">
                                    <p className="text-end font-medium py-1.5">Subtotal: </p>
                                </div>
                                <div className="basis-1/4 flex justify-center">
                                    <p className="py-1.5">159</p>
                                </div>
                            </div>
                            <div className="w-full flex flex-row">
                                <div className="basis-3/4 flex justify-end">
                                    <p className="text-end font-medium py-1.5">Delivery: </p>
                                </div>
                                <div className="basis-1/4 flex justify-center">
                                    <p className="py-1.5">200</p>
                                </div>
                            </div>
                            <div className="w-full flex flex-row">
                                <div className="basis-3/4 flex justify-end">
                                    <p className="text-end font-medium py-1.5">Total: </p>
                                </div>
                                <div className="basis-1/4 flex justify-center">
                                    <p className="py-1.5">359</p>
                                </div>
                            </div>
                            {/* <tr>
                                    <td className="text-end font-medium py-1.5" colSpan={4}>Subtotal:</td>
                                    <td className="w-[20%] py-1.5">159</td>
                                </tr>
                                <tr>
                                    <td>
                                        <button className="bg-red-600 p-1 rounded-lg flex items-center">
                                            <p className="text-xs p-2">Descargar Comprobante</p>
                                            <i class="fa-solid fa-file-pdf text-lg"></i>
                                        </button>
                                    </td>
                                    <td className="text-end font-medium py-1.5" colSpan={3}>Delivery:</td>
                                    <td className="w-[20%] py-1.5">200</td>
                                </tr>
                                <tr>
                                    <td className="text-end font-medium py-1.5" colSpan={4}>Total:</td>
                                    <td className="w-[20%] py-1.5">359</td>
                                </tr> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
