import { PrismaClient } from "@prisma/client"

export default async function handler(req, res){
    const prisma = new PrismaClient()
    
    const item = await prisma.orden.delete({
        where: {id}
    })
    res.status(200).json(item)
}