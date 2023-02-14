// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input


// TODO: Create a function to write README file


// TODO: Create a function to initialize app


// Function call to initialize app


const fs = require('fs');
const inquirer = require('inquire');
const generateMarkdown = require('./generateMarkdown');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a project title');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does your project use?',
        choices: ['None', 'Apache 2.0', 'MIT', 'GPL v 3.0'],
        validate: LicenseInput = () => {
            if (LicenseInput) {
                return true;
            } else {
                console.log('Please select one fo the four options')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a project description',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Provide a project description')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What steps are needed to install your project?',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please provide installation steps')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: ('What is the use of your project'),
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Provide a use for your project')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'What guidelines must others follow in order to contribute?',
        validate: contributionsInput => {
            if (contributionsInput) {
                return true;
            } else {
                console.log('Please enter contribution guidelines')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'How do you test this project?',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('Provide a project description')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'askMe',
        message: 'What is your Github username so others can reach your for questions?',
        validate: askMeInput => {
            if (askMeInput) {
                return true;
            } else {
                console.log('Please provide your username so others can reach out to you with questions')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email so there is another way to be reached for questions?',
        validate: emailInput => {
            if (askMeInput) {
                return true;
            } else {
                console.log('Please provide your username so others can reach out to you with questions')
                return false;
            }
        }
    }

];

//function to Write README file
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./generateREADME.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true
            });
        });
    });
};

//to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (answer) {
            console.log(answer);
            var fileContent = generateMarkdwon(answer);
            writeToFile(fileContent)
        });
}

//to call to initialize app
init();

//export it
module.exports = questions;

