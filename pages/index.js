import Head from 'next/head'
import Image from 'next/image'
import Layout from '../layouts/Layout'
// import Admin from '../layouts/Admin'
import Burgers from '../components/Burgers'
import useBurgerApp from '../hooks/useBurgerApp'

export default function Home() {

  const { categoriaActual } = useBurgerApp();

  return (
    <>
      <Layout
        pagina={`Menú ${categoriaActual?.nombre}`}
        className="bg-gradient-to-r from-[#000000] via-[#232526] to-[#000000]"
      > 
      <div className='flex flex-col content-center w-full'> 
        <h1 className='text-start py-3 text-5xl font-bold text-[#FFCD05]'>{categoriaActual?.nombre}</h1>
        <p className='text-start text-2xl text-white'>¡Elige lo que se te antoje y personalízalo a tu gusto!</p>
      </div>
      <div className='grid gap-4 grid-cols-1 xl:grid-cols-3 2xl:grid-cols-4 mt-6'>
      {categoriaActual?.productos?.map(producto => (
        <Burgers
          key={producto.id}
          producto={producto}
        />
      ))}
      </div>
      </Layout>
    </>
  );
}

