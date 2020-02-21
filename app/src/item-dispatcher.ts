import express = require("express");
import pool from './db/db-pool';


const router = express.Router();
export default router;


router.get('', (req, res) =>
{
    pool.query('SELECT * FROM Item', (err, results) =>
    {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        }
        res.send(results);
    });
});


router.post('', (req, res) => {
    //let's validate the data first
    if (req.body.code && req.body.description && req.body.qtyOnHand && req.body.unitPrice && typeof req.body.code == 'string' && req.body.code.trim().length > 0) {
        pool.query('INSERT INTO Item VALUES (?,?,?,?)', [req.body.code, req.body.description, req.body.qtyOnHand, req.body.unitPrice], (err, results) => {
            if (err || results.affectedRows == 0) {
                console.log(err);
                res.sendStatus(500);
            } else {
                res.status(201).send('"' + req.body.code + '"');
            }
        });
    } else {
        res.sendStatus(400);
    }
});



router.put("/:id",(req, res) =>
    {


    }

)