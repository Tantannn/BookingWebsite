import express from 'express'
import {
    createHotel,
    deleteHotel,
    getHotel,
    getHotels,
    updateHotel,
    countByCity,
    countByType,
    getHotelRooms
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router()

//CREATE
router.post("/", createHotel);
//UPDATE
router.put("/:id", updateHotel);
//DELETE
router.delete("/:id", deleteHotel);
//GET
router.get("/find/:id", getHotel);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
//GET ALL
router.get("/", getHotels);
router.get("/room/:id", getHotelRooms);

export default router 