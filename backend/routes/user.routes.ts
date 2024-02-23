import express from "express";
import protectRoute from "../middleware/protectRoute.js";

import { getUsersForSideBar } from "../controllers/user.controller.js";

const Router = express.Router();

Router.get("/", protectRoute, getUsersForSideBar);

export default Router;
