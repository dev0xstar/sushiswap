import { ChainId, chainName } from '@sushiswap/chain'
import { Prisma,PrismaClient } from '@sushiswap/database'
import { performance } from 'perf_hooks'

import { getBuiltGraphSDK, V2PairsQuery } from '../../../../.graphclient/index.js'
import { PoolType, ProtocolName, ProtocolVersion } from '../../../config.js'
import { createPools, getLatestPoolTimestamp } from '../../../etl/pool/load.js'
import { createTokens } from '../../../etl/token/load.js'
import { DFYN_V2_SUBGRAPH_NAME, DFYN_V2_SUPPORTED_CHAINS, GRAPH_HOST } from '../config.js'

const PROTOCOL = ProtocolName.DFYN
const VERSION = ProtocolVersion.V2
const CONSTANT_PRODUCT_POOL = PoolType.CONSTANT_PRODUCT_POOL
const SWAP_FEE = 0.003
const TWAP_ENABLED = true



