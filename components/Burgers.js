import Image from "next/image"
import {formatoMoneda} from "../helpers/index"
import useBurgerApp from "../hooks/useBurgerApp"

const Burgers = ({producto}) => {
    const { handleSetProducto, handleChangeModal } = useBurgerApp()
    const { nombre, imagen, precio } = producto
  return (
    <>
      <div className="flex gap-3 border border-amber-400 z-0 rounded-lg shadow shadow-[#FFCD05] p-3">
        <div className="flex justify-between w-full">
          <div className="">
            <Image
              src={`/assets/${imagen}.jpg`}
              alt={`Imagen burger ${nombre}`}
              width={150}
              height={170}
              priority
              objectFit="cover"
              layout="fixed"
              className="rounded-[6px]"
            />
          </div>
        
          <div className="flex flex-col w-full px-4 text-center my-start gap-2">
              <h3 className="text-2xl text-white font-bold">{nombre}</h3>
              <h3 className="text-2xl my-3 font-bold text-[#ffcd05]">{formatoMoneda(precio)}</h3>
            <button
              type="button"
              onClick={() => {
                handleSetProducto(producto)
                handleChangeModal()
              }}
              className="bg-gradient-to-t text-xl from-orange-600 to-[#FFCD05] hover:bg-amber-500 w-full py-2 md:py-2 px-5 rounded-md text-white shadow-sm shadow-amber-200"
            >Más</button>
          </div>
        </div>
      </div>
    </> 
  )
}

export default Burgers