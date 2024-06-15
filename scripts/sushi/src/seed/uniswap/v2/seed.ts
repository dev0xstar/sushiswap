import { ChainId, chainName } from '@sushiswap/chain'
import { Prisma, PrismaClient } from '@sushiswap/database'
import { performance } from 'perf_hooks'

import { getBuiltGraphSDK, V2PairsQuery } from '../../../../.graphclient/index.js'
import { PoolType, ProtocolName, ProtocolVersion } from '../../../config.js'
import { createPools, getLatestPoolTimestamp } from '../../../etl/pool/load.js'
import { createTokens } from '../../../etl/token/load.js'
import { GRAPH_HOST, UNISWAP_V2_SUBGRAPH_NAME, UNISWAP_V2_SUPPORTED_CHAINS } from '../config.js'

const PROTOCOL = ProtocolName.UNISWAP
const VERSION = ProtocolVersion.V2
const CONSTANT_PRODUCT_POOL = PoolType.CONSTANT_PRODUCT_POOL
const SWAP_FEE = 0.003
const TWAP_ENABLED = true

export async function uniswapV2() {
  const client = new PrismaClient()
  try {
    const startTime = performance.now()
    console.log(`Preparing to load pools/tokens, protocol: ${PROTOCOL}`)

    await start(client)

    const endTime = performance.now()
    console.log(`COMPLETE - Script ran for ${((endTime - startTime) / 1000).toFixed(1)} seconds. `)
  } catch (e) {
    console.error(e)
    await client.$disconnect()
  } finally {
    await client.$disconnect()
  }
}



