import mongoose from 'mongoose';

import { ENV } from "./env.js";

export const connectionDB = async () => {
    try {
        if (!ENV.DB_URL) {
            throw new Error("MongoDB connection URL is not defined in environment variables.");
        }
        const conn = await mongoose.connect(ENV.DB_URL)
        console.log("✅ Connected to MongoDB ✅", conn.connection.host);

    } catch (error) {
        console.error("❌ Error connecting to MongoDB ❌", error.message);
        process.exit(1); //0 == success
    }
}
