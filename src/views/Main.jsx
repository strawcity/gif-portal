import React, { useEffect } from 'react';
import { checkIfWalletIsConnected } from '../hooks/checkForWallet'
import { connectWallet } from '../hooks/connectWallet'
import { useWalletSnapshot } from '../states/wallet';


// Change this up to be your Twitter if you want.
const TWITTER_HANDLE = 'strawcitydesign';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

export default function Main() {
    const { walletAddress } = useWalletSnapshot();
    console.log("🚀 ~ Main ~ walletAddress", walletAddress)

    useEffect(() => {
        const onLoad = async () => {
            await checkIfWalletIsConnected();
        };
        window.addEventListener('load', onLoad);
        return () => window.removeEventListener('load', onLoad);
    }, []);

    return (walletAddress ? (<h1>You're logged in, dog!</h1>) : (<button l className="py-4 px-6 bg-gray-500 rounded-lg" onClick={connectWallet}>Log in</button>))
}