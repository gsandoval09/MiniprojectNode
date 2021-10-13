const inquirer = require("inquirer");
const fs = require("fs")
// const html = require("./generateHtml")
// const path = require("path")
inquirer
const questions = [
    {
        type: "input",
        message: "What is your name?",
        name: "Username",
    },

    {
        type: "input",
        message: "Where are you from?",
        name: "Location",
    },

    {
        type: "input",
        message: "What is your favorite hobby?",
        name: "Hobby",
    },
    
];
// console.log(questions);

function init() {
    inquirer.prompt(questions)
    .then (answers => {
        writeToFile("index.html",markdown(answers))
    })
}

init();