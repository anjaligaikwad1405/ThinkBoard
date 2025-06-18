import express from "express"
import notesRoutes from "./Routes/notesRoutes.js"
import {connectDb} from "./config/db.js"
import dotenv from "dotenv"
import rateLimiter from "./middleware/ratelimiter.js"
import cors from "cors"
dotenv.config();

const app=express();
const port=process.env.PORT||5001;

//middleware
app.use(express.json());
app.use(rateLimiter);
app.use(
    cors(
    {
       origin: "http://localhost:5173",
    }
));
app.use("/api/notes",notesRoutes)
connectDb().then(()=>{
    app.listen(5001, ()=>{
    console.log("server started on port ",port);
}
    );
}); 

