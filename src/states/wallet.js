import { proxy, useSnapshot } from 'valtio'
import { updateProxy } from './helpers'

export const defaultWalletState = {
    walletAddress: '',
}

const walletAddress = proxy(defaultWalletState)

export default walletAddress

export const useWalletSnapshot = () => useSnapshot(walletAddress)

export const setWallet = (newWalletAddress) => {
    updateProxy(walletAddress, newWalletAddress)
}