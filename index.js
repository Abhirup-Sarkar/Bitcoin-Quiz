var readlineSync = require("readline-sync");
var score = 0;

//Taking username as input

var userName = readlineSync.question("What's your name?\n");
console.log("Hi "+userName+"! Welcome to the 'Bitcoin Quiz' game.");
console.log("------------------");
if(readlineSync.keyINYN("have you understood the instruction?"))
{
    console.log("Good! Now let's start playing.");

}
else
{
    console.log("Read the 'About the game' section again.");
}
console.log("------------------");
//play function

function play(question,correctAnser)
{
    var userAnswer = readlineSync.question("Enter the correct option: ");

    if(userAnswer == questionList[i].correctAnswer)
    {
        console.log("Congrats!\nYour answer is correct. ");
        score = score + 1;

    }
    else
    {
        console.log("Too bad!\nYour answer is incorrect");
        score = score + 0;
    }
    console.log("Your current score is :",score);
    console.log("------------------");
}
//question list

var questionList=[
    {
        question: "1. What is bitcoin? ",
        a: "[a]: Cryptocurrency",
        b: "[b]: an ancient coin of 18th century",
        c: "[c]: a coin with bite marks",
        correctAnswer: "a",

    },
    {
        question: "2. Who is the founder of bitcoin? ",
        a: "[a]: Elon Musk",
        b: "[b]: John Bitcoin",
        c: "[c]: Satoshi Nakamoto",
        correctAnswer: "c",
    },
    {
        question: "3. In which year was the first bitcoin block mined? ",
        a: "[a]: 2009",
        b: "[b]: 2021",
        c: "[c]: 2013",
        correctAnswer: "a",

    },
    {
        question: "4. What is the underlying system used to build bitcoin?",
        a: "[a]: Shilling",
        b: "[b]: Blockchain",
        c: "[c]: Cryptoscript",
        correctAnswer: "b",

    },
    {
        question: "5. What is the largest crypto exchange in the world in terms of volume? ",
        a: "[a]: Houbi Global",
        b: "[b]: Coinbase",
        c: "[c]: Binance",
        correctAnswer: "c",
    }
]
