import mysql from "mysql2";


export const pool = mysql.createPool({
    host : "127.0.0.1",
    user : "root",
    password: "Helloworld!20012023",
    database : "foodApp"
}).promise();
