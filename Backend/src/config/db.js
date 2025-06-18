import mongoose from "mongoose"
export const connectDb = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongodb connected succesfully");
    } catch (error) {
        console.error("Err connecting mongodb",error);
        process.exit(1);
    }
};

