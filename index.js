const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
        {
            type: "input",
            message: "Create a short description for your application",
            name: "description",
        },
        {
            type: "input",
            message: "How would I use this application?",
            name: "usage",
        },
        {
            type: "input",
            message: "?",
            name: "credit",
        },
        {
            type: "input",
            message: "Licenses",
            name: "license",
        },
        {
            type: "input",
            message: "",
            name: "badge",
        },
        {
            type: "input",
            message: "",
            name: "",
        },
        {
            type: "input",
            message: "",
            name: "",
        },
    ])

.then((answers) => {
    fs.writeFile("README.md", 
    `
    ## Description

    ${answers.description}
    
    ## Usage
    
    ${answers.usage}
    
    ![alt text](./assets/images/schedule.png)
    
    ## Credit
    
    ${answers.credit}
    
    ## License
    
    ${answers.license}
    ${answers.badge}
    `
    , err =>err ? console.log(err): console.log("README.md was created"))
})