const inquirer = require('inquirer');
const express = require('express');
const mysql = require('mysql2');
const port = 3000;

const app = express();

app.use(express.urlencoded({}));
app.use(express.json());

app.listen(port,()=>{
    console.log(`host connected at http://localhost:${port}`)
})