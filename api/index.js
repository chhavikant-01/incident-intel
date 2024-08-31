import express from "express";
import cors from "cors";
import connectDB from "./database/db.js";   
import postRoutes from "./routes/post.route.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();  
app.use(express.json());
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
connectDB();
app.use(cors(
    {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    }
));

app.use("/api/v1/post", postRoutes);