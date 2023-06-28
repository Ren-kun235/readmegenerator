const inquirer = require("inquirer");
const fs = require("fs");

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
        name: "Table"
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
        type: "checkbox",
        message: questions[5],
        name: "License"
    },
    {
        type: "input",
        message: questions[6],
        name: "Credit"
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

// TODO: Create an array of questions for user input
const questions = [
    "What is the title for your Application?",

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

// TODO: Create a function to write README file
fs.writeFile(README.md, structure, (err) =>
    err ? console.error(err) : console.log('Commit logged!')
);

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// .then((answers) => {
//     fs.writeFile("README.md", 
//     `
//     `)
// })

const structure = `
#${this.Title}

##${this.Description}

##${this.Table}

##${this.Installation}

##${this.Usage}

##${this.Credit}

##${this.Badges}

##${this.Features}

##${this.Contribution}

##${this.Test}



`