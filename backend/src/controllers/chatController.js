import { chatClient } from "../lib/stream.js"

export const getStreamToken = async (req, res) => {
    try {
        const token = chatClient.createToken(req.user.clerkId)

        res.status(200).json({
            token,
            userId: req.user.clerkId,
            useName: req.user.name,
            userImage: req.user.userImage
        })
    } catch (error) {
        console.log("Error in get=Stream controller", error.message);

        res.status(500).json({ msg: "Internal server error" })
    }
}