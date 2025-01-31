import { Router } from "express";
import { addTrip, getTrip } from "../controller/itinerary.controller.js";

const tripRoute = Router()

tripRoute.post("/",addTrip)
tripRoute.get("/",getTrip)
// userRoute.post("/forgetpassword",forgetPassword)
// userRoute.post("/resetpassword",resetPassword)


export default tripRoute