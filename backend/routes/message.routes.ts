import express from "express";

import { sendMessage, getMessage } from "../controllers/message.controller.js";
import {
  sendMessageWithParams,
  getMessagesWithParams,
} from "../../shared/requestsType.js";
import protectRoute from "../middleware/protectRoute.js";

const Router = express.Router();

const sendMessageURL: sendMessageWithParams = "/send/:id";
Router.post(sendMessageURL, protectRoute, sendMessage);

const getMessagesURl: getMessagesWithParams = "/:id";
Router.get(getMessagesURl, protectRoute, getMessage);

export default Router;
