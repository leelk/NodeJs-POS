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
    db_pool_1.default.query('SELECT * FROM Customer', function (err, results) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        }
        res.send(results);
    });
});
router.post('', (function (req, res) {
    //let's validate the data first
    if (req.body.id && req.body.name && req.body.address && req.body.customer_id &&
        typeof req.body.id == 'string' && req.body.id.trim().length > 0) {
        db_pool_1.default.query('INSERT INTO Customer VALUES (?,?,?,?)', [req.body.customer_id, req.body.name, req.body.address, req.body.id], function (err, results) {
            if (err || results.affectedRows == 0) {
                if (err)
                    console.log(err);
                res.sendStatus(500);
            }
            else {
                res.status(201).send('"' + req.body.customer_id + '"');
            }
        });
    }
    else {
        res.sendStatus(400);
    }
}));
/*
"customer_id": "C001",
    "address": "Galmatta",
    "name": "Dilan ",
    "id": ""*/
router.put("/:id", function (req, res) {
    /* if (!(req.body.customer_id && req.body.name && req.body.address && req.body.name && req.body.id && typeof req.body.customer_id == 'string' && req.body.customer_id.trim().length>0))
     {
         res.sendStatus(400);
         return
     }*/
    db_pool_1.default.query("UPDATE Customer SET name= ?, SET address = ?, SET id = ? WHERE customer_id = ?", [req.body.name, req.body.address, req.body.id, req.body.customer_id], function (err, results) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        }
        else if (results.effectedRows == 0) {
            // i can insert the data to Customer table if the looking customer id does not exist..!
            console.log("Nothing Happened");
        }
        else {
            res.sendStatus(204).send();
        }
    });
});
