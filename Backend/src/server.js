import express from "express"
import notesRoutes from "./Routes/notesRoutes.js"
import {connectDb} from "./config/db.js"
import dotenv from "dotenv"
import rateLimiter from "./middleware/ratelimiter.js"
import cors from "cors"
dotenv.config();
const __dirname = path.resolve();

const app=express();
const port=process.env.PORT||5001;

//middleware
if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
}
app.use(express.json());
app.use(rateLimiter);
app.use(
    cors(
    {
       origin: "http://localhost:5173",
    }
));
app.use("/api/notes",notesRoutes)

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/vite/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

connectDb().then(()=>{
    app.listen(5001, ()=>{
    console.log("server started on port ",port);
}
    );
}); 

