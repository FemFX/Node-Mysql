const express = require('express');
const mysql   = require('mysql');
const app     = express();

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'node'
}) 

db.connect((err)=>{
    if (err){
        console.log(err);
    }
    console.log('Mysql connected...');
})

//create table 
app.get('/createtable', (req, res) => {
    // let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))'
    // db.query(sql, (err, result) => {
    //     if (err) throw err
    //     console.log(result);
    // })
    //     res.send('Posts table created');
});

app.get('/addpost', (req, res) => {
    // let post = { 
    //     title : 'Post One',
    //     body  : 'Body'
    // }
    // let sql  = 'INSERT INTO posts SET ?';
    // let query = db.query(sql, post, (err, result)=>{
    //     if (err) throw err
    // })
    // res.send('Post added');
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});

