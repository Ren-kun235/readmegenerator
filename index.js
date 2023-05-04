const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
        {
            type: "input",
            message: "Create a short description for your application",
            name: "description",
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
    `
    , err =>err ? console.log(err): console.log("README.md was created"))
})