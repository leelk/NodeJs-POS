"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var db_pool_1 = __importDefault(require("./db/db-pool"));
var router = express.Router();
exports.default = router;
router.get('', function (req, res) {
    db_pool_1.default.query('SELECT * FROM Item', function (err, results) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        }
        res.send(results);
    });
});
router.post('', function (req, res) {
    //let's validate the data first
    if (req.body.code && req.body.description && req.body.qtyOnHand && req.body.unitPrice && typeof req.body.code == 'string' && req.body.code.trim().length > 0) {
        db_pool_1.default.query('INSERT INTO Item VALUES (?,?,?,?)', [req.body.code, req.body.description, req.body.qtyOnHand, req.body.unitPrice], function (err, results) {
            if (err || results.affectedRows == 0) {
                console.log(err);
                res.sendStatus(500);
            }
            else {
                res.status(201).send('"' + req.body.code + '"');
            }
        });
    }
    else {
        res.sendStatus(400);
    }
});
router.put("/:id", function (req, res) {
});
