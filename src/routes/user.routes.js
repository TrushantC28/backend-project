import { Router } from "express";
import { reigsterUser } from "../controllers/user.controller.js";
const router = Router()
router.route("/register").post(reigsterUser)
export {router}