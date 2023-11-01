const inquirer = require('inquirer');
const mysql = require('mysql2');

const menuQuestion = [
    {
        name:'menu',
        message:'What would you like to do?',
        type:'list',
        choices:['View All Employees','Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Close']
    }
]

const employeeQuestions = [
    {
        name:'first_name',
        type:'input',
        message:'What is the first name of the new employee?'
    },
    {
        name:'last_name',
        type:'input',
        message:'What is the last name of the new employee?'
    },
    {
        name:'role',
        type:'list',
        message:'Which role is the new employee?',
        choices:["Sales Lead", "Salesperson", "Lead Engineer", "Software Engineer", "Account Manager", "Accountant", "Legal Team Lead", "Lawyer"]
    },
    {
        name:'manager',
        type:'list',
        message:'Which manager is the new employee working under?',
        choices: ["Jane Doe", "Rick Astley", "Billie Eilish", "Jordan Peele", "Jack Lunchick-Seymour", "John Doe", "Janice Joplin", "George Takei"]
    },
];

const roleQuestions = [
    {
        name:'name',
        type:'input',
        message:'What is the name of the role?'
    },
    {
        name:'salary',
        type:'input',
        message:'What is the salary of the role?'
    },
    {
        name:'dept',
        type:'list',
        message:'Which department does the role belong to?',
        choices: ['Sales', 'Engineering', 'Finance', 'Legal']
    }
]

const deptQuestions = [
    {
        name:'dept',
        type:'input',
        messages:'What is the name of the new department you would like to add?'
    }
];

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employees_db'
  },
console.log(`Connected to the employees_db database.`)
);

function openMenu(){
    inquirer
    .prompt(menuQuestion)
    .then((res)=>{
    determineChoice(res.menu)
    });
}

function addEmployee(){

    inquirer
    .prompt(employeeQuestions)
    .then((res)=>{
        console.log(res)
        db.query(`INSERT INTO employees (first_name, last_name, role_id, manager_id)
        VALUES ("${res.first_name}", "${res.last_name}", ${determineRoleID(res.role)}, ${determineManagerID(res.manager)})`,function (err,res){


        })
    })
   
};

function addRole(){

    inquirer
    .prompt(roleQuestions)
    .then((res)=>{

    if(res.dept === "Sales"){
    db.query('',function (err, res){
        console.log("\n")
        console.table(res);
        return openMenu();
    })}
    else if(res.dept === "Engineering"){
        db.query('',function (err, res){
            console.log("\n")
            console.table(res);
            return openMenu();
        })
    }
    else if(res.dept === "Finance"){
        db.query('',function (err, res){
            console.log("\n")
            console.table(res);
            return openMenu();
        })
    }
    else if(res.dept === "Legal"){
        db.query('',function (err, res){
            console.log("\n")
            console.table(res);
            return openMenu();
        })
    }})
   
};

function addDept(){

    inquirer
    .prompt(deptQuestions)
    .then((res)=>console.log(res))
   
};

function determineRoleID (input){
if(input === ''){

}
else if (input === ''){

}
else if (input === ''){
    
}
else if (input === ''){
    
}
else if (input === ''){
    
}
else if (input === ''){
    
}
else if (input === ''){
    
}
else if (input === ''){
    
}
};

function determineManagerID (input){
if(input === ''){

}
else if (input === ''){

}
else if (input === ''){
    
}
else if (input === ''){
    
}
else if (input === ''){
    
}
else if (input === ''){
    
}
else if (input === ''){
    
}
else if (input === ''){
    
}
};

function determineChoice(choice){
if (choice === 'View All Employees'){
db.query('SELECT * FROM employees', function (err, res){
    console.log("\n");
    console.table(res);
});
console.log(choice);
return openMenu();
}
else if(choice === 'Add Employee'){
    console.log(choice);
    return addEmployee();
}
else if(choice === 'Update Employee Role'){
    console.log(choice);
    return openMenu();
}
else if(choice === 'View All Roles'){
    db.query('SELECT * FROM roles', function (err, res){
        console.log("\n");
        console.table(res);
    });
    return openMenu();
}
else if(choice === 'Add Role'){
    console.log(choice);
    return addRole();
}
else if(choice === 'View All Departments'){
    db.query('SELECT * FROM departments', function (err, res){
        console.log("\n");
        console.table(res);
    })
    return openMenu();
}
else if(choice === 'Add Department'){
    console.log(choice);
    return addDept();
}
else if(choice === 'Close'){
    console.log(choice);
    return;
}
};

openMenu();