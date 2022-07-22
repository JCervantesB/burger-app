import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import { ToastContainer } from 'react-toastify'
import Modal from 'react-modal/lib/components/Modal'
import ModalProducto from '../components/ModalProducto';
import useBurgerApp from '../hooks/useBurgerApp';
import Pasos from '../components/Pasos';
import Footer from '../components/Footer';
import Image from 'next/image';

import 'react-toastify/dist/ReactToastify.css'

const customStyles = {

    overlay:{
        backgroundColor: "rgb(0, 0, 0, 0.89)",
        backdropFilter: "blur(3px)",
        zIndex: "100"
    },

    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        background: "#000000",
        background: "-webkit-linear-gradient(to right, #000000, #232526, #000000)",
        background: "linear-gradient(to right, #000000, #232526, #000000)",
        border: "none",
        borderRadius: "7px",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        boxShadow: "4px 2px 30px -6px rgba(97,97,97,0.75)",
        WebkitBoxShadow: "4px 2px 30px -6px rgba(97,97,97,0.75)",
        MozBoxShadow: "4px 2px 30px -6px rgba(97,97,97,0.75)"
    }
};

Modal.setAppElement("#__next");

export default function Layout({children , pagina}) {

    const { modal } = useBurgerApp()

    return (
        <>
            <Head>
                <title>Country {pagina}</title>
                <meta name="theme-color" content="#232526" />
                <meta name="description" content="Country Burger | las mejores hamburguezas de toda Bogotá" />
                <meta name="author" content="Nicolas Lasso Rodriguez" />
            </Head>

            <div className="md:flex bg-gradient-to-r from-[#000000] via-[#151616] to-[#000000] font-mont mx-auto">
                <aside className="md:w-4/12 xl:w-1/5 2xl:w-1/5 mx-auto">
                    <Sidebar/>
                </aside>
                <main className="md:w-8/12 xl:w-4/5 2xl:w-4/5 h-screen overflow-y-scroll">
                    <Pasos />
                    <div className='p-5 mt-[185px] md:mt-14'>
                        {children}
                    </div>
                </main>
            </div>
            {modal && (
                <Modal
                    isOpen={modal}
                    style={customStyles}    
                >
                    <div className='z-[1000000]'>
                        <ModalProducto />
                    </div>
                </Modal>
            )}
            <ToastContainer
                theme='colored'
            />
            <div className='flex justify-center items-center fixed bottom-0 left-[auto] w-full'>
                <Footer />
            </div>
        </>
    )
  }