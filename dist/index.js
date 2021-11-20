"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var quotes_1 = require("./routes/quotes");
var app = express_1.default();
var PORT = process.env.PORT || 9000;
app.use(express_1.default.json());
app.use('/quotes', quotes_1.QuoteRouter);
app.listen(PORT, function () {
    console.log("Server is running on port " + PORT);
});
