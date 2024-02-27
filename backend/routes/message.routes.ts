import express from "express";

import { sendMessage, getMessage } from "../controllers/message.controller.ts";
import { sendMessageWithParams, getMessagesWithParams } from "requestsType";
import protectRoute from "../middleware/protectRoute";

const Router = express.Router();

const sendMessageURL: sendMessageWithParams = "/send/:id";
Router.post(sendMessageURL, protectRoute, sendMessage);

const getMessagesURl: getMessagesWithParams = "/:id";
Router.get(getMessagesURl, protectRoute, getMessage);

export default Router;
