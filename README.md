# Blackout Cash

payments app, settled on the world's lightest settlement layer.

## Overview

Blackout Cash will be built as a application-specific ZK-rollup, and settled on Mina, allowing end-users to have all the security gains of a full-node.

## ZkApp Functionality

- bridge MINA on and off L2
- mint stablecoins against MINA tokens (inspired by Liquity Protocol)
- Privately transfer stablecoins and MINA tokens (inspired by Tornado Cash)
- Swap stablecoins and MINA (inspired by UniSwap)

## Data

Blackout Cash will use shared off-chain state. Initially, this will entail trusting a privilleged signer to attest to data availability, but someday, this will be fully solved at the base layer, or by a bridge to some other secure DA protocol.

## Oracle

Blackout Cash will likely be built with a trusted, centralized oracle, until some safer alternative emerges.

## Project plan

- The project MVP will initially be built as a zkApp on L1, without worrying about L2 things.
- Likely, the first step will be the trusted DA layer for off-chain state, then the centralized oracle, then the stablecoin.
