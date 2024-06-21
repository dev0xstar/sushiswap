import {  Prisma,PrismaClient } from '@sushiswap/database'
import { performance } from 'perf_hooks'


export async function whitelistPools() {
  const client = new PrismaClient()
  try {
    const startTime = performance.now()

    await start(client)

    const endTime = performance.now()
    console.log(`COMPLETED (${((endTime - startTime) / 1000).toFixed(1)}s). `)
  } catch (e) {
    console.error(e)
    await client.$disconnect()
  } finally {
    await client.$disconnect()
  }
}

async function start(client: PrismaClient) {
  const approvedTokensResult = await client.token.findMany({
    select: {
      id: true,



    select: {
      id: true,
    },
    where: {
      isWhitelisted: false,
      token0Id: { in: approvedIds },
      token1Id: { in: approvedIds },
    },
  })

  return approvedTokens
}
