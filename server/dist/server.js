"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const wilder_1 = __importDefault(require("./routes/wilder"));
dotenv_1.default.config();
const MONGO_URI = process.env.MONGO_URI || "";
const PORT = process.env.PORT || "3000";
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
mongoose_1.default
    .connect(MONGO_URI, {
    autoIndex: true
})
    .then(() => console.log("Connected to db"))
    .catch(err => console.error(err));
app.use("/api/wilder", wilder_1.default);
app.use((req, res) => {
    res.send("Route does not exist, error 404");
});
app.listen(PORT, () => console.log(`server started on ${PORT}`));
