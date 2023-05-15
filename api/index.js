import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRoute from './routes/auth.js'
import hotelsRoute from './routes/hotels.js'
import roomsRoute from './routes/rooms.js'
import usersRoute from './routes/users.js'
import transactionsRoute from './routes/transactions.js'
import cookieParser from "cookie-parser";
import cors from "cors";
// import bodyParser from 'body-parser'
const port = 5000
const app = express()

dotenv.config();
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};
mongoose.connection.on('disconnected', () => {
  console.log('mongo disconnected');
})
mongoose.connection.on('connected', () => {
  console.log('mongo connected');
})
const corsOptions = {
  //To allow requests from client
  origin: [
    "http://localhost:3000",
    "http://localhost:3001",
    "http://127.0.0.1",
    "http://104.142.122.231",
    "https://bookingwebsite-funny.netlify.app",
    "https://bookingwebsite-funnyclient.netlify.app", 
    "https://64610b5ac83c38000899be83--bookingwebsite-funny.netlify.app",
    "https://64610b5af6a25800093379a2--bookingwebsite-funnyclient.netlify.app"
  ],
  credentials: true,
  exposedHeaders: ["set-cookie"],
};

app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())
// app.use(bodyParser.urlencoded())


app.use('/api/auth', authRoute)
app.use('/api/hotels', hotelsRoute)
app.use('/api/rooms', roomsRoute)
app.use('/api/users', usersRoute)
app.use('/api/transactions', transactionsRoute)

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(port, () => {
  connect();
  console.log(`Example app listening on port ${port}!`)
})