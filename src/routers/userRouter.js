import express from "express";
import {logout, editProfile, deleteProfile, seeProfile} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/logout", logout);
userRouter.get("/edit", editProfile);
userRouter.get("/delete", deleteProfile);
userRouter.get("/:id", seeProfile);

export default userRouter;