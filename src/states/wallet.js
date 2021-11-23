import { proxy, useSnapshot } from 'valtio'
import { updateProxy } from './helpers'

const defaultWalletState = {
    walletAddress: '',
}

const state = proxy(defaultWalletState)

export default state

export const useWalletSnapshot = () => useSnapshot(state)

export const setWallet = (newWalletAddress) => {
    updateProxy(state, newWalletAddress)
}