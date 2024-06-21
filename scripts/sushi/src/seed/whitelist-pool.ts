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
    },
    where: {
      isFeeOnTransfer: false,
      status: 'APPROVED',
    },
  })

  const approvedTokens = approvedTokensResult.map((token) => token.id)
  console.log(`Fetched ${approvedTokens.length} tokens (approved and not fee on transfer).`)

  const batchSize = 10000
  let cursor = null
  const poolsToUpdate: string[] = []
  let totalCount = 0

  do {
    const requestStartTime = performance.now()
    let result = []
    if (!cursor) {
      result = await getPoolsAddresses(client, approvedTokens, batchSize)
    } else {
      result = await getPoolsAddresses(client, approvedTokens, batchSize, 1, { id: cursor })
    }
    cursor = result.length == batchSize ? result[result.length - 1].id : null
    totalCount += result.length



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
