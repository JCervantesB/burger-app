import Image from "next/image"
import useBurgerApp from "../hooks/useBurgerApp"

const Categoria = ({categoria}) => {

    const { categoriaActual, handleClickCategoria } = useBurgerApp()
    const { nombre, icono, id } = categoria

  return ( 
    <div className={`${categoriaActual?.id === id ? "bg-[#FFCD05]" : ''} shadow shadow-gray-500 hover:bg-[#FFCD05] rounded-full md:w-full w-1/3 border p-2 mt-5 md:mt-1 md:px-4 md:py-2`}>
        <div className="flex gap-[1px] items-center justify-center">
            <Image
                width={30}
                height={30}
                src={`/assets/icono_${icono}.svg`}
                alt="imagen icono"
            />
            <button
                type="button"
                className={`md:text-xl text-sm font-normal hover:cursor-pointer text-white hover:text-black`}
                onClick={() => handleClickCategoria(id)}
            >{nombre}</button>
        </div>
    </div>
  )
}

export default Categoria