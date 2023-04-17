const mongoose = require('mongoose');
const Schema = mongoose.Schema
mongoose.set('strictQuery', false);

// videos: {type: String},

const Transaction = new Schema({
  user: {
    type: Object,
    require: true,
  },
  hotel: {
    type: Schema.Types.ObjectId,
    require: true,
  },
  hotelName: {
    type: String,
    require: true,
  },
  rooms:Array,
  dateStart: {
    type: Date,
    require: true,
  },
  dateEnd: {
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

module.exports = mongoose.model('Transaction', Transaction)