import React, { useEffect, useState } from 'react'
import { checkIfWalletIsConnected } from '../hooks/checkForWallet'
import { connectWallet } from '../hooks/connectWallet'
import { useWalletSnapshot } from '../states/wallet'
import { useGifsSnapshot } from '../states/gifs'

// Change this up to be your Twitter if you want.
const TWITTER_HANDLE = 'strawcitydesign'
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`
const TEST_GIFS = [
    {
        gifUrl: 'https://media0.giphy.com/media/9uiH0KZ2j3Fo0qs1Yb/giphy.gif?cid=6c09b952eq9qkidjcnecv3olveecn9vb222c8b9kligaidmq&rid=giphy.gif&ct=s',
        x: 0,
        y: 0,
    },
    {
        gifUrl: 'https://thumbs.gfycat.com/EvenTalkativeAndeancondor-max-1mb.gif',
        x: 0,
        y: 0,
    },
    {
        gifUrl: 'https://cdn.dribbble.com/users/1073093/screenshots/5663800/media/13851a89a5dea4ad6bd74a1d6bb85021.gif',
        x: 0,
        y: 0,
    },
    {
        gifUrl: 'https://media3.giphy.com/media/XAyEFucS0OLaonoiCm/200_d.gif?cid=95b27944km49brhlxbnus74jedo0u3i1vz07826izlbrt5gw&rid=200_d.gif&ct=g',
        x: 0,
        y: 0,
    },
]

export default function Main() {
    const { walletAddress } = useWalletSnapshot()
    const [inputValue, setInputValue] = useState('')
    const gifList = useGifsSnapshot()

    const onInputChange = (event) => {
        const { value } = event.target
        setInputValue(value)
    }

    const sendGif = async () => {
        if (inputValue.length > 0) {
            console.log('Gif link:', inputValue)
        } else {
            console.log('Empty input. Try again.')
        }
    }

    useEffect(() => {
        const onLoad = async () => {
            await checkIfWalletIsConnected()
        }
        window.addEventListener('load', onLoad)
        return () => window.removeEventListener('load', onLoad)
    }, [])

    return (
        <div>
            {walletAddress ? (
                <>
                    <div className='relative z-30'>
                        <h1 className='my-8'>Add your script to the wall</h1>
                        <form
                            onSubmit={(event) => {
                                event.preventDefault()
                                sendGif()
                            }}
                        >
                            <input
                                type='text'
                                placeholder='Enter gif link!'
                                value={inputValue}
                                onChange={onInputChange}
                            />
                            <button
                                type='submit'
                                className='ml-6 py-2 px-4 bg-yellow-100 rounded-lg text-black font-semibold border-2 border-black'
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                    {TEST_GIFS.map((gif) => (
                        <div
                            className='gif-item absolute'
                            style={{
                                top: `${gif.y > 0 ? gif.y : Math.floor(Math.random() * 89)}vh`,
                                left: `${gif.x > 0 ? gif.x : Math.floor(Math.random() * 89)}vh`,
                            }}
                            key={gif.gifUrl}
                        >
                            <img className='max-h-40 max-w-40' src={gif.gifUrl} alt={gif} />
                        </div>
                    ))}
                </>
            ) : (
                <>
                    <h1 className='mb-12'>Graffiti-verse</h1>
                    <button
                        className='py-4 px-6 bg-yellow-100 rounded-lg text-black font-semibold border-2 border-black'
                        onClick={() => connectWallet()}
                    >
                        Connect your phantom
                    </button>
                </>
            )}
        </div>
    )
}
