import Layout from "../layouts/Layout"
import useBurgerApp from "../hooks/useBurgerApp"
import ResumenProducto from "../components/ResumenProducto"

export default function Resumen() {
  const { pedido } = useBurgerApp()
  return (
    <Layout pagina="Resumen">
        <h1 className="text-start mt-1 py-3 text-4xl font-bold text-[#FFCD05]">Resumen</h1>
        <p className="text-start text-2xl text-white">Revisa tu pedido</p>
        { pedido.length === 0 ? (
          <p className="text-center text-2xl text-gray-200 my-10">No has ordenado nada</p>
        ) : (
          pedido.map(producto => (
            <ResumenProducto
              key={producto.id}
              producto={producto}
            />
          ))
        ) }
    </Layout>
  )
}
