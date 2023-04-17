import Transaction from "../models/transactions.js";

export const createTransaction = async (req, res, next) => {
  const newTransaction = new Transaction(req.body);
  try {
    const savedTransaction = await newTransaction.save();
    res.status(200).json(savedTransaction);
  } catch (err) {
    next(err);
  }
};
export const updateTransaction = async (req, res, next) => {
  try {
    const updatedTransaction = await Transaction.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedTransaction);
  } catch (err) {
    next(err);
  }
};
export const deleteTransaction = async (req, res, next) => {
  try {
    await Transaction.findByIdAndDelete(req.params.id);
    res.status(200).json("Transactions has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getTransaction = async (req, res, next) => {
  try {
    const Transaction = await Transaction.findById(req.params.id);
    res.status(200).json(Transaction);
  } catch (err) {
    next(err);
  }
};

export const getTransactions = async (req, res, next) => {
  try {
    const Transaction = await Transaction.find().limit(8)
    res.status(200).json(Transaction);
  } catch (err) {
    next(err);
  }
};


