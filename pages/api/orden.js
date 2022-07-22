import { PrismaClient } from "@prisma/client";

export default async function handler(req, res){
    const prisma = new PrismaClient()

    const ordens = await prisma.orden.findMany()
    res.status(200).json(ordens)
}