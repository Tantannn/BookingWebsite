import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";
// import { createError } from "../utils/error.js";

export const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  const newRoom = new Room(req.body);
  try {
    const savedRoom = await newRoom.save()
    await Hotel.findByIdAndUpdate(hotelId, { $push: { rooms: savedRoom._id } }, { new: true })
    res.status(200).json(savedRoom)
  } catch (error) {
    next(err);
  }
};

export const updateRoom = async (req, res, next) => {
  const roomId = req.params.roomid;
  try {
    const updatedRoom = await Room.findByIdAndUpdate(roomId, { $set: req.body }, { new: true })
    res.status(200).json(updatedRoom)
  } catch (error) {
    next(error)
  }
};
export const updateRoomAvailability = async (req, res, next) => {
  const roomId = req.params.roomid
  try {
    const room = await Room.findByIdAndUpdate(roomId, )
    res.status(200).json(room)
  } catch (error) {
    next(error)
  }
};
export const deleteRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  try {
    const deletedRoom = await Room.findByIdAndDelete(hotelId)
    res.status(200).json('rôm deleted')
  } catch (error) {
    next(error)
  }
};
export const getRoom = async (req, res, next) => {
  const roomId = req.params.roomid
  try {
    const room = await Room.findById(roomId)
    res.status(200).json(room)
  } catch (error) {
    next(error)
  }
};
export const getRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find()
    res.status(200).json(rooms)
  } catch (error) {
    next(error)
  }
};
