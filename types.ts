import Web3 from 'web3'

type AvailableWalletNames = 'WalletConnect' | 'MetaMask' | 'Phantom'

interface IWalletStoreState {
  isLoading: boolean
  isConnected: boolean
  name: null | AvailableWalletNames
  provider: any // 📌 TODO: add interface
  web3: Web3 | null
  chainId: null | number
  address: string | null
  addressShort: string | null
  addressDomain: string | null
}

interface IWallet extends IWalletStoreState{
  restore: Function
  connect: Function
  balance: string | null
  changeNetwork: Function
  sendTx: Function
  disconnect: Function
}

type TGetBalanceOption = {
  web3: Web3 | null,
  address: string | null,
}

export type { AvailableWalletNames, IWallet, IWalletStoreState, TGetBalanceOption }
