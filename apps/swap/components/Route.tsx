import { ExternalLinkIcon } from '@heroicons/react/solid'
import chains from '@sushiswap/chain'
import { Token } from '@sushiswap/currency'
import { RToken } from '@sushiswap/tines'
import { AppearOnMount, Chip, Currency, Link, Tooltip, Typography } from '@sushiswap/ui'
import { TradeOutput } from '@sushiswap/wagmi'
import { FC, useEffect, useRef, useState } from 'react'

import { useTrade } from './TradeProvider'

const tokenFromRToken = (token: RToken) => {
  return new Token({
    address: token.address,
    symbol: token.symbol,
    chainId: Number(token.chainId),
    decimals: 18,
  })
}

// Can render an entire tines single route with dots between
export const SingleRoute: FC<{ trade: TradeOutput }> = ({ trade }) => {
  if (!trade) return <></>

  const legs = trade.route.legs.length

  return (
    <div className="relative flex items-center justify-between gap-1">
      <div className="absolute inset-0 left-1 right-1 text-slate-600 pointer-events-none z-[-1]">

            <div

