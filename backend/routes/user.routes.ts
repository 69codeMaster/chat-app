import express from "express";
import protectRoute from "../middleware/protectRoute";

import { getUsersForSideBar } from "../controllers/user.controller.ts";

const Router = express.Router();

Router.get("/", protectRoute, getUsersForSideBar);

export default Router;
