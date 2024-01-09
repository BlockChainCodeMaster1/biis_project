
export default function router (router, handle) {
    /** api **/
    router.get("/api/getWhiteListAuth/:address", require("../container/soga.js").getWhiteListAuth);
    router.get("/api/getTotalData", require("../container/soga.js").getTotalData);
    router.post("/api/whiteListMintNFT", require("../container/soga.js").whiteListMint);
    router.post("/api/publicMintNFT", require("../container/soga.js").publicMint);
    router.post("/api/burnNft", require("../container/soga.js").burnNft);

    
    // Default catch-all handler to allow Next.js to handle all other routes
    router.all("*", (req, res) => handle(req, res))
}