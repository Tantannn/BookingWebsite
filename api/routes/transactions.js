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
router.post("/", createTransaction);
//UPDATE
router.put("/:id", updateTransaction);
//DELETE
router.delete("/:id", deleteTransaction);
//GET
router.get("/find/:user", getTransaction);
//GET ALL
router.get("/", getTransactions);

export default router 