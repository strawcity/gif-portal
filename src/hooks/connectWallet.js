import { setWallet } from "../states/wallet";

export const connectWallet = async () => {
    const { solana } = window;

    if (solana) {
        const response = await solana.connect();
        setWallet({ walletAddress: response.publicKey.toString() });
    }
};