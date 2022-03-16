"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const wilder_1 = __importDefault(require("../Controllers/wilder"));
const validators_1 = require("../validators");
const router = express_1.default.Router();
router.post("/create", validators_1.wilderValidation.create, wilder_1.default.create);
router.get("/findAll", wilder_1.default.findAll);
router.get("/findOne/:_id", wilder_1.default.findOne);
router.put("/update", wilder_1.default.update);
router.delete("/delete", wilder_1.default.delete);
exports.default = router;
