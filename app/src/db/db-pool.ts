import mysql = require("mysql");
import {PoolConnection} from 'mysql';

const pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'DEP4JPAPOS',
    connectionLimit: 10
});

// export function executeUpdate(connection: PoolConnection, query: string, values: Array<any>)
//     : Promise<number>{
//     return new Promise<number>((resolve, reject)=>{
//         connection.query(query,values,(err, results) => {
//             if (err){
//                 console.log(err);
//                 reject(err);
//                 return;
//             }
//             resolve(results.affectedRows);
//         });
//     });
//
// }

export default pool;
