import express from "express";
import { sendMessage,deleteMessage } from "../controller/messageController.js";

const router = express.Router();

router.post("/send", sendMessage);
router.delete("/delete/:id",deleteMessage);



export default router;
