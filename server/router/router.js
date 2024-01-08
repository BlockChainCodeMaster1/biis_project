
export default function router (router, handle) {
    /** api **/
    router.get("/api/getWhiteListAuth/:address", require("../container/soga.js").getWhiteListAuth);
    router.post("/api/whiteListMint", require("../container/soga.js").whiteListMint);
    
    // Default catch-all handler to allow Next.js to handle all other routes
    router.all("*", (req, res) => handle(req, res))
}