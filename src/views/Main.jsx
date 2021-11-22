import React, { useEffect } from 'react'
import { checkIfWalletIsConnected } from '../hooks/checkForWallet'
import { connectWallet } from '../hooks/connectWallet'
import { useWalletSnapshot } from '../states/wallet'

// Change this up to be your Twitter if you want.
const TWITTER_HANDLE = 'strawcitydesign'
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`

export default function Main() {
    const { walletAddress } = useWalletSnapshot()
    console.log('🚀 ~ Main ~ walletAddress', walletAddress)

    useEffect(() => {
        const onLoad = async () => {
            await checkIfWalletIsConnected()
        }
        window.addEventListener('load', onLoad)
        return () => window.removeEventListener('load', onLoad)
    }, [])

    return (<div>

        {walletAddress ? (
            <h1>You're logged in, dog!</h1>
        ) : (<>
            <h1 className='mb-12'>Graffiti-verse</h1>
            <button className='py-4 px-6 bg-yellow-100 rounded-lg text-black font-semibold border-2 border-black' onClick={() => connectWallet()}>
                Connect your phantom
            </button>
        </>
        )}
    </div>)
}
