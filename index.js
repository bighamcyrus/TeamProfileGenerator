const fs = require('fs');
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const teamGenerator = require("./teamGenerator.js");
const theAssignedTeam = [ ];

const questionsManager = () => 
{
    return inquirer.prompt([
    {
    type: "input",
    name: "name",
    message: "What is the employee's name?"
    },

    {
        type: "input",
        name: "id",
        message: "What is the employee's Id?"
    },
    {
        type: "input",
        name: "email",
        message: "what is your email?"
    },

    {
        type: "input",
        name: "officeNumber",
        message: "What is your officeNumber?"
    },   

    ])
        .then(answers => {
            console.log(answers);
            const manager = new Manager(answers.name, answers.employeeID, answers.email, answers.officeNumber);
            theAssignedTeam.push(manager);
            promtTeambuild();
        })
};

const promtTeambuild = () => {
    return inquirer.prompt([
        {
            type:"list",
            name: "menu",
            message: "Please select one of the following to add to your team:",
            choices: ["engineer", "intern", "finished team setup"]
        }
    ])
    .then(userChoice => {
        switch (userChoice.initialQuestions) {
            // prompt different questions based on answers to initialQuesitons
            case "engineer":
                engineerQuestions();
                break;
                case "intern":
                    internQuestions();
                    break;
                    // need a function to put your team choices below
                    buildTeam();
        }
        
    });
};

const engineerQuestions = () => {
    return inquirer.prompt([
        {
            type:"input",
            name: "name",
            message: "What is your engineers name?",
        },
        {
            type:"input",
            name: "Id",
            message: "What is the employee's ID?",
        },
        {
            type:"input",
            name: "email",
            message: "What is the employees email?",
        },
        {
            type:"input",
            name: "GitHubUser",
            message: "What is the engineers github?",
        }

    ])
    .then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.GitHubUser);
        theAssignedTeam.push(engineer);
        promptTeambuild();
    })
};


const internQuestions = () => {
    return inquirer.prompt([
        {
            type:"input",
            name: "name",
            message: "What is your Intern's name?",
        },
        {
            type:"input",
            name: "Id",
            message: "What is the intern ID?",
        },
        {
            type:"input",
            name: "email",
            message: "What is the interns email?",
        },
        {
            type:"input",
            name: "school",
            message: "What is the intern's school?",
        }

    ])
    .then(answers => {
        console.log(answers);
        const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.school);
        theAssignedTeam.push(intern);
        promptTeambuild();
    })
};

const finishedTeam = () => {


}

questionsManager()