const inquirer = require("inquirer");
const fs = require("fs")
const html = require("./generatehtml")
const path = require("path")
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
// function writeToFile(){

    function writeToFile(fileName, data) {
        return fs.writeFileSync(path.join (process.cwd (),fileName),data
        )
    }

    // fs.writeFile('index.html', 'answers', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   });
// }

function init() {
    inquirer.prompt(questions)
    .then (answers => {
        writeToFile("index.html",html(answers))
    })
}






init();