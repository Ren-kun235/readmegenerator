const inquirer = require("inquirer");
const fs = require("fs");

// array of questions
const questions = [
    "What is the title for your application?",

    "Write a description of your web application",

    "If your README is long, please select the following sections you would like to include in your README file.",

    "What is the process of installation?",

    "How would I, as the user, be able to access and use this application?",

    "Please create a list of collaborators for this application, if applicable.",

    "Licensed by...?",

    "Would you like to add badges to your README?",

    "Do you have any extra features in your application you would like to describe?",

    "Where can I, the user, go if I would like to make a contribution to this application?",

    "Is there a way any user could run tests on your application? If so, what steps could I, the user, take to run those tests?",
];

// dynamically created README
function structure(answers) {

    const input = `
# ${answers.Title}

## Description

${answers.Description}

## Table of Contents

${contents(answers.Table)}

## Installation

${answers.Installation}

## Usage

${answers.Usage}

## Credit

${answers.Credit}

## License

${answers.License}

## Badges

![Static Badge](https://img.shields.io/badge/${answers.Badges})

## Features

${answers.Features}

## Contribution

${answers.Contribution}

## Test

${answers.Test}

`

    return input
};

function contents(options) {

    var selection = [];

    for(i = 0; i < options.length; i++) {
        var something = `- [${options[i]}] (#${options[i]})`
        selection.push(something)
    }

    return selection.join(",")
}

// TODO: Create a function to initialize app

function init() {
    inquirer.prompt([
        {
            type: "input",
            message: questions[0],
            name: "Title"
        },
        {
            type: "input",
            message: questions[1],
            name: "Description"
        },
        {
            type: "checkbox",
            message: questions[2],
            name: "Table",
            choices: ["Installation", "Usage", "Credit", "License", "Badges", "Features", "Contributions", "Test", "None"]
        },
        {
            type: "input",
            message: questions[3],
            name: "Installation"
        },
        {
            type: "input",
            message: questions[4],
            name: "Usage"
        },
        {
            type: "input",
            message: questions[5],
            name: "Credit"
        },
        {
            type: "checkbox",
            message: questions[6],
            name: "License",
            choices: ["MIT", "License", "N/A"]
        },

        {
            type: "input",
            message: questions[7],
            name: "Badges"
        },
        {
            type: "input",
            message: questions[8],
            name: "Features"
        },
        {
            type: "input",
            message: questions[9],
            name: "Contributions"
        },
        {
            type: "input",
            message: questions[10],
            name: "Test"
        },
    ])
    .then((answers) => {
        fs.writeFile("README.md", structure(answers), err =>
        err ? console.error(err) : console.log('README created!')
        );
    })
}

// Function call to initialize app
init();
