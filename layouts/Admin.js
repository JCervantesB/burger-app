import Head from 'next/head'
import { ToastContainer } from 'react-toastify'
import Modal from 'react-modal/lib/components/Modal'
import ModalOrden from '../components/ModalOrden'
import useBurgerApp from "../hooks/useBurgerApp"
import Ordenes from "../components/Ordenes"
import 'react-toastify/dist/ReactToastify.css'


const customStyles = {

    overlay:{
        backdropFilter: "blur(3px)"
    },

    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        height: "scroll",
        background: "white",
        border: "none",
        borderRadius: "8px",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        boxShadow: "3px 4px 5px 0px rgba(0,0,0,0.75)",
        WebkitBoxShadow: "3px 4px 5px 0px rgba(0,0,0,0.75)",
        MozBoxShadow: "3px 4px 5px 0px rgba(0,0,0,0.75)" 
    }
};

Modal.setAppElement("#__next");

export default function Admin(){

    const { ordenes, orden, modal } = useBurgerApp()
    
    return(
        <>  
            <Head>
                <title>Country Burger Admin</title>
                <meta name="theme-color" content="#232526" />
                <meta name="description" content="Country Burger | las mejores hamburguezas de toda Bogotá" />
                <meta name="author" content="Nicolas Lasso Rodriguez" />
            </Head>
            <div className="md:w-screen h-screen bg-[#e0e1dd]">
                <h1 className="text-3xl py-5 text-center font-semibold text-[#9a031e]">Panel de administracion Country Burger</h1>
                <h2 className='text-2xl py-5 text-center font-semibold text-[#9a031e]'>Ordenes {ordenes.length}</h2>
                
                <div className="flex flex-col md:flex-row h-scroll justify-center">
                    {
                        ordenes.map( (orden) => (
                            <Ordenes 
                                key={orden.id}
                                orden={orden}
                            />
                        ))
                    }
                    
                </div>
            </div>
            { modal && (
                <Modal isOpen={modal} style={customStyles}>
                   <ModalOrden />  
                </Modal>
            )}
            
            <ToastContainer
                theme='colored'
            />
        </>
    )
}