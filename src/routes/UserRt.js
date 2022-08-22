import express from "express";
import { USER } from "../controllers/UserCon.js";

export const UserRt = express.Router();
    UserRt.post("/register", USER.Register);
    UserRt.post("/login", USER.Login);



    