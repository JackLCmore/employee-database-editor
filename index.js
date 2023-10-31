const inquirer = require('inquirer');
const mysql = require('mysql2');

function determineChoice(choice){
if (choice === 'View All Employees'){
console.log(choice);
}
else if(choice === 'Add Employee'){
    console.log(choice);
}
else if(choice === 'Update Employee Role'){
    console.log(choice);
}
else if(choice === 'View All Roles'){
    console.log(choice);
}
else if(choice === 'Add Role'){
    console.log(choice);
}
else if(choice === 'View All Departments'){
    console.log(choice);
}
else if(choice === 'Add Department'){
    console.log(choice);
}
}

const menuQuestion = [
    {
        name:'menu',
        message:'What would you like to do?',
        type:'list',
        choices:['View All Employees','Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department']
    }
]

inquirer
.prompt(menuQuestion)
.then((res)=>{
determineChoice(res)
});