import { useEffect, useCallback } from "react"
import Layout from "../layouts/Layout"
import useBurgerApp from "../hooks/useBurgerApp"
import { formatoMoneda } from "../helpers"

export default function Total () {

  const { pedido, nombre, setNombre, confirmarOrden, total } = useBurgerApp()

  const comprobarPedido = useCallback(() => {
    return pedido.length === 0 || nombre === '' || nombre.length < 3 ;
  }, [pedido, nombre])

  useEffect(()=> {
    comprobarPedido()
  }, [pedido, comprobarPedido])

  
  return (
    <Layout pagina="Total y confirma tu pedido">
      <>
      <div className="w-[100%]">
      <h1 className="text-start py-3 text-4xl font-bold text-[#FFCD05]">Total y confirmar pedido</h1>
        <p className="text-start text-2xl text-white mb-10">Confirma tu pedido</p>
        <div className="flex content-center items-center mx-auto">
          <form className="my-0" onSubmit={confirmarOrden}>
            <div className="w-full">
              <label htmlFor="nombre" className="font-bold text-xl text-white text-center my-5">Nombre:</label>
              <input
                id="nombre"
                type="text"
                placeholder="Ingresa tu nombre"
                className="p-3 outline-none text-xl capitalize text-[#FFCD05] bg-transparent my-3 text-center border-b-2 border-[#FFCD05] w-full"
                autoComplete="off"
                value={nombre}
                onChange={ e => setNombre(e.target.value) }
              />
            </div>
            <div className="mt-5">
              <p className="text-center text-white text-2xl font-bold">Total a pagar</p>
              <h2 className="text-[#FFCD05] text-5xl font-bold mt-7 text-center">{formatoMoneda(total)}</h2>
              <input 
                type="submit"
                className={`${comprobarPedido()? "bg-lime-400 text-gray-600" : "bg-gradient-to-t from-[#1aff05] to-lime-400" } text-center text-white text-xl block w-full my-10 rounded-lg py-4 px-7 hover:cursor-pointer`}
                value="Conformar pedido"
                disabled={comprobarPedido()}
              />
            </div>
          </form>
        </div>
      </div>
      </>
    </Layout>
  )
}