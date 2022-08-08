import { WALLET_NAMES } from '@/constants'

const EVM_WALLETS_CONFIG = [WALLET_NAMES.MetaMask, WALLET_NAMES.WalletConnect, WALLET_NAMES.Coinbase]

const SOL_WALLETS_CONFIG = [WALLET_NAMES.Phantom]

const COSMOS_WALLETS_CONFIG = [WALLET_NAMES.Keplr]

export { EVM_WALLETS_CONFIG, SOL_WALLETS_CONFIG, COSMOS_WALLETS_CONFIG }
