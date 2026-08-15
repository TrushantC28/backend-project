import { Router } from "express";
import { loginUser, logoutUser, reigsterUser } from "../controllers/user.controller.js";
import {upload} from "../middleware/multer.js";
const router = Router()
router.route("/register").post(
    upload.fields([
        {
            name : "avatar",
            maxCount : 1
        },
        {
            name : "coverImage",
            maxCount : 1
        }
    ]),
    reigsterUser)
router.route("/login").post(loginUser)
//secured routes
router.route("/logout").post(verifyJWT, logoutUser)
export {router}