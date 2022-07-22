import Image from "next/image";
import useBurgerApp from "../hooks/useBurgerApp";
import { formatoMoneda } from "../helpers/index"

const ResumenProducto = ({producto}) => {

    const { handleEditarCantidades, handlerDelete } = useBurgerApp()

  return (

    <div className="shadow md:p-5 p-2 mt-7 flex md:flex-row flex-col gap-7 items-center justify-center py-10 border-t-2 border-[#FFCD05]">
        <div className="flex justify-center md:w-1/6 w-full my-2 mx-auto">
            <Image
                width={160}
                height={200}
                alt={`Imagen producto ${producto.nombre}`}
                src={`/assets/${producto.imagen}.jpg`}
            />
        </div>
        <div className="md:w-4/6 w-full mx-auto">
            <p className="text-xl md:text-3xl font-semibold text-gray-200">{producto.nombre}</p>
            <p className="text-xl md:text-xl font-semibold text-[#FFCD05] my-2">Cantidad: {producto.cantidad}</p>
            <p className="text-xl md:text-2xl font-semibold mt-2 text-[#FFCD05]">Precio: {formatoMoneda(producto.precio)}</p>
            <p className="text-xl md:text-xl font-normal mt-2 text-gray-100">Subtotal: {formatoMoneda(producto.precio * producto.cantidad)}</p>
        </div>
        <div className="w-full md:w-1/6 mx-auto flex md:flex-col justify-between gap-1 content-center">
            <button
                onClick={() => handleEditarCantidades(producto.id)}
                type="button"
                className="flex gap-2 shadow-sm shadow-gray-500 py-2 px-5 rounded bg-gradient-to-b from-[#045782] to-[#29BCF1] text-white text-normal md:mb-4 w-[45%] md:w-full"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
                Editar    
            </button>
            <button
                onClick={() => handlerDelete(producto.id)}
                type="button"
                className="flex gap-2 w-[45%] md:w-full shadow-sm shadow-gray-500 py-2 px-5 rounded bg-gradient-to-t from-orange-600 to-[#FFCD05] text-white text-normal"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Eliminar
            </button>
        </div>
    </div>
  )
}

export default ResumenProducto