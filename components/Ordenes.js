import useBurgerApp from "../hooks/useBurgerApp";

const Ordenes = ({orden}) => {

    const { handleChangeModal, handleSetOrdenes  } = useBurgerApp()

    const {nombre, id} = orden;
    
  return (
    <>
        <div className="rounded-xl p-4 mx-2 my-5 bg-[#0f4c5c] h-full w-auto shadow-black shadow-md border-0">
            <div className="flex gap-1 md:flex-col justify-around bg-white text-center rounded-lg p-3">
                <h2 className="text-[#0f4c5c] font-bold">Orden: {id}</h2>
                <p className="text-[#0f4c5c] md:text-normal font-bold">{nombre}</p>
                
            </div>
            <button
                className="bg-gradient-to-t from-[#ff0b38] to-[#9a031e] w-full text-center text-white p-3 font-bold rounded-lg mt-2"
                type="button"
                onClick={ () => {
                    handleChangeModal()
                    handleSetOrdenes(orden)
                }}
            >Ver pedido
            </button>
        </div>
        
    </>
  )
}

export default Ordenes