import { categorias } from './data/categorias'
import { productos } from './data/burgers'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () : Promise<void> => {
    try {
        await prisma.categoria.createMany({
            data: categorias
        })
        await prisma.burgers.createMany({
            data: productos
        })
    } catch (error) {
        console.log(error)
    }
}

main()
