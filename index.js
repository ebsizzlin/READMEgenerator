var inquirer = require('inquirer');
var fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },

    {
        type: 'input',
        message: "What is your email?:",
        name: 'email'
    },

    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title'
    },

    {
        type: 'input', 
        message: "Enter a brief description:",
        name: 'description'
    },

    {
        type: "input",
        message: "What technologies were used on this project?",
        name: "tech"
    },
    
    {
        type: 'input',
        message: "How do you use this project?",
        name: 'usage'
    },

    {
        type: "input",
        message: "How do you install dependencies?",
        name: "install"
    },

    {
        type: 'input',
        message: "What do you run to test this?",
        name: 'test',
    },

    {
        type: 'input',
        message: "Choose a license:",
        name: 'license',
        choices: [
            "MIT",
            "Apache",
            "GPL",
            "None"
        ]
    },

    {
        type: "input",
        message: "Who contributed to this project?",
        name: "name"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, err => { //fails because filename needs a path to it, data needs string
        if (err)    {
            return console.log(err);
        }
        console.log('Success! Your README.md is generated.')
    })
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then(function(data)    {

        var formattedData = generateMarkdown(data);

        writeToFile('README.md', formattedData);
    })
}

// function call to initialize program
init();
