import mongoose from 'mongoose';

import { ENV } from "./env.js";

export const connectionDB = async () => {
    try {
        const conn = await mongoose.connect(ENV.DB_URL)
        console.log("✅ Connected to MongoDB ✅", conn.connection.host);

    } catch (error) {
        console.error("❌ Error connecting to MongoDB ❌", error.message);
        process.exit(1); //0 == success
    }
}
