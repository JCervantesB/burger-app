import useBurgerApp from "../hooks/useBurgerApp"
import { formatoMoneda } from "../helpers"

const ModalOrden = () => {

    const {  handleChangeModal, orden, handleEliminarPedido, handleSetEntregado } = useBurgerApp()
    
  return (
    <div className="flex flex-col w-[85vw] md:w-[50vw] md:h-auto justify-center items-center relative">
        <div className="flex items-center justify-center">
            <h1 className="text-center font-semibold text-3xl">Pedido de {orden.nombre}</h1>
            <button onClick={handleChangeModal}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute top-[-12px] right-[-10px]" viewBox="0 0 20 20" fill="red">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>
        </div>
        <table className="table-fixed w-full my-5 shadow-gray-400 shadow-md">
            <thead>
                <tr className="bg-gray-300">
                    <th className="text-2xl font-semibold">Cantidad</th>
                    <th className="text-2xl font-semibold">Producto</th>
                    <th className="text-2xl font-semibold">Subtotal</th>
                </tr>
            </thead>
            {orden.pedido?.map((ord) =>
                <tbody key={ord.id} className="bg-slate-200">
                    <tr>
                        <td className="text-center text-xl font-semibold py-3">{ord.cantidad}</td>
                        <td className="text-center text-xl font-semibold py-3">{ord.nombre}</td>
                        <td className="text-center text-xl font-semibold py-3">{formatoMoneda((ord.cantidad)*(ord.precio))}</td>
                    </tr>
                </tbody>
            )}
        </table>
        <div className="flex justify-between w-full px-3 items-center">
            <p className="text-end text-3xl font-bold my-3">Total pedido {orden.nombre}:</p>
            <p className="text-end text-3xl font-bold">{formatoMoneda(orden.total)}</p>
        </div>
        <div className="flex justify-end gap-3 w-full">
            <button
                className="bg-gradient-to-t from-orange-600 to-[#FFCD05] w-50 text-center text-white px-5 py-3 font-bold rounded-xl mt-2"
                onClick={ () => handleSetEntregado(orden.id)}
                >Marcar entregado</button>
            <button
                onClick={ () => {
                    handleEliminarPedido(orden.id)
                }} 
                className="bg-gradient-to-t from-red-600 to-red-500 w-50 text-center text-white px-5 py-3 font-bold rounded-xl mt-2">Cancelar orden</button>
        </div>
    </div>
  )
}

export default ModalOrden