import { proxy, useSnapshot } from 'valtio'
import { updateProxy } from './helpers'

export const defaultWalletState = {}

const state = proxy(defaultWalletState)

export default state

export const useWalletSnapshot = () => useSnapshot(state)

export const setWallet = (wallet) => {
    updateProxy(state, wallet)
}