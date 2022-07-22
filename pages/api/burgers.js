import { PrismaClient } from '@prisma/client'

export default async function handler(req, res) {
  
  const prisma = new PrismaClient()
  const burgers = await prisma.burgers.findMany({
      where: {
          categoriaId : 2,
      },
  })
  res.status(200).json(burgers)
}
