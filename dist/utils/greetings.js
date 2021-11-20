"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greet = void 0;
var date_1 = require("./date");
var greet = function () {
    var date = date_1.getCurrentDate();
    return "Good Morning Stephen, it's " + date + ".";
};
exports.greet = greet;
console.log(exports.greet());
