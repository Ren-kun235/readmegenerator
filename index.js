const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name",
        },
        {
            type: "",
        },
        {
            type: "",
        },
    ])

.then((answers) => {
    fs.writeFile("README.md", 
    ``
    , err =>err ? console.log(err): console.log("README.md was created"))
})