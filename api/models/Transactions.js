import mongoose from "mongoose";


const TransactionSchema = new mongoose.Schema({
  user: {
    type: Object,
    require: true,
  },
  hotel: {
    type: String,
  },
  hotelName: {
    type: String,
    require: true,
  },
  rooms:Array,
  startDate: {
    type: Date,
    require: true,
  },
  endDate: {
    type: Date,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  payment: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    require: true,
  },
});
export default mongoose.model('Transaction', TransactionSchema)
