import { proxy, useSnapshot } from 'valtio'
import { updateProxy } from './helpers'

const defaultGifs = []

const state = proxy(defaultGifs)

export default state

export const useGifsSnapshot = () => useSnapshot(state)

export const setGifsList = (newGifs) => {
    updateProxy(state, newGifs)
}