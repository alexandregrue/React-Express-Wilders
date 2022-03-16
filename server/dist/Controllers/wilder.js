"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const wilder_1 = __importDefault(require("../Models/wilder"));
const tools_1 = require("../Tools/tools");
;
exports.default = {
    create: (req, res, next) => {
        const { name, city, skills } = req.body;
        wilder_1.default.init().then(() => {
            const wilder = new wilder_1.default({
                name: name,
                city: city,
                skills: skills
            });
            wilder
                .save()
                .then((result) => {
                res.json({ success: true, result });
            })
                .catch((err) => {
                res.json({
                    success: false,
                    result: (0, tools_1.listErrors)(err),
                });
            });
        });
    },
    findAll: (req, res) => {
        wilder_1.default.find()
            .then((result) => {
            res.json({ success: true, result });
        })
            .catch((err) => {
            res.json({
                success: false,
                result: (0, tools_1.listErrors)(err),
            });
        });
    },
    findOne: (req, res) => {
        const { _id } = req.params;
        wilder_1.default.findOne({ _id })
            .then((result) => {
            if (!result) {
                return res.json({
                    success: false,
                    result: "id does not exist"
                });
            }
            res.json({ success: true, result });
        })
            .catch((err) => {
            res.json({
                success: false,
                result: (0, tools_1.listErrors)(err),
            });
        });
    },
    update: (req, res) => {
        const { _id, name, city, skills } = req.body;
        wilder_1.default
            .updateOne({ _id }, { name, city, skills })
            .then((result) => {
            if (result.matchedCount === 0) {
                return res.json({
                    success: false,
                    result: "Nothing found",
                });
            }
            res.json({ success: true, result });
        })
            .catch((err) => {
            res.json({
                success: false,
                result: (0, tools_1.listErrors)(err),
            });
        });
    },
    delete: (req, res) => {
        const { _id } = req.body;
        wilder_1.default.deleteOne({ _id })
            .then((result) => {
            if (result.deletedCount === 0) {
                return res.json({
                    success: false,
                    result: "id does not exist",
                });
            }
            res.json({
                success: true,
                result
            });
        })
            .catch((err) => {
            res.json({
                success: false,
                result: (0, tools_1.listErrors)(err),
            });
        });
    },
};
