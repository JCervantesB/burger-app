import { useState, useEffect } from 'react'
import Image from 'next/image'
import {formatoMoneda} from "../helpers/index"
import useBurgerApp from '../hooks/useBurgerApp'

const ModalProducto = () => {

    const { producto, handleChangeModal, handleAgregarPedido, pedido } = useBurgerApp()
    const [ cantidad, setCantidad ] = useState(1)
    const [ edicion, setEdicion ] = useState(false)

    useEffect(() => {
        if(pedido.some(pedidoState => pedidoState.id === producto.id )){
            const productoEdicion = pedido.find(pedidoState => pedidoState.id === producto.id)
            setEdicion(true)
            setCantidad(productoEdicion.cantidad)
        }
    
    }, [producto, pedido])

    
  return (
    <div className="flex flex-col gap-1 relative h-auto w-[80vw] md:w-[50vw] z-50">
        <div className="mx-auto">
            <div className='flex items-center content-center'>
            <Image
                width={220}
                height={250}
                objectFit="cover"
                layout="fixed"
                className="rounded-[6px]"
                alt={`imagen producto ${producto.nombre}`}
                src={`/assets/${producto.imagen}.jpg`}
            />

            </div>
        </div>
        <div>
            <button
                onClick={handleChangeModal}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 absolute top-[-2px] right-[-2px]" viewBox="0 0 20 20" fill="red">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>
            <h1 className='text-3xl text-center text-amber-400 font-bold'>{producto.nombre}</h1>
            <p className='text-xl font-semibold text-center text-white my-2'>{producto.descripcion}</p>
            <h3 className='text-2xl text-amber-400 text-center font-bold'>{formatoMoneda(producto.precio)}</h3>
        </div>
        <div className='flex gap-10 mx-auto'>
            <button
                type='button'
                onClick={() => {
                    if(cantidad <= 1) return
                    setCantidad( cantidad - 1 )
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="white">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
            </button>
            <h2 className='text-2xl text-amber-500 text-center font-bold'>{cantidad}</h2>
            <button
                type='button'
                onClick={() => {
                    if(cantidad >= 7) return
                    setCantidad( cantidad + 1 )
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="#FFBF00">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
            </button>
            
        </div>
        <div className='mx-auto'>
            <button
                className='bg-gradient-to-b from-[#FFCD05] to-orange-600 hover:bg-amber-400 pt-3 pb-4 px-10 text-xl text-white font-normal rounded-md my-2'
                onClick={() => handleAgregarPedido({ ...producto, cantidad})}
            >
                {edicion ? 'Guardar cambios' : 'Agregar al pedido'}
            </button>
        </div>
    </div>
  )
}

export default ModalProducto