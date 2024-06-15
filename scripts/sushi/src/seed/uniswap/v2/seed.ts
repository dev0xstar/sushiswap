import { ChainId, chainName } from '@sushiswap/chain'
import { Prisma, PrismaClient } from '@sushiswap/database'
import { performance } from 'perf_hooks'

import { getBuiltGraphSDK, V2PairsQuery } from '../../../../.graphclient/index.js'
import { PoolType, ProtocolName, ProtocolVersion } from '../../../config.js'
import { createPools, getLatestPoolTimestamp } from '../../../etl/pool/load.js'
import { createTokens } from '../../../etl/token/load.js'
import { GRAPH_HOST, UNISWAP_V2_SUBGRAPH_NAME, UNISWAP_V2_SUPPORTED_CHAINS } from '../config.js'




