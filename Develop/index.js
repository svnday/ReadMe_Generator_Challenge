// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title of your Project?',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Please enter a description of your project.',
    },
    {
        type: 'input',
        name: 'Installation instructions',
        message: 'Please provide a step-by-step description of how to get the development environment running.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
    },
    {
        type: 'input',
        name: 'license',
        message: 'What licenses are being used?'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who are the contributors?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What commands are needed to run tests?'
    },
    {
        type: 'input',
        name: 'inquiries',
        message: 'Contact info for inquiries'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    }
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
};

// Function call to initialize app
init();
