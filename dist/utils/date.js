"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentDate = void 0;
var getCurrentDate = function () {
    var date = new Date();
    var stringDate = date.toLocaleDateString('default', { month: "long", day: "numeric", "year": "numeric" });
    return stringDate;
};
exports.getCurrentDate = getCurrentDate;
