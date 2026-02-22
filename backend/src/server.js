import express from "express"
import path from "path"
import { ENV } from "./lib/env.js"
import { connectionDB } from "./lib/db.js"

const app = express()

const __dirname = path.resolve()


app.get("/health", (req, res) => {
    res.status(200).json({ msg: "API is up and running" })
})

app.get("/books", (req, res) => {
    res.status(200).json({ msg: "API is up and running for books" })
})


//our app is ready to deployment from here only

if (ENV.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")))
    app.get("/{*any}", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"))
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
