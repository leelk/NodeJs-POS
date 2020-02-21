import express = require("express");
import pool from './db/db-pool';
import {createDiffieHellman} from "crypto";

const router = express.Router();
export default router;







router.get('',(req, res) => {

    pool.query('SELECT * FROM Customer', (err, results) => {

        if (err){
            console.log(err);
            res.sendStatus(500);
        }

        res.send(results);
    });

});




router.post('', ((req, res) => {
    //let's validate the data first

    if (req.body.id && req.body.name && req.body.address && req.body.customer_id &&
        typeof req.body.id == 'string' && req.body.id.trim().length > 0){

        pool.query('INSERT INTO Customer VALUES (?,?,?,?)', [req.body.customer_id,req.body.name,req.body.address,req.body.id], (err, results) => {

                if (err || results.affectedRows == 0) {
                    if (err) console.log(err);
                    res.sendStatus(500);
                }
                else{
                    res.status(201).send('"' + req.body.customer_id + '"');
                }

            });
    }
    else{
        res.sendStatus(400);
    }

}));

/*
"customer_id": "C001",
    "address": "Galmatta",
    "name": "Dilan ",
    "id": ""*/



router.put("/:id",(req, res) =>




    {
       /* if (!(req.body.customer_id && req.body.name && req.body.address && req.body.name && req.body.id && typeof req.body.customer_id == 'string' && req.body.customer_id.trim().length>0))
        {
            res.sendStatus(400);
            return
        }*/

        pool.query("UPDATE Customer SET name= ?, SET address = ?, SET id = ? WHERE customer_id = ?",[req.body.name,req.body.address,req.body.id,req.body.customer_id], (err, results) =>
        {
            if (err)
            {
                console.log(err);
                res.sendStatus(500);
            }
            else if (results.effectedRows == 0)
            {
                // i can insert the data to Customer table if the looking customer id does not exist..!
                console.log("Nothing Happened");
            }
            else
            {
                res.sendStatus(204).send();
            }
        });


    });





















