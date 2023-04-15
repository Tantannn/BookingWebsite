import User from "../models/User.js";
import bcrypt from "bcrypt";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  


  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);
  const newUser = new User({
    username: req.body.username,
    password: hash
  })
  try {
    const checkUser = await User.find({ username: req.body.username }) 
    if(checkUser.length !== 0) return next(createError(404, 'user has already existed'))
    await newUser.save()
    res.status(200).json('user created!');
  } catch (error) {
    next(error)
  }
};
export const login = async (req, res, next) => {
  try {
    const userFound = await User.find({ username: req.body.username })
    if (userFound.length === 0) return next(createError(404, 'no user found'))
    await bcrypt.compare(req.body.password, userFound[0].password).then(function (result) {
      if (!result) return next(createError(400, 'wrong password'))
      const token = jwt.sign(
        { id: userFound[0]._id, isAdmin: userFound[0].isAdmin },
        process.env.JWT
      ); 
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200).send(userFound)
    })
  } catch (error) {
    next(error)
  }
};
