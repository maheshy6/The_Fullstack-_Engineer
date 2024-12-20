import express from "express";
import mongoose from "mongoose"
import "dotenv/config"
import destinationRoute from "./routes/destination.route.js";
import userRoute from "./routes/user.route.js";
import tripRoute from "./routes/itinerary.route.js";
const app=express();

app.use(express.json())
app.use("/api",destinationRoute)
app.use("/api/users",userRoute)
app.use("/api/users/trips",tripRoute)

//MongoDb setup and express server connection
app.listen(5050,async(req,res)=>{
    await mongoose.connect(process.env.MONGODBURL)
    console.log("Connected to MongoDb database")
    console.log("Express server started at http://localhost:5050")
})