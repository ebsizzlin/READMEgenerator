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

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your GitHub user name?",
        name: "username"
    },

    {
        type: "input",
        message: "What is your project Title?",
        name: "title",
        default: "Generate a README.md file "
    },

    {
        type: "input",
        message: "What is your repo called?",
        name: "repo",
        default: "GoodREADMEGenerator"
    },

    {
        type: "input",
        message: "How do you describe your Project?.",
        name: "desc",
        default:
        " This application will generate a README.md file for your current project"
    },

    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "install",
        default: "Step1: Run npm install and Step2: Run node index.js"
    },

    {
        type: "input",
        message: "Write instructions for using your project.",
        name: "usage",
        default:
        "1.Run node index.js 2.Answers the questions 3.The README.md file will be created. "
    },

    {
        type: "input",
        message:
        "Please enter GitHub user names of the contributor if any. (If there are mulitple contributor, seperate names with comma and no space!)",
        name: "contributors",
        default: "Bharat Modi, Jaren Hubal and Claire Goray"
    },

    {
        type: "input",
        message: "Provide examples on how to run tests.",
        name: "test",
        default: "Insert your tests sample here..."
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(fileName, data, err => {
        if (err)    {
            return console.log(err);
        }
        console.log('Success! Your README.md is generated.')
    })
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
