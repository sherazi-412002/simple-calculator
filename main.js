#! /usr/bin/env node
import inquirer from "inquirer";
//for taking data from user make variable with using prompt
const answer = await inquirer.prompt([
    { message: "Enter your first number", type: "number", name: "firstNumber" },
    { message: "Enter your second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operation to perform opertion",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"],
    },
]);
//conditional statements
if (answer.operator === "addition") {
    console.log("your amswer is : ", answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "subtraction") {
    console.log("Your answer is : ", answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "multiplication") {
    console.log("Your answer is : ", answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "division") {
    console.log("Your answer is : ", answer.firstNumber / answer.secondNumber);
}
else {
    console.log("please select valid operator");
}
