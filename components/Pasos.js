import {useRouter} from 'next/router'


const pasos = 
[
    {paso: 1, nombre: 'Menu', url: '/'},
    {paso: 2, nombre: 'Resumen', url: '/resumen'},
    {paso: 3, nombre: 'Total', url: '/total'}
]

const Pasos = () => {

    const router = useRouter();
    const calculaProgreso = () => {
        let valor;
        if(router.pathname === "/"){
            valor = 10;
        }else if(router.pathname === "/resumen"){
            valor = 50;
        }else{
            valor = 100;
        }
        return valor;
    }
  return (
    <>  
        <div className='fixed top-[8%] mx-auto md:top-0 w-full md:w-8/12 lg:w-9/12 xl:w-[78%] z-10 px-5 md:bg-black md:bg-opacity-5 md:backdrop-blur-[8px]'>
            <div className="flex justify-between my-5">
            {pasos.map( (paso) => (
                <button
                    onClick={() => {
                        router.push(paso.url)
                    }}
                    className="text-xl font-normal text-[#FFCD05]"
                    key={paso.paso}>
                    {paso.nombre}
                </button>
            ))}
        </div>
        <div className='bg-[#232526] mb-5'>
            <div
                className='rounded-full bg-[#1aff05] text-xs leading-none h-1 text-center text-white'
                style={{width: `${calculaProgreso()}%`}}
            ></div>
        </div>
        </div>
    </>
  )
}

export default Pasos