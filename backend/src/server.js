import express from "express"
import path from "path"
import cors from "cors"
import { serve } from "inngest/express"
import { clerkMiddleware } from '@clerk/express'

import { ENV } from "./lib/env.js"
import { connectionDB } from "./lib/db.js"
import { inngest, functions } from "./lib/inngest.js"
import chatRoutes from "./routes/chatRoutes.js"
import sessionRoutes from "./routes/sessionRoutes.js"

const app = express()

const __dirname = path.resolve()

app.use(express.json())
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }))
app.use(clerkMiddleware()) // Add Clerk middleware to handle authentication

app.use("/api/inngest", serve({ client: inngest, functions }))
app.use("/api/chats", chatRoutes)
app.use("/api/sessions", sessionRoutes)



app.get("/health", (req, res) => {
    res.status(200).json({ msg: "API is up and running" })
})



//our app is ready to deployment from here only

if (ENV.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")))
    app.get("/{*any}", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend/dist/index.html"))
    })
}


const startServer = async () => {
    try {
        await connectionDB()
        app.listen(ENV.PORT, () => console.log("listening port from ===>", ENV.PORT))
    } catch (error) {
        console.error(" ❌ Error starting the server ❌", error.message);
    }
}

startServer()
