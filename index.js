const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
    {
        type: "input",
        message: questions[0],
        name: "Description"
    },
    {
        type: "checkbox",
        message: questions[1],
        name: "Table of Contents"
    },
    {
        type: "input",
        message: questions[2],
        name: "Installation"
    },
    {
        type: "input",
        message: questions[3],
        name: "Usage"
    },
    {
        type: "checkbox",
        message: questions[4],
        name: "License"
    },
    {
        type: "input",
        message: questions[5],
        name: "Credit"
    },
])

// TODO: Create an array of questions for user input
const questions = [
    "Write a description of your web application",

    "If you would like to include a Table of Contents, please select the following sections you would like to include in your README file.",

    "What is the process of installation?",

    "How would I, as the user, be able to access and use this application?",

    "Licensed by..?",

    "Credits given to...?",
];

// TODO: Create a function to write README file
fs.writeFile(README.md, structure, ) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// .then((answers) => {
//     fs.writeFile("README.md", 
//     `
//     `)
// })

const structure = `#readmegenerator
A faster way to create README files.
`