import React, { useEffect } from 'react';
import { checkIfWalletIsConnected } from '../hooks/checkForWallet'


// Change this up to be your Twitter if you want.
const TWITTER_HANDLE = 'strawcitydesign';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

export default function Main() {

    useEffect(() => {
        const onLoad = async () => {
            await checkIfWalletIsConnected();
        };
        window.addEventListener('load', onLoad);
        return () => window.removeEventListener('load', onLoad);
    }, []);

    return <a
        className="footer-text"
        href={TWITTER_LINK}
        target="_blank"
        rel="noreferrer"
    >{`built by @${TWITTER_HANDLE}`}</a>;
}