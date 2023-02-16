// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


// TODO: Create a function that returns the license link
// If there is no license, return an empty string

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string


// TODO: Create a function to generate markdown for README



const fs = require('fs');
const inquirer = require('inquirer');
const index = require('./index');

function renderLicenseBadge(license) {
  let badge = '';
  if (license === 'MIT') {
    badge = '![License](https://img.shields.io/github/license/judgedgeo/readme-or-readme-not?label=license&style=for-the-badge)'
  } else if (license === 'Apache 2.0') {
    badge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
  } else if (license === 'GPL v3.0') {
    badge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
  }
  return badge;
}

function renderLicenseLink(license) {
  let licenseLink = 'https://choosealicense.com/licenses/mit/';
  if (license === 'MIT') {
    licenseLink = 'https://choosealicense.com/licenses/mit/'
  } else if (license === 'Apache 2.0') {
    licenseLink = 'https://www.apache.org/licenses/LICENSE-2.0'
  } else if (license === 'GPL v3.0') {
    licenseLink = 'https://www.gnu.org/licenses/'
  }
  return licenseLink;
}

function renderLicenseSection(license) {
  let licenseSection = ''
  if (license === 'None') {
    licenseSection - ''
  } else {
    licenseSection =
      `License: `
  }
  return licenseSection;
}
function generateMarkdown(answer) {

  return`
# ${answer.title}

## ${renderLicenseSection(answer.license)} ${renderLicenseBadge(answer.license)}
### ${renderLicenseLink(answer.license)}

## Table of Contents:
### * [License](#license)
### * [Installation](#installation)
### * [Usage](#usage)
### * [Contributors](#contributors)
### * [Questions](#questions)

## Installation:
### You must install the following for this app to function:
### ${answer.installation}

## Usage:
### ${answer.usage}

## Contributors:
### ${answer.contributions}

## Tests:
### Run the following commands in your terminal to test the app:
### ${ answer.test }

## Questions:
### If you have any questions, you may contact me at either
### GitHUb: https: github.com / ${ answer.askMe }
### or
### Email: ${ answer.email }
`;
}
module.exports = generateMarkdown;
// i went on line 85
//