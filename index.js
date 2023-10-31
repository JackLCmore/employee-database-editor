const inquirer = require('inquirer');
// const mysql = require('mysql2');

const menuQuestion = [
    {
        name:'menu',
        message:'What would you like to do?',
        type:'list',
        choices:['View All Employees','Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Close']
    }
]

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'password',
//     database: 'employee_db'
//   },
// console.log(`Connected to the books_db database.`)
// );

    inquirer
    .prompt(menuQuestion)
    .then((res)=>{
        console.log(res.menu)
    determineChoice(res.menu)
    });

function openMenu(){
    inquirer
    .prompt(menuQuestion)
    .then((res)=>{
    determineChoice(res.menu)
    });
}

function determineChoice(choice){
if (choice === 'View All Employees'){
// db.query('SELECT * FROM employees', function (err, res){
//     console.table(res);
// })
console.log(choice);
return openMenu();
}
else if(choice === 'Add Employee'){
    console.log(choice);
    return openMenu();
}
else if(choice === 'Update Employee Role'){
    console.log(choice);
    return openMenu();
}
else if(choice === 'View All Roles'){
    console.log(choice);
    return openMenu();
}
else if(choice === 'Add Role'){
    console.log(choice);
    return openMenu();
}
else if(choice === 'View All Departments'){
    console.log(choice);
    return openMenu();
}
else if(choice === 'Add Department'){
    console.log(choice);
    return openMenu();
}
else if(choice === 'Close'){
    console.log(choice);
    return;
}
};