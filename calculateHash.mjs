import crypto from 'crypto'

export const calculateHash = (block) => {
    const data = JSON.stringify(block.data);
    const blockData =
        data +
        block.previousHash +
        block.timestamp.toISOString() +
        block.pow.toString();
    //
   // return CryptoJS.HmacSHA256(blockData).toString(CryptoJS.enc.Hex)
    return crypto.createHash("sha256").update(blockData).digest("hex");
};