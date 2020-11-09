// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

var inquirer = require('inquirer');
var fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your name??",
        name: "name"
    },

    {
        type: 'input',
        message: "What is your email?",
        name: 'email'
    },

    {
        type: 'input',
        message: "What is your Github username?",
        name: 'username'
    },

    {
        type: 'input',
        message: "What is your ReadMe title?",
        name: 'title'
    },

    {
        type: 'input', 
        message: "Enter a brief description",
        name: 'description'
    },

    {
        type: 'input',
        message: "Are there any guidlines for how developers can contribute to your project?",
        name: 'guidelines'
    },

    {
        type: 'input',
        message: "What is your name?",
        name: 'name'
    },

    {
        type: 'input',
        message: "Provide any tests for your application on how to run them.",
        name: 'tests',
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
