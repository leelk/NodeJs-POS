"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var main_dispatcher_1 = __importDefault(require("./main-dispatcher"));
var app = express();
app.listen(5050, function () { return console.log("Server has been started and "); });
app.use(main_dispatcher_1.default);
