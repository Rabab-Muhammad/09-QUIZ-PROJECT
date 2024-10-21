#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const quiz = await inquirer.prompt([
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
let score = 0;
switch (quiz.question1) {
    case "a !== b":
        console.log(chalk.bold.bgGreen("1. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.bold.bgRed("1. Incorrect"));
}
switch (quiz.question2) {
    case "boolean":
        console.log(chalk.bold.bgCyan("2. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.bold.bgMagenta("2. Incorrect"));
}
switch (quiz.question3) {
    case "Declare a block-scoped variable":
        console.log(chalk.bold.bgYellow("3. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.bold.bgBlue("3. Incorrect"));
}
switch (quiz.question4) {
    case "Checks the type of a variable":
        console.log(chalk.bold.bgBlueBright("4. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.bold.bgRedBright("4. Incorrect"));
}
switch (quiz.question5) {
    case "as":
        console.log(chalk.bold.bgGreenBright("5. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.bold.bgYellowBright("5. Incorrect"));
}
console.log(chalk.bold.bgWhite.black(`score: ${score}`));
