import express from 'express'
import {
    createTransaction,
    deleteTransaction,
    getTransaction,
    getTransactions,
    updateTransaction,

} from "../controllers/transactions.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router()

//CREATE
router.post("/",verifyAdmin, createTransaction);
//UPDATE
router.put("/:id",verifyAdmin, updateTransaction);
//DELETE
router.delete("/:id",verifyAdmin, deleteTransaction);
//GET
router.get("/find/:id", getTransaction);
//GET ALL
router.get("/", getTransactions);

export default router 