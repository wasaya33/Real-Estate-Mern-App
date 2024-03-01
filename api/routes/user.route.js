import express  from "express";
import {test, updateUser}  from "../controller/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get('/test' , test);
router.post('/upload/:id' , verifyToken , updateUser)

export default router;