//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your Project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the title of your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Please enter a description of your project.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide a step-by-step description of how to get the development environment running. (required)',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please enter installation instructions for your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use. (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter usage instructions for your project.');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'chosenLicense',
            message: 'What license is being used? If not using a license, select "None".',
            choices: ['None','Apache 2.0', 'Boost', 'Eclipse', 'GNU', 'The Hippocratic License', 'IBM', 'ISC', 'MIT', 'Mozilla', 'Open Database License', 'Perl']
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
            name: 'questions',
            message: 'Contact info for questions. (Required)',
            validate: inquiriesInput => {
                if (inquiriesInput) {
                    return true;
                } else {
                    console.log('Please enter contact info for inquiries or questions about your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username? (Required)',
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                } else {
                    console.log('Please provide your GitHub username.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email.');
                    return false;
                }
            }
        }
    ]);
};


//Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            return (console.log);
        } else {
            console.log('README file created!')
        };
    });
};

//Create a function to initialize app
const init = () => {
    questions()
    .then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
        console.log(data)
    })
};

// Function call to initialize app
init();
