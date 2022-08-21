import express from "express";
import { HomeIndex } from "../controllers/UserCon.js";

export const UserRt = express.Router();
    UserRt.get("/", HomeIndex);



    