import Image from "next/image"
import useBurgerApp from "../hooks/useBurgerApp"
import Categoria from "./Categoria"

const Sidebar = () => {

    const { categorias } = useBurgerApp()
    
  return (

    <>
        
        <div className="mx-auto w-full md:w-1/5 fixed top-0 left-0 z-10 px-3 pb-4 bg-black bg-opacity-5 backdrop-blur-[20px]">
            <div className="flex justify-start items-center w-full mt-4">
                <Image
                    width={60}
                    height={60}
                    src="/assets/logo.svg"
                    alt="imagen logotipo"
                />
                <h1 className="text-white text-5xl font-bold mt-2 font-bebas md:text-3xl tracking-wider w-full">COUNTRY BURGER</h1>
            </div>    
            <nav className="md:mt-3 md:flex-col flex md:gap-0 gap-3 mt-[55px]">
                {categorias.map(categoria => (
                    <Categoria
                        key={categoria.id}
                        categoria={categoria}
                    />
                    ))
                }
            </nav>
        </div>
         
    </>
  )
}

export default Sidebar