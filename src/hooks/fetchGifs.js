import { useWalletSnapshot } from "../states/wallet";
import { setGifsList } from "../states/gifs";

let walletAddress = useWalletSnapshot()
if (walletAddress) {
    console.log('Fetching GIF list...');

    // Call Solana program here.

    // Set state
    setGifList(TEST_GIFS);
}