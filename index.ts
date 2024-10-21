#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const quiz: {
    question1: string;
    question2: string;
    question3: string;
    question4: string;
    question5: string;
} = await inquirer.prompt([
    {
        name: "question1",
        type: "list",
        message: chalk.magenta("Q1. What is the correct way to check if two values are not equal in TypeScript?"),
        choices: ["a == b", "a === b", "a = b", "a !== b"]
    },
    {
        name: "question2",
        type: "list",
        message: chalk.cyan("Q2. Which of the following is a primitive data type in TypeScript?"),
        choices: ["object", "boolean", "array", "function"]
    },
    {
        name: "question3",
        type: "list",
        message: chalk.yellow("Q3. What is the use of `let` in TypeScript?"),
        choices: ["Declare a constant", "Declare a block-scoped variable", "Declare a global variable", "Declare a variable without scope"]
    },
    {
        name: "question4",
        type: "list",
        message: chalk.blue("Q4. What does `typeof` do in TypeScript?"),
        choices: ["Checks if a variable is defined", "Checks the type of a variable", "Checks if a variable is null", "Checks the value of a variable"]
    },
    {
        name: "question5",
        type: "list",
        message: chalk.greenBright("Q5. Which of the following is used for type assertions in TypeScript?"),
        choices: ["as", "assert", "is", "check"]
    }
]);

let score:number = 0;

switch (quiz.question1) {
    case "a !== b":
        console.log(chalk.bold.green("1. Correct!"));
        ++score;
        break;
        default:
            console.log(chalk.bold.red("1. Incorrect"));    
}

switch (quiz.question2) {
    case "boolean":
        console.log(chalk.bold.cyan("2. Correct!"));
        ++score;
        break;
        default:
            console.log(chalk.bold.magenta("2. Incorrect"));    
}

switch (quiz.question3) {
    case "Declare a block-scoped variable":
        console.log(chalk.cyan("3. Correct!"));
        ++score;
        break;
        default:
            console.log(chalk.green("3. Incorrect"));    
}

switch (quiz.question4) {
    case "Checks the type of a variable":
        console.log(chalk.bold.blue("4. Correct!"));
        ++score;
        break;
        default:
            console.log(chalk.red("4. Incorrect"));    
}

switch (quiz.question5) {
    case "as":
        console.log(chalk.yellow("5. Correct!"));
        ++score;
        break;
        default:
            console.log(chalk.white("5. Incorrect"));    
}

console.log(chalk.bold.black(`score: ${score}`));



    
    
