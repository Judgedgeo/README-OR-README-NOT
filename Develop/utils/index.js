// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

const fs =require('fs');
const inquirer = require('inquire');
const generateMarkdown = require('./generateMarkdown');

const questions = [
    {
        type 'input',
        name: 'title',
message: 'What is the title of your project?',
}
]