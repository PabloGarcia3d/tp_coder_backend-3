import { Router } from "express";
const router = Router();
import mocksController from "../controllers/mocks.controller.js";

router.get("/mockingpets", mocksController.getPets);

router.get("/mockingusers", mocksController.getUsers);

router.post("/generateData", mocksController.postUserAndPetsData);

export default router;
