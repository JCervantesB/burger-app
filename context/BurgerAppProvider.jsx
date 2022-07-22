
// ============== CONTEXT API ===================== //

import { useState, useEffect, createContext } from 'react'
import axios from 'axios'
import  { toast } from 'react-toastify'
import { useRouter } from "next/router"
import { data } from 'autoprefixer'

const BurgerAppContext = createContext()

const BurgerAppProvider = ({children}) => {

    const [ categorias, setCategorias ] = useState([]);
    const [ categoriaActual, setCategoriaActual ] = useState({});
    const [ producto, setProducto ] = useState({});
    const [ modal, setModal ] = useState(false);
    const [ pedido, setPedido ] = useState([]);
    const [ nombre, setNombre ] = useState('');
    const [ total, setTotal ] = useState(0);
    const [ ordenes, setOrdenes ] = useState([]);
    const [ orden, setOrden ] = useState({})

    const router = useRouter()
    
    const obtenerCategorias = async () => {
        const { data } = await axios("/api/categorias")
        setCategorias(data)
    }
    useEffect(() => {
        obtenerCategorias()
    }, [])

    useEffect(() => {
        setCategoriaActual(categorias[0])
    },[categorias])

    useEffect(() =>{
        const nuevoTotal = pedido.reduce((total, producto) => (producto.precio * producto.cantidad) + total, 0)
        setTotal(nuevoTotal);
    }, [pedido])

   const handleClickCategoria = id => {
       const categoria = categorias.filter( cat => cat.id === id )
       setCategoriaActual(categoria[0])
       router.push('/')
   } 

   const handleSetProducto = producto => {
       setProducto(producto)
   }

   const handleChangeModal = () => {
       setModal(!modal)
   }

   const handleAgregarPedido = ({ categoriaId, ...producto }) => {
       if(pedido.some(productoState => productoState.id === producto.id)){

        const pedidoActualizado = pedido.map(productoState => productoState.id === producto.id ? producto : productoState)
        setPedido(pedidoActualizado)
        toast.success('¡Listo! Actualizado correctamente ve a la pestaña total para confirmar tu orden')
       }else{
           setPedido([...pedido, producto])
           toast.success('¡Agregado a tu orden, ve a la pestaña resumen o total para confirmar tu orden!')
       }

       setModal(false)
   }

   const handleEditarCantidades = id => {
        const productoActualizar = pedido.filter(producto => producto.id === id)
        setProducto(productoActualizar[0])
        setModal(!modal)
   }

   const handlerDelete = id => {
        const pedidoActualizado = pedido.filter( producto => producto.id !== id)
        setPedido(pedidoActualizado)
        toast.success('Producto eliminado')
   }

    const confirmarOrden = async (e) => {
        e.preventDefault()
        try {
            await axios.post('/api/ordenes', { nombre, total, pedido, fecha: Date.now().toString()})

            // Reiniciar app
            setCategoriaActual(categorias[0]);
            setPedido([]);
            setNombre('');
            setTotal(0);

            toast.success('¡Tu pedido se creó correctamente!')

            setTimeout(() => {
                router.push('/')
            }, 3000)

        } catch (error) {
            console.log(error)
        }
    }

    const obtenerOrdenes = async () => {
        const { data } = await axios("/api/orden")
        setOrdenes(data)
    }
    useEffect(() =>{
        obtenerOrdenes()
    }, [])

    const handleSetOrdenes = (orden) => {
        setOrden(orden)
    }

    const handleSetEntregado = id => {
        console.log(id)
    }

    const handleEliminarPedido = async (id) => { 
        const item = ordenes.filter( orden => orden.id !== id)
        try {

            const panelActual = await axios.delete(`/api/orden/` , {data: orden.id})
            setOrdenes(item)
            console.log({panelActual})
            
            toast.success(`Se ha elimina la orden ${orden.id}`)
            
            setModal(false)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <BurgerAppContext.Provider 
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
                producto,
                handleSetProducto,
                modal,
                handleChangeModal,
                handleAgregarPedido,
                pedido,
                handleEditarCantidades,
                handlerDelete,
                nombre,
                setNombre,
                confirmarOrden,
                total,
                ordenes,
                orden,
                handleSetOrdenes,
                handleSetEntregado,
                handleEliminarPedido,
                obtenerOrdenes
            }}
        >
            {children}
        </BurgerAppContext.Provider>
    )
}

export {
    BurgerAppProvider
}
export default BurgerAppContext