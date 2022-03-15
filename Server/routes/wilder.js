import express from "express";
import wilderController from "./../Controllers/wilder";
import { wilderValidation } from "./../validators";

const router = express.Router();

router.post("/create", wilderValidation.create, wilderController.create);

router.get("/findAll", wilderController.findAll);

router.get("/findOne/:_id", wilderController.findOne);

router.put("/update", wilderController.update);

router.delete("/delete", wilderController.delete);

export default router;